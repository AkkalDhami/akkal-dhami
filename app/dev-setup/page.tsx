import { Metadata } from "next";
import { SetupSection } from "@/components/setup/setup-section";

export const metadata: Metadata = {
  title: "Development Setup",
  description:
    "A detailed look at my development environment, including my IDE setup, themes, fonts, and tools."
};

export default function Page() {
  return (
    <div className="mt-8 px-3">
      <SetupSection />
    </div>
  );
}
