import { ContactSection } from "@/components/contact/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { GitHubContributions } from "@/components/github";
import { ProjectsSection } from "@/components/projects/project-section";
import { SkillsSection } from "@/components/skills/skill-section";
import { PlaybookSection } from "@/components/playbook/playbook-section";
import { TemplateSection } from "@/components/templates/template-section";
import { StackMarquee } from "@/components/shared/stack-marquee";
import { cn } from "@/lib/utils";

export default async function Page() {
  return (
    <div className="border-edge mx-auto max-w-4xl border-x px-4">
      <HeroSection />
      <ProjectsSection home />

      <GitHubContributions home />

      <PlaybookSection home />

      <SkillsSection home />
      <TemplateSection home />
      <StackMarquee home />
      <ContactSection home />
    </div>
  );
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
}
