"use client";

import Link from "next/link";
import { useState } from "react";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { CapabilitiesSection } from "./Capabilities";
import { ContactForm } from "./ContactForm";
import { Container, FadeIn, SectionHeader } from "./UI";
import {
  caseStudies,
  differentiators,
  engagementSteps,
  industries,
  leadershipMembers,
  lifecycle,
  principles,
  proofMetrics,
  technicalTeamMembers,
  techStack,
  testimonials
} from "@/lib/content";

export function LandingPage() {
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null);
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [expandedTestimonial, setExpandedTestimonial] = useState<string | null>(null);
  const [expandedLifecycle, setExpandedLifecycle] = useState<string | null>(null);
  const [expandedEngagement, setExpandedEngagement] = useState<string | null>(null);

  const truncate = (value: string, max = 150) => (value.length > max ? `${value.slice(0, max)}...` : value);

  return (
    <>
      <Navbar />
      <Hero />

      <section id="who-we-are" className="section">
        <Container>
          <SectionHeader
            eyebrow="Our DNA"
            title="A technology leadership team engineered for complex enterprise outcomes"
            subtitle="We are a collective of elite engineers, product strategists, and enterprise architects dedicated to solving complex technical challenges."
          />
          <div className="section-panel dna-panel">
            <FadeIn>
              <p className="dna-intro">
                Our operating model combines AI-native engineering acceleration, modular system design, and enterprise governance so
                platform decisions remain adaptable as your business scales.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="principles-grid dna-principles">
                {principles.map((principle) => (
                  <article key={principle.title} className="card">
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>
          <div className="lifecycle-block">
            <h3>Operating Principles</h3>
            <div className="lifecycle-grid">
              {lifecycle.map((item, index) => (
                <FadeIn key={item.title} delay={index * 0.06}>
                  <article
                    className={`card lifecycle-card expandable-card ${
                      expandedLifecycle === item.title ? "expanded" : ""
                    }`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setExpandedLifecycle(expandedLifecycle === item.title ? null : item.title)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setExpandedLifecycle(expandedLifecycle === item.title ? null : item.title);
                      }
                    }}
                  >
                    <h4>{item.title}</h4>
                    <p>{expandedLifecycle === item.title ? item.detail : truncate(item.detail, 118)}</p>
                    <p className="expand-hint">{expandedLifecycle === item.title ? "Click to collapse" : "Click to expand"}</p>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="about-us" className="section">
        <Container>
          <SectionHeader
            eyebrow="About Us"
            title="Leadership committed to durable growth and practical value creation"
            subtitle="Our leadership team is focused on scaling Vishwakamal Technicals responsibly while delivering solutions clients can adopt and sustain."
          />
          <h3 className="subheading">Leadership</h3>
          <div className="about-grid about-leadership-grid">
            {leadershipMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.08}>
                <article className="card about-card">
                  <div className="about-photo-wrap">
                    <img src={member.imageUrl} alt={member.imageAlt} loading="lazy" />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="about-title">{member.title}</p>
                  <p>{member.vision}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <h3 className="subheading">Technical Team</h3>
          <div className="about-grid">
            {technicalTeamMembers.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.08}>
                <article className="card about-card">
                  <div className="about-photo-wrap">
                    <img src={member.imageUrl} alt={member.imageAlt} loading="lazy" />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="about-title">{member.title}</p>
                  <p>{member.vision}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <CapabilitiesSection />

      <section id="industries" className="section">
        <Container>
          <SectionHeader
            eyebrow="Domain Expertise"
            title="Sector-aware engineering for compliance, security, and operational scale"
            subtitle="We understand the unique compliance, scale, and security requirements across heavily regulated industries."
          />
          <div className="industry-marquee">
            <div className={`industry-track ${expandedIndustry ? "paused" : ""}`}>
              {[...industries, ...industries].map((industry, index) => (
                <article
                  key={`${industry.title}-${index}`}
                  className={`card industry-card marquee-card expandable-card ${
                    expandedIndustry === industry.title ? "expanded" : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setExpandedIndustry(expandedIndustry === industry.title ? null : industry.title)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setExpandedIndustry(expandedIndustry === industry.title ? null : industry.title);
                    }
                  }}
                >
                  <div className="industry-image-wrap">
                    <img src={industry.imageUrl} alt={industry.imageAlt} loading="lazy" />
                  </div>
                  <h3>{industry.title}</h3>
                  {expandedIndustry === industry.title ? (
                    <>
                      <p>
                        <strong>Key Challenges:</strong>
                      </p>
                      <ul>
                        {industry.challenges.map((challenge) => (
                          <li key={`${industry.title}-${challenge}`}>{challenge}</li>
                        ))}
                      </ul>
                      <p>
                        <strong>Our Approach:</strong> {industry.approach}
                      </p>
                      <p>
                        <strong>Stack Examples:</strong> {industry.stack.join(", ")}
                      </p>
                      <p>
                        <strong>Expected Outcomes:</strong> {industry.outcomes.join("; ")}
                      </p>
                    </>
                  ) : (
                    <p className="preview-text">{truncate(industry.approach, 160)}</p>
                  )}
                  <p className="expand-hint">{expandedIndustry === industry.title ? "Click to collapse" : "Click to expand"}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="engagement-model" className="section">
        <Container>
          <SectionHeader
            eyebrow="How We Engage"
            title="A battle-tested methodology designed for transparency, predictability, and results"
            subtitle="Structured execution from architecture discovery to post-launch scale support."
          />
          <div className="engagement-steps">
            {engagementSteps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.06}>
                <article
                  className={`step-card card expandable-card ${expandedEngagement === step.title ? "expanded" : ""}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setExpandedEngagement(expandedEngagement === step.title ? null : step.title)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setExpandedEngagement(expandedEngagement === step.title ? null : step.title);
                    }
                  }}
                >
                  <h3>{step.title}</h3>
                  <p>{expandedEngagement === step.title ? step.detail : truncate(step.detail, 120)}</p>
                  <p className="expand-hint">{expandedEngagement === step.title ? "Click to collapse" : "Click to expand"}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section id="case-studies" className="section">
        <Container>
          <SectionHeader
            eyebrow="Case Studies"
            title="Transformation outcomes delivered through technical precision"
            subtitle="Representative examples of architecture modernization, AI enablement, and enterprise automation."
          />
          <div className="case-grid">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.slug} delay={index * 0.06}>
                <article
                  className={`card case-card expandable-card ${expandedCase === study.slug ? "expanded" : ""}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => setExpandedCase(expandedCase === study.slug ? null : study.slug)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setExpandedCase(expandedCase === study.slug ? null : study.slug);
                    }
                  }}
                >
                  <p className="tag">{study.industry}</p>
                  <h3>{study.title}</h3>
                  {expandedCase === study.slug ? (
                    <>
                      <p>
                        <strong>Problem:</strong> {study.problem}
                      </p>
                      <p>
                        <strong>Architecture:</strong> {study.architecture}
                      </p>
                      <p>
                        <strong>Transformation:</strong> {study.transformation}
                      </p>
                      <p>
                        <strong>Outcomes:</strong> {study.outcomes.join("; ")}
                      </p>
                    </>
                  ) : (
                    <p className="preview-text">{truncate(study.transformation, 165)}</p>
                  )}
                  <p className="expand-hint">{expandedCase === study.slug ? "Click to collapse" : "Click to expand"}</p>
                  <Link href={`/case-studies/${study.slug}`} className="inline-link">
                    View full case study
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Client Testimonials & Past Projects"
            title="Trusted by engineering leaders for long-term, high-stakes execution"
            subtitle="Partnership outcomes validated by executive stakeholders across complex digital programs."
          />
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.05}>
                <article
                  className={`card testimonial-card expandable-card ${
                    expandedTestimonial === testimonial.name ? "expanded" : ""
                  }`}
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setExpandedTestimonial(expandedTestimonial === testimonial.name ? null : testimonial.name)
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setExpandedTestimonial(expandedTestimonial === testimonial.name ? null : testimonial.name);
                    }
                  }}
                >
                  <p className="quote">
                    “{expandedTestimonial === testimonial.name ? testimonial.quote : truncate(testimonial.quote, 160)}”
                  </p>
                  <p className="author">{testimonial.name}</p>
                  <p className="role">
                    {testimonial.title} • {testimonial.companyType}
                  </p>
                  <p className="tag">Outcome: {testimonial.outcome}</p>
                  <p className="expand-hint">
                    {expandedTestimonial === testimonial.name ? "Click to collapse" : "Click to expand"}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
          <div className="metrics-strip">
            {proofMetrics.map((metric) => (
              <div key={metric} className="metric-item">
                {metric}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <SectionHeader
            eyebrow="Technology Stack"
            title="Modern stack choices aligned to enterprise resilience and velocity"
            subtitle="A pragmatic stack strategy tuned to reliability, maintainability, and growth-stage complexity."
          />
          <div className="stack-grid">
            {techStack.map((group, index) => (
              <FadeIn key={group.category} delay={index * 0.06}>
                <article className="card stack-card">
                  <h3>{group.category}</h3>
                  <p>{group.items.join(" • ")}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="why-header">
            <h2>Why Partner With Us</h2>
            <p>Differentiators built for enterprise-scale delivery confidence</p>
          </div>
          <div className="differentiators">
            {differentiators.map((item, index) => (
              <FadeIn key={item} delay={index * 0.05}>
                <article className="card">
                  <p>{item}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="section contact-section">
        <Container>
          <SectionHeader
            eyebrow="Contact"
            title="Start a strategic conversation with our architecture team"
            subtitle="Share your current state and growth objectives. We will respond with a structured next-step proposal."
          />
          <ContactForm />
        </Container>
      </section>

      <footer className="footer">
        <Container>
          <div className="footer-grid">
            <div>
              <h3>Vishwakamal Technicals</h3>
              <p>
                We design, build, scale, and optimize digital systems as long-term technological partners for growth-focused organizations.
              </p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <a href="#who-we-are">Who We Are</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#industries">Industries</a>
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h4>Connect</h4>
              <a className="footer-link" href="https://www.linkedin.com/in/sam-vktech/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <p className="footer-legal">
                <span>Legal:</span> <Link href="/privacy-policy">Privacy Policy</Link> <span>|</span>{" "}
                <Link href="/terms-of-use">Terms of Use</Link>
              </p>
              <a
                className="footer-attribution"
                href="https://github.com/Vishwakamal-Technicals"
                target="_blank"
                rel="noreferrer"
              >
                <span>Built with precision by</span>
                <strong>Vishwakamal Technicals</strong>
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
