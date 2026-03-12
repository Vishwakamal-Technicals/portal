"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export function Container({ children }: PropsWithChildren) {
  return <div className="container">{children}</div>;
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}

export function FadeIn({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
