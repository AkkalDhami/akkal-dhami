import { CODE_THEME_BG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";

export default function CopyButton({
  handleCopy,
  copied,
  className
}: {
  handleCopy: () => void;
  copied: boolean;
  className?: string;
}) {
  return (
    <button
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className={cn(
        "group focus-visible:ring-ring/50 absolute right-0 flex h-auto w-9 cursor-pointer items-center justify-center transition-[color,box-shadow] outline-none hover:text-white focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed",
        "duration-100 ease-in-out",
        copied ? "text-white" : "text-neutral-400 dark:text-neutral-400",
        "py-1",
        className
      )}
      style={{
        backgroundColor: CODE_THEME_BG
      }}
      disabled={copied}
      onClick={handleCopy}
      type="button">
      <CheckIcon
        aria-hidden="true"
        className={cn(
          "stroke-current transition-all group-hover:text-white",
          copied ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
        size={16}
      />
      <CopyIcon
        aria-hidden="true"
        className={cn(
          "absolute transition-all group-hover:text-white",
          copied ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
        size={16}
      />
    </button>
  );
}
