"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { capabilities } from "@/lib/content";
import { FadeIn, SectionHeader } from "./UI";

const swipeConfidenceThreshold = 8000;
const swipePower = (offset: number, velocity: number) => Math.abs(offset) * velocity;

export function CapabilitiesSection() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const activeCapability = capabilities[activeIndex];
  const isPaused = isHoverPaused || isManuallyPaused;
  const shouldReduceMotion = useReducedMotion();

  function goToCapability(nextIndex: number) {
    const wrappedIndex = (nextIndex + capabilities.length) % capabilities.length;
    setActiveIndex([wrappedIndex, nextIndex > activeIndex ? 1 : -1]);
  }

  function paginate(nextDirection: number) {
    goToCapability(activeIndex + nextDirection);
  }

  useEffect(() => {
    if (isPaused || shouldReduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex(([current]) => [(current + 1) % capabilities.length, 1]);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [isPaused, shouldReduceMotion]);

  return (
    <section id="capabilities" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Core Capabilities"
          title="End-to-end technical execution across infrastructure, data, and product experience"
          subtitle="From foundational infrastructure to frontend user experience, we provide specialized talent to execute with precision."
        />
        <FadeIn>
          <div
            className={`capability-carousel ${isPaused ? "paused" : ""}`}
            onMouseEnter={() => setIsHoverPaused(true)}
            onMouseLeave={() => setIsHoverPaused(false)}
            onFocus={() => setIsHoverPaused(true)}
            onBlur={(event) => {
              const nextFocusTarget = event.relatedTarget as Node | null;
              if (!nextFocusTarget || !event.currentTarget.contains(nextFocusTarget)) {
                setIsHoverPaused(false);
              }
            }}
          >
            <div className="capability-stage">
              <button
                className="capability-arrow capability-arrow-left"
                type="button"
                onClick={() => {
                  setIsManuallyPaused(true);
                  paginate(-1);
                }}
                aria-label="Previous capability"
              >
                <span className="capability-arrow-icon capability-arrow-icon-left" aria-hidden="true" />
              </button>

              <div className="capability-card-window">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.article
                    key={activeCapability.id}
                    className={`capability-panel capability-tone-${activeIndex}`}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 120 : -120, scale: 0.96, filter: "blur(10px)" }}
                    animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: direction > 0 ? -120 : 120, scale: 0.96, filter: "blur(10px)" }}
                    transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.18}
                    onClick={() => setIsManuallyPaused(true)}
                    onDragEnd={(_, { offset, velocity }) => {
                      setIsManuallyPaused(true);
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                  >
                    <div className="capability-panel-head">
                      <div>
                        <span className="capability-index">{String(activeIndex + 1).padStart(2, "0")}</span>
                        <h3>{activeCapability.title}</h3>
                      </div>
                      <p className="capability-panel-lede">{activeCapability.outcomes}</p>
                    </div>

                    <div className="capability-copy-grid">
                      <p>
                        <span className="capability-copy-label">Technical Focus</span>
                        <span>{activeCapability.technicalExplanation}</span>
                      </p>
                      <p>
                        <span className="capability-copy-label">Business Value</span>
                        <span>{activeCapability.businessValue}</span>
                      </p>
                    </div>

                    <div className="capability-usecase-grid">
                      {activeCapability.useCases.map((useCase) => (
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

                    <div className="capability-outcome">
                      <span className="capability-copy-label">Outcomes</span>
                      <span>{activeCapability.outcomes}</span>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </div>

              <button
                className="capability-arrow capability-arrow-right"
                type="button"
                onClick={() => {
                  setIsManuallyPaused(true);
                  paginate(1);
                }}
                aria-label="Next capability"
              >
                <span className="capability-arrow-icon capability-arrow-icon-right" aria-hidden="true" />
              </button>
            </div>

            <div className="capability-carousel-footer">
              <div className="capability-dots" aria-label="Capability progress">
                {capabilities.map((item, index) => (
                  <button
                    key={item.id}
                    className={activeIndex === index ? "active" : ""}
                    type="button"
                    onClick={() => {
                      setIsManuallyPaused(true);
                      goToCapability(index);
                    }}
                    aria-label={`Show ${item.title}`}
                  />
                ))}
              </div>
              <button className="capability-pause" type="button" onClick={() => setIsManuallyPaused((value) => !value)}>
                {isManuallyPaused ? "Resume" : "Pause"}
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
