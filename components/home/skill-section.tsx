"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Settings } from "lucide-react";
import { Card, CardContent } from "../ui/card";

import {
  // Frontend
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaBootstrap,
  // Backend
  FaNodeJs,
  FaDocker,
  FaAws
} from "react-icons/fa";

import {
  // Database
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiJest,
  SiFigma,
  SiPostman,
  SiLinux,
  SiNginx,
  SiGithub
} from "react-icons/si";
import { FaGitAlt, FaNpm } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiVite,
  SiEslint,
  SiPrettier
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { cn } from "../../lib/utils";

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skillsData = {
  frontend: {
    title: "Frontend",
    icon: Code,
    description: "Modern frontend technologies and frameworks",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Sass", icon: FaSass, color: "#CC6699" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" }
    ]
  },
  backend: {
    title: "Backend",
    icon: Server,
    description: "Server-side technologies and runtime environments",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" }
    ]
  },
  database: {
    title: "Database",
    icon: Database,
    description: "Database management systems and data storage",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis }
    ]
  },
  tools: {
    title: "Tools & Technologies",
    icon: Settings,
    description: "Development tools, platforms and utilities",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Github", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Figma", icon: SiFigma },
      { name: "Postman", icon: SiPostman },
      { name: "Vite", icon: SiVite },
      { name: "Jest", icon: SiJest },
      { name: "ESLint", icon: SiEslint },
      { name: "Prettier", icon: SiPrettier },
      { name: "NPM", icon: FaNpm },
      { name: "Linux", icon: SiLinux },
      { name: "Nginx", icon: SiNginx }
    ]
  }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-background px-4 py-16 mb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of skills and technologies that I have acquired over
            the years.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6">
          {Object.entries(skillsData).map(([key, category]) => (
            <motion.div key={key} variants={fadeInUp} className="group">
              <Card className="h-full bg-transparent dark:bg-transparent border  transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-600">
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-md border border-neutral-500/40 dark:border-neutral-600 bg-transparent dark:bg-transparent`}>
                      <category.icon className="size-5 sm:size-7" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg sm:text-xl">
                        {category.title}
                      </h3>
                      <p className="text-base text-muted-foreground">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground mb-6">
                    {category.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className={cn(
                          "flex items-center gap-2 p-2 rounded-lg border border-neutral-500/40 dark:border-neutral-500/30 hover:border-neutral-500 dark:hover:border-neutral-600 transition-colors duration-200 group/item",
                          index % 2 === 0 ? "bg-linear-r" : "bg-linear-b"
                        )}>
                        <div className="p-1.5 rounded-md">
                          <skill.icon className="size-5 text-accent-foreground" />
                        </div>
                        <span className="text-base font-medium text-muted-foreground group-hover/item:text-accent-foreground truncate">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Years Experience", value: "3+" },
            { label: "Technologies", value: "30+" },
            { label: "Happy Clients", value: "25+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center">
              <div className="text-2xl md:text-3xl font-bold  mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
