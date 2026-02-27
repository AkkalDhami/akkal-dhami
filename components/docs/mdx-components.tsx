import type { MDXComponents } from "mdx/types";
import { Pre } from "./pre";

import PackageManagerTabs from "./package-manager-tabs";
import Code from "./custom-code";
import Note from "./note";
import { cn } from "@/lib/utils";

export const mdxComponents: MDXComponents = {
  pre: Pre,
  PackageManagerTabs,
  Code,
  Note,
  h1: props => <h1 className="text-3xl font-bold tracking-tight" {...props} />,
  h2: props => (
    <h2 className="my-3 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h3: props => (
    <h3
      className="this-page-link mt-4 mb-4 text-xl font-medium tracking-tight"
      {...props}
    />
  ),
  h4: props => (
    <h4 className="mt-4 mb-4 text-lg font-medium tracking-tight" {...props} />
  ),
  p: props => <p className="text-muted-primary my-2 leading-7" {...props} />,
  code: props => (
    <code
      className="thin-scrollbar max-h-120 max-w-[272.5px] overflow-x-auto px-3 py-2.5 font-mono leading-relaxed sm:max-w-full"
      {...props}
    />
  ),
  a: props => (
    <a
      target="_blank"
      className="text-muted-primary hover:text-foreground font-medium underline underline-offset-1"
      {...props}
    />
  ),
  ul: props => (
    <ul className="text-muted-primary list-disc space-y-2.5 pl-2" {...props} />
  ),
  ol: props => (
    <ol
      className="text-muted-primary list-decimal space-y-2.5 pl-2"
      {...props}
    />
  ),
  strong: props => <strong className="text-primary" {...props} />,
  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      className={cn("text-primary mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "text-primary mt-8 mb-3 scroll-m-32 text-xl font-medium tracking-tight",
        className
      )}
      {...props}
    />
  ),
  Steps: ({ className, ...props }: React.ComponentProps<"div">) => (
    <div
      className={cn(
        "[&>h3]:step steps mb-12 [counter-reset:step] md:ml-4 md:border-l md:pl-8",
        className
      )}
      {...props}
    />
  )
};
