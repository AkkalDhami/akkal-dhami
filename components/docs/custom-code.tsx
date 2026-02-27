import React from "react";

export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-secondary text-accent-foreground border border-neutral-500/30 px-1.5 py-0.5">
      {children}
    </code>
  );
}
