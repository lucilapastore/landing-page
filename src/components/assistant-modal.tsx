"use client";

import { BotIcon, ChevronDownIcon } from "lucide-react";

import { AssistantModalPrimitive } from "@assistant-ui/react";
import type React from "react";
import { type FC, forwardRef, useEffect, useState } from "react";

import { Thread } from "@/components/thread";
import { TooltipIconButton } from "@/components/tooltip-icon-button";

interface AssistantModalProps {
  children?: React.ReactNode;
}

// Single modal root with desktop trigger and children (for navbar)
export const AssistantModal: FC<AssistantModalProps> = ({ children }) => {
  return (
    <AssistantModalPrimitive.Root>
      {/* Desktop floating trigger */}
      <AssistantModalPrimitive.Anchor className="fixed bottom-10 sm:bottom-4 right-4 size-14 hidden sm:block">
        <AssistantModalPrimitive.Trigger asChild>
          <AssistantModalButton />
        </AssistantModalPrimitive.Trigger>
      </AssistantModalPrimitive.Anchor>

      {/* Render children (navbar) within modal context */}
      {children}

      <AssistantModalContent />
    </AssistantModalPrimitive.Root>
  );
};

// Navbar trigger that renders within the existing modal context using React Portal
export const AssistantModalNavbarTrigger: FC = () => {
  return (
    <AssistantModalPrimitive.Trigger asChild>
      <AssistantNavbarButton />
    </AssistantModalPrimitive.Trigger>
  );
};

// Shared modal content
export const AssistantModalContent: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640); // 640px is Tailwind's sm breakpoint
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <AssistantModalPrimitive.Content
      sideOffset={isMobile ? 128 : 16}
      className="bg-popover text-popover-foreground z-50 h-[500px] w-[400px] overflow-clip rounded-xl border p-0 shadow-md outline-none [&>.aui-thread-root]:bg-inherit data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out data-[state=open]:zoom-in data-[state=open]:slide-in-from-bottom-1/2 data-[state=open]:slide-in-from-right-1/2 data-[state=closed]:slide-out-to-bottom-1/2 data-[state=closed]:slide-out-to-right-1/2"
    >
      <Thread />
    </AssistantModalPrimitive.Content>
  );
};

type AssistantModalButtonProps = { "data-state"?: "open" | "closed" };

// Desktop floating button
const AssistantModalButton = forwardRef<
  HTMLButtonElement,
  AssistantModalButtonProps
>(({ "data-state": state, ...rest }, ref) => {
  const tooltip = state === "open" ? "Close Assistant" : "Open Assistant";

  return (
    <TooltipIconButton
      variant="default"
      tooltip={tooltip}
      side="left"
      {...rest}
      className="size-full rounded-full shadow transition-transform hover:scale-110 active:scale-90"
      ref={ref}
    >
      <BotIcon
        data-state={state}
        className="absolute size-8 transition-all data-[state=closed]:rotate-0 data-[state=open]:rotate-90 data-[state=closed]:scale-100 data-[state=open]:scale-0"
      />

      <ChevronDownIcon
        data-state={state}
        className="absolute size-6 transition-all data-[state=closed]:-rotate-90 data-[state=open]:rotate-0 data-[state=closed]:scale-0 data-[state=open]:scale-100"
      />
      <span className="sr-only">{tooltip}</span>
    </TooltipIconButton>
  );
});

// Mobile navbar button
const AssistantNavbarButton = forwardRef<
  HTMLButtonElement,
  AssistantModalButtonProps
>(({ "data-state": state, ...rest }, ref) => {
  const tooltip = state === "open" ? "Close Assistant" : "Open Assistant";

  return (
    <TooltipIconButton
      variant="ghost"
      tooltip={tooltip}
      side="top"
      {...rest}
      className="size-12 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
      ref={ref}
    >
      <BotIcon className="size-4" />
      <span className="sr-only">{tooltip}</span>
    </TooltipIconButton>
  );
});

AssistantModalButton.displayName = "AssistantModalButton";
AssistantNavbarButton.displayName = "AssistantNavbarButton";
