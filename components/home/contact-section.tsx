"use client";

import { motion } from "motion/react";
import { SocialLinks } from "./social-link";
import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import { ContactForm } from "./contact-form";
import { Contacts } from "./contacts";

import type { ReactNode } from "react";
import { ContactCta } from "./contact-cta";

interface ContactSectionProps {
  children?: ReactNode;
}

export default function ContactSection({ children }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-12">
        <Heading>Let&apos;s Connect</Heading>
        <SubHeading className="text-lg text-muted-foreground max-w-2xl mx-0">
          Ready to start your next project? Reach out and let&apos;s create
          something amazing together.
        </SubHeading>
      </motion.div>

      <div className="space-y-12">
        {children}

        <SocialLinks />
        <ContactCta />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Contacts />
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
