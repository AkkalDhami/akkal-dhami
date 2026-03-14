import { getGitHubContributions } from "@/data/github-contributions";
import { Suspense } from "react";
import {
  GitHubContributionFallback,
  GitHubContributionGraph
} from "./contribution";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export async function GitHubContributions({
  home = false
}: {
  home?: boolean;
}) {
  const contributions = await getGitHubContributions();

  return (
    <Section
      id="github-contributions"
      className={cn(home && "screen-line-before")}>
      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph initialData={contributions} />
      </Suspense>
    </Section>
  );
}
