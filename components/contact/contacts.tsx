"use client";

import { User, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "motion/react";
import type { Route } from "next";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export const CONTACT_INFO = [
  {
    label: "Name",
    value: "Akkal Dhami",
    icon: User
  },
  {
    label: "Github",
    value: "AkkalDhami",
    icon: FaGithub,
    href: "https://github.com/akkaldhami"
  },
  {
    label: "Email",
    value: "dhamiakkal21@gmail.com",
    icon: Mail,
    href: "mailto:dhamiakkal21@gmail.com"
  },
  {
    label: "Phone",
    value: "+977 9828122071",
    icon: Phone
  },
  {
    label: "Location",
    value: "Kathmandu, Nepal",
    icon: MapPin
  }
];

export function Contacts() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-normal mb-4">Contact Information</h3>
      </div>
      <div className="grid grid-cols-1 space-y-4">
        {CONTACT_INFO.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative">
            <div className="flex items-center gap-3">
              <item.icon className="bg-muted/20 border border-border text-muted-primary p-2 size-11" />
              <div className="flex flex-col space-y-1 text-primary">
                <span className="text-xs uppercase tracking-widest font-medium text-muted-foreground">
                  {item.label}
                </span>
                {item.href ? (
                  <Link
                    href={item.href as Route}
                    target="_blank"
                    className="text-sm font-semibold hover:underline decoration-primary underline-offset-4">
                    {item.value}
                  </Link>
                ) : (
                  <span className="text-sm font-semibold">{item.value}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
