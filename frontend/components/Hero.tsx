"use client";

import { motion } from "framer-motion";

export function Hero() {
  const brandLineOne = Array.from("Vishwakamal");
  const brandLineTwo = Array.from("Technicals");
  const signalPills = ["AI Delivery Systems", "Enterprise Architecture", "Cloud Reliability Engineering"];

  return (
    <section id="top" className="hero">
      <motion.div
        className="hero-gradient"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <div className="hero-orb hero-orb-a" aria-hidden />
      <div className="hero-orb hero-orb-b" aria-hidden />
      <div className="hero-orb hero-orb-c" aria-hidden />
      <div className="container hero-content">
        <div className="hero-brand-stack" aria-label="Vishwakamal Technicals">
          <motion.p className="hero-brand-line" initial="hidden" animate="visible">
            {brandLineOne.map((char, index) => (
              <motion.span
                key={`line1-${char}-${index}`}
                className="hero-brand-char"
                variants={{
                  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 + index * 0.045 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.p className="hero-brand-line" initial="hidden" animate="visible">
            {brandLineTwo.map((char, index) => (
              <motion.span
                key={`line2-${char}-${index}`}
                className="hero-brand-char"
                variants={{
                  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.68 + index * 0.045 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>
        <h1>Your Long-Term Technology Partner for Scalable Digital Growth</h1>
        <p>
          We architect resilient systems and deliver enterprise-grade software solutions that drive sustainable
          business value. Stop managing vendors, start a strategic partnership.
        </p>
        <div className="hero-signal-row">
          {signalPills.map((pill, index) => (
            <motion.span
              key={pill}
              className="hero-signal-pill"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.15 + index * 0.12 }}
            >
              {pill}
            </motion.span>
          ))}
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Start a Strategic Conversation
          </a>
          <a className="btn btn-secondary" href="#capabilities">
            Explore Capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
