import { Metadata } from "next";
import { TemplateSection } from "@/components/templates/template-section";

export const metadata: Metadata = {
  title: "Templates",
  description:
    "A curated collection of beautiful portfolio templates and modern landing pages crafted for performance and design."
};

export default function Page() {
  return (
    <div className="border-edge mx-auto max-w-4xl border-x px-4 pt-16 pb-2">
      <TemplateSection />
    </div>
  );
}
