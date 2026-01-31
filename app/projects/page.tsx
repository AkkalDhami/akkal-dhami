import { ProjectsSection } from "@/components/projects/project-section";

export default function Page() {
  return (
    <div className="mt-8 px-3">
      <ProjectsSection details={false} />
    </div>
  );
}
