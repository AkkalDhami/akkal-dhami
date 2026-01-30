"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from "react-icons/fa";
import { SiGithub, SiMongodb, SiTailwindcss } from "react-icons/si";
import { ProjectCard } from "./project-card";
import { BorderBeam } from "../ui/border-beam";
import Link from "next/link";
import type { IconType } from "react-icons";

// Define types for the project data
export interface Technology {
  name: string;
  icon: IconType;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  images: string[];
  liveUrl: string;
  githubUrl: string;
  features: string[];
  category: string;
}

// Mock project data
const mockProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing online stores with real-time analytics and inventory management.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Python", icon: FaPython },
      { name: "MongoDB", icon: SiMongodb },
      { name: "TailwindCSS", icon: SiTailwindcss }
    ],
    images: [
      "/elon.jpg",
      "/sundar.avif",
      "/elon.jpg",
      "/sundar.avif",
      "/elon.jpg",
      "/sundar.avif"
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example/project",
    features: [
      "Real-time analytics",
      "Inventory management",
      "Sales tracking",
      "Customer insights"
    ],
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "JavaScript", icon: FaJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "CSS3", icon: FaCss3Alt }
    ],
    images: [
      "/elon.jpg",
      "/sundar.avif",
      "/elon.jpg",
      "/sundar.avif",
      "/elon.jpg",
      "/sundar.avif"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/example/banking-app",
    features: [
      "Biometric authentication",
      "Real-time transactions",
      "Budget tracking",
      "Secure encryption"
    ],
    category: "Mobile App"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool for creating blog posts, social media content, and marketing copy.",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "JavaScript", icon: FaJs },
      { name: "TailwindCSS", icon: SiTailwindcss }
    ],
    images: [
      "/elon.jpg",
      "/sundar.avif",
      "/elon.jpg",
      "/sundar.avif",
      "/elon.jpg",
      "/sundar.avif"
    ],
    liveUrl: "https://ai-content.example.com",
    githubUrl: "https://github.com/example/ai-content",
    features: [
      "AI-powered generation",
      "Multiple content types",
      "SEO optimization",
      "Content scheduling"
    ],
    category: "AI/ML"
  },
  {
    id: 4,
    title: "Task Management System",
    description:
      "Collaborative task management platform with real-time updates and team collaboration features.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "JavaScript", icon: FaJs },
      { name: "TailwindCSS", icon: SiTailwindcss }
    ],
    images: [
      "/proj-1.png",
      "/sundar.avif",
      "/elon.jpg",
      "/sundar.avif",
      "/elon.jpg",
      "/sundar.avif"
    ],
    liveUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/example/task-manager",
    features: [
      "Real-time updates",
      "Team collaboration",
      "Project management",
      "Task scheduling"
    ],
    category: "Productivity"
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description:
      "Beautiful weather application with detailed forecasts, maps, and location-based alerts.",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "HTML5", icon: FaHtml5 },
      { name: "TailwindCSS", icon: SiTailwindcss }
    ],
    images: [
      "/elon.jpg",
      "/sundar.avif",
      "/elon.jpg",
      "/sundar.avif",
      "/elon.jpg",
      "/sundar.avif"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/example/weather-app",
    features: [
      "Real-time weather",
      "Interactive maps",
      "Location alerts",
      "Detailed forecasts"
    ],
    category: "Web App"
  }
];

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short"
  });
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen py-16 mb-12 bg-background sm:px-4">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center">
          {/* <HeaderBadge
            icon={<Sparkles className="size-4" />}
            text="My Projects"
          /> */}
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A collection of projects that showcase my skills in modern web
            development and problem-solving capabilities.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-8">
          {mockProjects.map(project => (
            <motion.div key={project.id} variants={fadeInUp} className="group">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center">
          <Button
            variant="outline"
            render={
              <Link href={"https://github.com/akkaldhami"} target="_blank">
                <SiGithub className="w-4 h-4 mr-2" /> Explore My GitHub Profile
                <BorderBeam
                  size={40}
                  initialOffset={20}
                  className="from-transparent via-neutral-900 dark:via-neutral-50 to-transparent"
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 20
                  }}
                />
              </Link>
            }
            size="lg"
            className="relative rounded-md bg-linear-t hover:bg-transparent hover:shadow-primary"></Button>
        </motion.div>
      </div>
    </section>
  );
}
