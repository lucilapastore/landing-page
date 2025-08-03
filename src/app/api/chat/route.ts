import { getBotConfig } from "@/constants/bot-config";
import { streamText, UIMessage } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText(getBotConfig(messages));

  return result.toUIMessageStreamResponse();
}
