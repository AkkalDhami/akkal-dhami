"use client";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Check, LinkIcon } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import TechBadge from "./tech-badge";

import type { Project } from "./project-section";
import { DetailSwapCard } from "./card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden bg-transparent border-0 shadow-none dark:bg-transparent">
      <div className="lg:flex">
        {/* Project Image */}
        <div className="relative overflow-hidden lg:w-2/5">
          <div className="relative aspect-video lg:aspect-auto lg:h-full">
            <DetailSwapCard
              data={{
                images: project.images
              }}
              imageHeight={480}
              imageFit="cover"
              showThumbnailNavigator
              showDotIndicator
              showImageCounter={false}
            />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="px-3 border bg-neutral-900 border-neutral-500/30 dark:bg-neutral-100 backdrop-blur-sm">
                {project.category}
              </Badge>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="lg:w-3/5">
          <CardContent className="p-4 lg:p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="mb-2 text-xl font-medium md:text-2xl">
                  {project.title}
                </h3>
              </div>
            </div>

            <p className="mb-6 leading-relaxed ">{project.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h4 className="mb-3 text-base font-semibold">Key Features:</h4>
              <ul className="flex flex-col space-y-2.5">
                {project.features.slice(0, 4).map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-base font-medium text-muted-foreground">
                    <Check className="w-4 h-4 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="mb-3 text-base font-semibold t">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <TechBadge key={idx} tech={tech} />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="flex bg-linear-l hover:shadow-primary items-center w-auto gap-2 px-3 py-1 duration-300 bg-transparent border rounded-sm cursor-pointer backdrop-blur-sm border-neutral-500/30 dark:border-neutral-500/40 hover:border-neutral-400 dark:hover:border-neutral-500">
                  <LinkIcon className="w-4 h-4" />
                  Live Demo
                </Link>
              )}
              <Button
                variant="default"
                size="sm"
                className="flex hover:shadow-primary items-center gap-2"
                render={
                  <Link href={project.githubUrl} target="_blank">
                    <SiGithub className="w-4 h-4" />
                    Source Code
                  </Link>
                }></Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
