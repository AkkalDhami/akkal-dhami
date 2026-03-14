import { Metadata } from "next";
import { ProjectsSection } from "@/components/projects/project-section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of my recent work in web development, from full-stack applications to component registries."
};

export default function Page() {
  return (
    <div className="border-edge mx-auto max-w-4xl border-x px-4 pt-18 pb-4">
      <ProjectsSection details={false} />
    </div>
  );
}
