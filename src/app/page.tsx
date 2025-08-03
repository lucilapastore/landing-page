"use client";

import { AssistantModal } from "@/components/assistant-modal";
import Navbar from "@/components/navbar";
import { ResumePage } from "@/components/resume-page";
import { useChat } from "@ai-sdk/react";
import { AssistantRuntimeProvider } from "@assistant-ui/react";
import { useAISDKRuntime } from "@assistant-ui/react-ai-sdk";

export default function Page() {
  const chat = useChat();
  const runtime = useAISDKRuntime(chat);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <ResumePage />

      {/* Wrap both navbar and modal in the same modal context */}
      <AssistantModal>
        <Navbar showAssistant={true} />
      </AssistantModal>
    </AssistantRuntimeProvider>
  );
}
