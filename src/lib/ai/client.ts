import Anthropic from "@anthropic-ai/sdk";

let anthropicInstance: Anthropic | null = null;

function getAnthropicClient(): Anthropic {
  if (!anthropicInstance) {
    anthropicInstance = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return anthropicInstance;
}

/**
 * Generate structured JSON content using AI.
 * Uses Claude Haiku 4.5 for cost efficiency.
 */
export async function generateContent(
  systemPrompt: string,
  userPrompt: string
): Promise<Record<string, unknown>> {
  const client = getAnthropicClient();

  const response = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 2000,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
  });

  const textBlock = response.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error("AI returned empty response");
  }

  // Extract JSON from the response text (may be wrapped in markdown code block)
  const text = textBlock.text;
  const jsonMatch = text.match(/```(?:json)?\s*([\s\S]*?)```/) ?? [
    null,
    text,
  ];
  const jsonStr = jsonMatch[1]!.trim();

  return JSON.parse(jsonStr);
}
