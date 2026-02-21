import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Robustly extract a JSON object from AI response text.
 * Handles: raw JSON, ```json...```, ``` ... ```, and truncated responses.
 */
function extractJson(text: string): Record<string, unknown> {
  const trimmed = text.trim();

  // Strategy 1: Raw JSON (no code fence)
  if (trimmed.startsWith("{")) {
    try {
      return JSON.parse(trimmed);
    } catch {
      // fall through
    }
  }

  // Strategy 2: Extract between opening code fence and the LAST closing fence.
  // Use lastIndexOf to handle nested backticks in JSON string values.
  const openFenceEnd = trimmed.indexOf("\n", trimmed.indexOf("```"));
  const lastFenceStart = trimmed.lastIndexOf("```");
  if (openFenceEnd !== -1 && lastFenceStart > openFenceEnd) {
    const candidate = trimmed.slice(openFenceEnd + 1, lastFenceStart).trim();
    try {
      return JSON.parse(candidate);
    } catch {
      // fall through
    }
  }

  // Strategy 3: Find the first { and last } in the entire text
  const firstBrace = trimmed.indexOf("{");
  const lastBrace = trimmed.lastIndexOf("}");
  if (firstBrace !== -1 && lastBrace > firstBrace) {
    const candidate = trimmed.slice(firstBrace, lastBrace + 1);
    try {
      return JSON.parse(candidate);
    } catch {
      // fall through
    }
  }

  // All strategies failed — dump full response for debugging
  throw new Error(
    `Could not extract JSON from AI response.\nFull text:\n${trimmed}`
  );
}

let genAIInstance: GoogleGenerativeAI | null = null;

function getGeminiClient(): GoogleGenerativeAI {
  if (!genAIInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error(
        "GEMINI_API_KEY is not configured. Set GEMINI_API_KEY in .env.local."
      );
    }
    genAIInstance = new GoogleGenerativeAI(apiKey);
  }
  return genAIInstance;
}

// Models to try in order. Each has 20 RPD free tier.
// By rotating, we get 40 RPD total.
const MODELS = ["gemini-2.5-flash-lite", "gemini-2.5-flash"] as const;
let currentModelIndex = 0;

/**
 * Generate structured JSON content using AI.
 * Uses Gemini models with automatic fallback on rate limit (429).
 * Rotates between gemini-2.5-flash-lite and gemini-2.5-flash (40 RPD combined).
 */
export async function generateContent(
  systemPrompt: string,
  userPrompt: string,
  options?: { maxTokens?: number }
): Promise<Record<string, unknown>> {
  const genAI = getGeminiClient();

  for (let attempt = 0; attempt < MODELS.length; attempt++) {
    const modelName = MODELS[(currentModelIndex + attempt) % MODELS.length];
    try {
      const model = genAI.getGenerativeModel({
        model: modelName,
        systemInstruction: systemPrompt,
      });

      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: userPrompt }] }],
        generationConfig: {
          maxOutputTokens: options?.maxTokens ?? 2000,
        },
      });

      const text = result.response.text();
      return extractJson(text);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      if (msg.includes("429") && attempt < MODELS.length - 1) {
        // Rate limited — try next model
        currentModelIndex = (currentModelIndex + attempt + 1) % MODELS.length;
        continue;
      }
      throw err;
    }
  }

  throw new Error("All models exhausted (rate limited)");
}

/** Get the name of the model currently being used. */
export function getCurrentModel(): string {
  return MODELS[currentModelIndex];
}
