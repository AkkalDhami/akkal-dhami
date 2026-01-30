"use client";

import { motion } from "motion/react";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { HeaderBadge } from "../ui/header-badge";
import TechBadge from "./tech-badge";
import { HiArrowLongRight } from "react-icons/hi2";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact
} from "react-icons/fa6";
import {
  SiGooglecloud,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript
} from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const experiences = [
  {
    id: 1,
    type: "work",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    duration: "2022 - Present",
    description:
      "Leading frontend development for enterprise SaaS products. Mentoring junior developers and driving technical excellence.",
    achievements: [
      "Led migration from Angular to React, improving performance by 40%",
      "Implemented design system used by 50+ developers",
      "Reduced bundle size by 60% through code splitting"
    ],
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "JavaScript", icon: FaJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "AWS", icon: FaAws },
      { name: "GraphQL", icon: GrGraphQl }
    ],
    icon: Briefcase
  },
  {
    id: 2,
    type: "work",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    duration: "2020 - 2022",
    description:
      "Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams.",
    achievements: [
      "Built scalable microservices architecture",
      "Improved application performance by 30%",
      "Implemented CI/CD pipeline reducing deployment time by 70%"
    ],
    technologies: [
      { name: "Next.js", icon: RiNextjsLine },
      { name: "Node.js", icon: FaNodeJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Docker", icon: FaDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "AWS", icon: FaAws },
      { name: "GraphQL", icon: GrGraphQl }
    ],
    icon: Briefcase
  },
  {
    id: 3,
    type: "education",
    title: "Master of Computer Science",
    company: "Stanford University",
    location: "Stanford, CA",
    duration: "2018 - 2020",
    description:
      "Specialized in Human-Computer Interaction and Machine Learning. Graduated with honors.",
    achievements: [
      "Graduated Summa Cum Laude",
      "Published research on AI accessibility",
      "Teaching Assistant for Advanced Web Development"
    ],
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "AWS", icon: FaAws },
      { name: "GraphQL", icon: GrGraphQl }
    ],
    icon: GraduationCap
  },
  {
    id: 4,
    type: "work",
    title: "Software Engineer Intern",
    company: "Google",
    location: "Mountain View, CA",
    duration: "Summer 2019",
    description:
      "Worked on Google Maps team developing new features and improving user experience.",
    achievements: [
      "Implemented real-time traffic visualization",
      "Optimized map rendering performance",
      "Collaborated with senior engineers on production code"
    ],
    technologies: [
      { name: "Java", icon: FaJava },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "GraphQL", icon: GrGraphQl },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: FaDocker }
    ],
    icon: Briefcase
  },
  {
    id: 5,
    type: "education",
    title: "Bachelor of Software Engineering",
    company: "MIT",
    location: "Cambridge, MA",
    duration: "2014 - 2018",
    description:
      "Focused on software architecture and web technologies. President of Web Development Club.",
    achievements: [
      "Graduated Magna Cum Laude",
      "Best Capstone Project Award",
      "Led team to win hackathon"
    ],
    technologies: [
      { name: "React.js", icon: SiReact },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "MySQL", icon: SiMysql },
      { name: "Node.js", icon: FaNodeJs },
      { name: "AWS", icon: FaAws },
      { name: "GraphQL", icon: GrGraphQl },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Docker", icon: FaDocker }
    ],
    icon: GraduationCap
  }
];

export default function WorkEduSection() {
  return (
    <section id="education" className="bg-background px-4 py-16 mb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <HeaderBadge
            icon={<Sparkles className="size-4" />}
            text="Career Journey"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey, highlighting my work
            experience and educational achievements.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4"></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto"></p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-neutral-500/30 transform -translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12 w-full">
            {experiences.map(experience => (
              <motion.div
                key={experience.id}
                variants={fadeInUp}
                className={`relative w-full flex items-center`}>
                {/* Timeline Dot */}
                <div className="absolute left-4  transform -translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-md bg-accent border-2 border-neutral-500/30 shadow-lg`}
                  />
                </div>
                <HiArrowLongRight className="absolute left-9 text-neutral-500/90 text-3xl transform -translate-x-1/2 z-10" />

                <div className={`ml-12 w-full`}>
                  <Card className="bg-transparent dark:bg-transparent border  transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div
                          className={`p-3 rounded-md border border-neutral-500/40 dark:border-neutral-600 bg-transparent dark:bg-transparent`}>
                          <experience.icon className="h-5 w-5 " />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-lg font-medium">
                                {experience.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {experience.company}
                              </p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {experience.type === "work"
                                ? "Work"
                                : "Education"}
                            </Badge>
                          </div>

                          <div className="flex flex-wrap gap-4 text-base text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {experience.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {experience.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-base font-medium mb-2 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-base text-muted-foreground">
                              <Award className="size-4 mt-1 shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-base font-medium mb-2 uppercase tracking-wide">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {experience.technologies.map((tech, idx) => (
                            <TechBadge key={idx} tech={tech} />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center  rounded-2xl p-6 shadow-lg border">
            <div className="text-left">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                Download Resume
              </h3>
              <p className="text-sm text-muted-foreground">
                Get a comprehensive overview of my experience and skills
              </p>
            </div>
            <button className="px-6 py-2 cursor-pointer bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
              Download PDF
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
