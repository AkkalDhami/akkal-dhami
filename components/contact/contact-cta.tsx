import { motion } from "motion/react";
import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import { PrimaryButton } from "@/components/ui/primary-button";
import { CornerMarkers } from "@/components/ui/corner-markers";
import { CONTACT_INFO } from "./contact-info";

export const EMAIL = CONTACT_INFO.find(
  info => info.label.toLowerCase() === "email"
)?.value;

export function ContactCta() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center relative">
      <div className="border p-8 md:p-12">
        <Heading className="text-xl md:text-2xl font-bold mb-4">
          Ready to Start Your Project?
        </Heading>
        <SubHeading
          as="p"
          className="text-sm sm:text-lg text-muted-foreground max-w-md mx-auto">
          Let&apos;s schedule a call to discuss your ideas and how we can bring
          them to life.
        </SubHeading>
        <div className="flex mt-4 flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton as="a" href={`mailto:${EMAIL}`} className="py-3">
            Send Email
            <CornerMarkers offset={7} hoverOffset={7} key={"primary-button"} />
          </PrimaryButton>
        </div>
      </div>
      <CornerMarkers offset={7} hoverOffset={0} className="text-primary" />
    </motion.div>
  );
}
