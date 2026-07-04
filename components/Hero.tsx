"use client";

import { motion } from "framer-motion";

export function Hero() {
  const brandLineOne = Array.from("Vishwakamal");
  const brandLineTwo = Array.from("Technicals");
  const signalPills = ["AI Delivery Systems", "Enterprise Architecture", "Cloud Reliability Engineering"];

  return (
    <section id="top" className="hero">
      <img
        className="hero-image"
        src="/images/capabilities/cloud-devops.png"
        alt=""
        aria-hidden="true"
      />
      <motion.div
        className="hero-gradient"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <div className="hero-noise" aria-hidden />
      <div className="container hero-content">
        <div className="hero-brand-stack" aria-label="Vishwakamal Technicals">
          <motion.p className="hero-brand-line" initial="hidden" animate="visible">
            {brandLineOne.map((char, index) => (
              <motion.span
                key={`line1-${char}-${index}`}
                className="hero-brand-char"
                variants={{
                  hidden: { opacity: 0, y: 24, rotateX: 42, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.04 }}
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
                  hidden: { opacity: 0, y: 24, rotateX: 42, filter: "blur(10px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                }}
                transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1], delay: 0.62 + index * 0.04 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.08, ease: [0.16, 1, 0.3, 1] }}
        >
          Your Long-Term Technology Partner for Scalable Digital Growth
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          We architect resilient systems and deliver enterprise-grade software solutions that drive sustainable
          business value. Stop managing vendors, start a strategic partnership.
        </motion.p>
        <div className="hero-signal-row">
          {signalPills.map((pill, index) => (
            <motion.span
              key={pill}
              className="hero-signal-pill"
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.35 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              {pill}
            </motion.span>
          ))}
        </div>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.72, ease: [0.16, 1, 0.3, 1] }}
        >
          <a className="btn btn-primary" href="#contact">
            Start a Strategic Conversation
          </a>
          <a className="btn btn-secondary" href="#capabilities">
            Explore Capabilities
          </a>
        </motion.div>
      </div>
    </section>
  );
}
