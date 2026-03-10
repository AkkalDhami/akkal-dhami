"use client";

import { CheckIcon, CircleXIcon, CopyIcon } from "lucide-react";
import type { ComponentProps } from "react";

import type { CopyState } from "@/hooks/use-copy-to-clipboard";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

export function CopyStateIcon({
  state,
  docs = false
}: {
  state: CopyState;
  docs: boolean;
}) {
  return state === "idle" ? (
    <span key="idle">
      <CopyIcon
        size={16}
        className={cn(
          "transition-all",
          "scale-100 opacity-100",
          docs
            ? "stroke-neutral-400 group-hover/icon:stroke-white"
            : "stroke-muted-foreground group-hover/icon:stroke-primary"
        )}
      />
    </span>
  ) : state === "done" ? (
    <span key="done">
      <CheckIcon
        size={16}
        className={cn(
          "stroke-primary group-hover:text-primary transition-all",
          "scale-100 opacity-100",
          docs
            ? "stroke-white group-hover/icon:stroke-white"
            : "stroke-muted-foreground group-hover/icon:stroke-primary"
        )}
      />
    </span>
  ) : state === "error" ? (
    <span key="error">
      <CircleXIcon
        size={16}
        className={cn(
          "stroke-current text-red-500 transition-all",
          "scale-100 opacity-100"
        )}
      />
    </span>
  ) : null;
}

export type CopyButtonProps = ComponentProps<"button"> & {
  text: string | (() => string);
  onCopySuccess?: (text: string) => void;
  onCopyError?: (error: Error) => void;
  children?: React.ReactNode;
  docs: boolean;
};

export function CopyButton({
  children,
  text,
  onCopySuccess,
  onCopyError,
  onClick,
  className,
  docs,
  ...props
}: CopyButtonProps) {
  const { state, copy } = useCopyToClipboard({
    onCopySuccess,
    onCopyError
  });

  return (
    <button
      onClick={e => {
        copy(text);
        onClick?.(e);
      }}
      className={cn(
        "group/icon focus-visible:ring-ring/50 text-muted-foreground hover:text-primary absolute right-0 flex cursor-pointer items-center justify-center px-1 py-1 transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed",
        "duration-100 ease-in-out",
        "py-1",
        className
      )}
      aria-label="Copy"
      {...props}>
      <CopyStateIcon state={state} docs={docs} />
      {children}
    </button>
  );
}
