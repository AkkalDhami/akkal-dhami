import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

type SocialLink = {
  name: string;
  href: string;
  icon: string;
  username: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/akkaldhami",
    icon: "/assets/icons/github.webp",
    username: "akkaldhami"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/akkal-dhami-854273378/",
    icon: "/assets/icons/linkedin.webp",
    username: "@akkaldhami"
  },
  {
    name: "Twitter",
    href: "https://github.com/akkaldhami",
    icon: "/assets/icons/x.webp",
    username: "@akkaldhami"
  },
  {
    name: "Email",
    href: "mailto:dhamiakkal21@gmail",
    icon: "/assets/icons/email.svg",
    username: "aavashdhami21@gmail.com"
  }
];

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socialLinks.map(social => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-3 rounded-none hover:bg-card-hover border-[1.5px] flex space-x-3 primary-border group text-center group">
            <Image
              src={social.icon}
              alt={social.name}
              width={24}
              height={24}
              className={cn(
                "size-11 text-muted-primary group-hover:text-accent-foreground",
                social.name.toLocaleLowerCase() === "email" && "dark:invert"
              )}
            />
            <div className="flex flex-col w-full items-start">
              <div className="flex w-full items-center justify-between">
                <h3 className="font-medium underline-offset-3 group-hover:underline text-muted-primary group-hover:text-accent-foreground">
                  {social.name}
                </h3>
                <LuArrowUpRight className="size-4 text-muted-primary group-hover:text-accent-foreground" />
              </div>
              <p className="text-sm text-muted-foreground">{social.username}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
