import { getGitHubContributions } from "@/data/github-contributions";
import { Suspense } from "react";
import { Panel } from "../ui/pannel";
import {
  GitHubContributionFallback,
  GitHubContributionGraph
} from "./contribution";

export async function GitHubContributions() {
  const contributions = await getGitHubContributions();

  return (
    <Panel>
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph initialData={contributions} />
      </Suspense>
    </Panel>
  );
}
