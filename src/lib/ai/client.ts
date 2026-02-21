import { GoogleGenerativeAI } from "@google/generative-ai";

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

/**
 * Generate structured JSON content using AI.
 * Uses Google Gemini 1.5 Flash (free tier: 1,500 requests/day).
 */
export async function generateContent(
  systemPrompt: string,
  userPrompt: string,
  options?: { maxTokens?: number }
): Promise<Record<string, unknown>> {
  const genAI = getGeminiClient();
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-lite",
    systemInstruction: systemPrompt,
  });

  const result = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: userPrompt }] }],
    generationConfig: {
      maxOutputTokens: options?.maxTokens ?? 2000,
    },
  });

  const text = result.response.text();

  // Extract JSON from the response (may be wrapped in markdown code block)
  const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/) ?? [null, text];
  const jsonStr = jsonMatch[1]!.trim();

  return JSON.parse(jsonStr);
}
