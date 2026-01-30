"use client";

import { motion } from "motion/react";

import { FlipWords } from "@/components/ui/flip-words";

import { SocialLinks } from "./social-link";
import { PrimaryButton } from "../ui/primary-button";
import { CornerMarkers } from "../ui/corner-markers";

const HERO_WORDS = [
  "Full-Stack JavaScript Engineer",
  "Next.js & React Developer",
  "Backend Engineer with Node & Express",
  "TypeScript-First Developer",
  "API Architect (REST & GraphQL)",
  "Builder of Scalable Web Systems",
  "Performance-Focused Web Engineer",
  "Clean Code & System Design Advocate"
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export function HeroSection() {
  return (
    <section
      id="about"
      className="bg-background relative mt-20 flex min-h-[90vh] items-center justify-center overflow-hidden font-normal sm:px-4">
      <div className="relative z-10 container mx-auto">
        <div className="mt-6 sm:mt-0">
          <motion.h1
            {...fadeUp}
            transition={{ delay: 0.2 }}
            className="mb-5 text-3xl font-semibold tracking-tighter text-balance sm:text-3xl lg:text-4xl font-mono xl:text-5xl">
            Akkal Dhami
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-3 flex flex-col lg:text-left">
            <motion.h2
              {...fadeUp}
              transition={{ delay: 0.3 }}
              className="text-muted-primary mb-6 text-lg font-medium md:text-xl">
              <FlipWords words={HERO_WORDS} />
            </motion.h2>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.45 }}
              className="text-muted-foreground mb-8 w-full max-w-xl text-lg leading-relaxed">
              I design and build modern, high-performance web applications
              using:
              <br />
              <div className="flex mt-2 flex-wrap items-center gap-2">
                {[
                  "Next.js",
                  "React.js",
                  "TypeScript",
                  "Node.js",
                  "MongoDB",
                  "MySQL"
                ].map((tech, index) => (
                  <TechStack key={index} tech={tech} />
                ))}
              </div>
              <span className="mt-2 inline-block">
                My focus is clean architecture, scalable systems, and thoughtful
                user experiences.
              </span>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.6 }}
              className="flex mb-12 flex-wrap items-center gap-4 lg:justify-start">
              <PrimaryButton as="a" href="/projects">
                View My Work
                <CornerMarkers
                  offset={7}
                  hoverOffset={7}
                  key={"primary-button"}
                />
              </PrimaryButton>
              <PrimaryButton variant="outline" as="a" href="/resume.pdf">
                Download Resume
                <CornerMarkers
                  offset={7}
                  hoverOffset={7}
                  key={"primary-button"}
                />
              </PrimaryButton>
            </motion.div>

            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TechStack({ tech }: { tech: string }) {
  return (
    <span className="from-background to-card-hover text-accent-foreground mx-0.5 inline-flex items-center border border-dashed border-neutral-400 bg-linear-to-r px-1.5 text-base dark:border-neutral-500">
      {tech}
    </span>
  );
}
