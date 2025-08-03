import { SYSTEM_PROMPT } from "@/constants/prompt";
import { DATA } from "@/data/resume";
import { google } from "@ai-sdk/google";
import { convertToModelMessages, UIMessage } from "ai";

export const getBotConfig = (messages: UIMessage[]) => ({
  model: google("gemini-2.5-flash"),
  messages: convertToModelMessages(messages),
  system: SYSTEM_PROMPT + "\n\n" + JSON.stringify(DATA),
});
