"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("text-center space-y-4", className)}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}