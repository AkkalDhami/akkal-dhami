import { getSingletonHighlighter } from "shiki";
import { DEFAULT_CODE_THEME } from "@/lib/constants";

const getHighlighter = (theme: string) =>
  getSingletonHighlighter({
    themes: [theme],
    langs: ["bash", "ts"]
  });

export async function CodeBlock({
  code,
  lang = "bash"
}: {
  code: string;
  lang?: string;
}) {
  const theme = DEFAULT_CODE_THEME;

  const highlighter = await getHighlighter(theme);

  const html = highlighter.codeToHtml(code, {
    lang,
    theme
  });

  return (
    <div
      className="relative [&_pre]:max-h-80 [&_pre]:overflow-x-hidden [&_pre]:rounded-b-md [&_pre]:px-4 [&_pre]:py-4 sm:[&_pre]:max-w-[695px]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
