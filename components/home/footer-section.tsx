"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";
import SocialLinks from "./socials";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-24 border-t ">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm order-2 sm:order-1">
            © {currentYear} Akkal Dhami. All rights reserved.
          </div>

          <div className="flex gap-3 order-1 sm:order-2">
            <SocialLinks isLarge={false} onlyIcons={true} />
          </div>

          <div className="flex items-center gap-2 text-muted-foreground text-sm order-3">
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.3, 1, 1.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}>
              <Heart className="h-3 w-3 text-accent-foreground fill-current" />
            </motion.div>
            <span>by Akkal Dhami</span>
          </div>
          <Tooltip>
            <TooltipTrigger
              render={
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="p-1 px-2.5 text-sm text-center transition-colors border rounded-sm cursor-pointer hover:border-neutral-500/80 text-muted-foreground hover:text-accent-foreground">
                  ↑
                </motion.button>
              }
            />
            <TooltipContent>
              <p>Scroll to top</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
}
