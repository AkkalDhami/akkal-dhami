"use client";
import { cn } from "../../lib/utils";
import { Marquee } from "../ui/marquee";
import { QuoteIcon } from "lucide-react";
import { HeaderBadge } from "../ui/header-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "motion/react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Elon Musk",
    title: "CEO, Tesla & SpaceX",
    image: "/elon.jpg",
    quote:
      "Akkal’s attention to scalable architecture and clean design reminds me of how great products are built — one detail at a time. His ability to turn complex problems into elegant, high-performance solutions is remarkable."
  },
  {
    id: 2,
    name: "Mark Zuckerberg",
    title: "CEO, Meta",
    image: "/sundar.avif",
    quote:
      "The modern web needs developers who understand both usability and engineering depth — Akkal blends both effortlessly. His projects show a rare balance of creativity, precision, and execution."
  },
  {
    id: 3,
    name: "Sundar Pichai",
    title: "CEO, Google",
    image: "/sundar.avif",

    quote:
      "Akkal’s work with Next.js and TypeScript demonstrates exceptional command over modern frameworks. His focus on performance and smooth user experiences aligns perfectly with the best engineering practices at scale."
  },
  {
    id: 4,
    name: "Jeff Bezos",
    title: "Founder, Amazon",
    image: "/elon.jpg",
    quote:
      "Clean architecture, scalable backend systems, and great user interfaces — Akkal delivers all of it. His projects reflect an engineer’s discipline with a designer’s eye for detail."
  },
  {
    id: 5,
    name: "Satya Nadella",
    title: "CEO, Microsoft",
    image: "/sundar.avif",
    quote:
      "In a world where technology evolves daily, Akkal’s adaptability and curiosity stand out. His solutions are robust, future-ready, and a pleasure to experience."
  },
  {
    id: 6,
    name: "Tim Cook",
    title: "CEO, Apple",
    image: "/sundar.avif",
    quote:
      "Elegance, performance, and usability define Akkal’s work. His projects embody the principles of great design — simplicity that just works."
  }
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({ review }: { review: Testimonial }) => {
  const { image, name, title, quote } = review;
  return (
    <figure
      className={cn(
        "relative h-full min-w-[300px] w-full overflow-hidden rounded-xl border p-4",
        "border-gray-950/10 bg-linear-r"
      )}>
      <div className="flex flex-row items-center gap-2">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>
            <span className="sr-only">{name}</span>
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{title}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{quote}</blockquote>
    </figure>
  );
};

export function TestimonialSection() {
  return (
    <section id="testimonials" className="bg-background px-4 py-16 mb-12">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <HeaderBadge
            icon={<QuoteIcon className="size-4" />}
            text="Client Testimonials"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what clients and
            colleagues have to say about working with me.
          </p>
        </motion.div>
        <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            {firstRow.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            vertical
            className="hidden md:block [--duration:20s]">
            {secondRow.map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-linear-to-b"></div>
          <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-t"></div>
        </div>
      </div>
    </section>
  );
}
