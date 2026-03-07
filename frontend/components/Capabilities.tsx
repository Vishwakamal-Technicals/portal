"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { capabilities } from "@/lib/content";
import { FadeIn, SectionHeader } from "./UI";

export function CapabilitiesSection() {
  const [openId, setOpenId] = useState("");

  return (
    <section id="capabilities" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Core Capabilities"
          title="End-to-end technical execution across infrastructure, data, and product experience"
          subtitle="From foundational infrastructure to frontend user experience, we provide specialized talent to execute with precision."
        />
        <div className="accordion">
          {capabilities.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <FadeIn key={item.id} delay={index * 0.05}>
                <article className={`accordion-item ${isOpen ? "open" : ""}`}>
                  <button onClick={() => setOpenId(isOpen ? "" : item.id)} className="accordion-trigger">
                    <span>{item.title}</span>
                    <span>{isOpen ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key={item.id}
                        className="accordion-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                      >
                        <div className="accordion-content">
                          <p>
                            <strong>Technical Focus:</strong> {item.technicalExplanation}
                          </p>
                          <p>
                            <strong>Business Value:</strong> {item.businessValue}
                          </p>
                          <p>
                            <strong>Use Cases:</strong>
                          </p>
                          <div className="capability-usecase-grid">
                            {item.useCases.map((useCase) => (
                              <article key={useCase.title} className="capability-usecase-card">
                                <div className="capability-usecase-image">
                                  <img src={useCase.imageUrl} alt={useCase.imageAlt} loading="lazy" />
                                </div>
                                <div className="capability-usecase-body">
                                  <p className="capability-usecase-title">{useCase.title}</p>
                                  <p className="capability-usecase-summary">{useCase.summary}</p>
                                </div>
                              </article>
                            ))}
                          </div>
                          <p>
                            <strong>Outcomes:</strong> {item.outcomes}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
