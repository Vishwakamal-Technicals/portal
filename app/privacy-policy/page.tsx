import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Vishwakamal Technicals covering information collection, usage, retention, security, and contact practices.",
  openGraph: {
    title: "Privacy Policy",
    description:
      "Privacy Policy for Vishwakamal Technicals covering information collection, usage, retention, security, and contact practices.",
    url: "https://vishwakamal-technicals.com/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legal-page">
      <div className="container legal-container">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p className="legal-intro">
          This Privacy Policy describes how Vishwakamal Technicals collects, uses, stores, and protects information
          submitted through this website and through related business communications. It is written to support a
          professional, transparent, and enterprise-aligned engagement model.
        </p>

        <section className="legal-section">
          <h2>1. Information We Collect</h2>
          <p>
            We may collect business contact and project-related information that you voluntarily provide, including
            your name, company name, email address, project description, indicative budget range, and expected
            delivery timeline.
          </p>
          <p>
            We may also collect limited technical data such as browser type, device information, referral source, and
            website interaction events to maintain service quality, improve user experience, and support security
            analysis.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. How We Use Information</h2>
          <p>We use submitted information to evaluate business inquiries, respond to contact requests, and structure follow-up discussions.</p>
          <p>
            Information may also be used to assess solution fit, prepare proposals, improve website performance,
            support analytics, and maintain operational security across our digital systems.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Legal Basis and Business Purpose</h2>
          <p>
            We process information for legitimate business purposes including client communications, solution planning,
            operational continuity, fraud prevention, and compliance with legal or contractual obligations where
            applicable.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Information Sharing</h2>
          <p>
            Vishwakamal Technicals does not sell personal data. Information may be shared with infrastructure,
            analytics, communication, or workflow service providers only where required to operate the website,
            process inquiries, or deliver services in a secure and controlled manner.
          </p>
          <p>
            Information may also be disclosed if required by law, regulation, court order, or to protect the rights,
            property, and security of Vishwakamal Technicals, its clients, or its systems.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Data Retention</h2>
          <p>
            We retain inquiry and communication data only for as long as reasonably required to manage business
            relationships, evaluate opportunities, maintain records, resolve disputes, and meet legal or compliance
            obligations.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Security Practices</h2>
          <p>
            We apply commercially reasonable administrative, technical, and organizational safeguards to reduce the
            risk of unauthorized access, disclosure, misuse, or loss of data. No internet-based system can be
            guaranteed to be fully secure, but security-first engineering is part of our operating model.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Third-Party Services</h2>
          <p>
            This website may rely on third-party platforms for form processing, hosting, analytics, communication, or
            infrastructure delivery. Those providers may process information under their own terms and privacy
            practices. We select supporting services based on practical business utility and operational reliability.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. International Access</h2>
          <p>
            If you access this website from outside the region where our infrastructure or service providers operate,
            your information may be transferred and processed in other jurisdictions as necessary to provide business
            communication and platform functionality.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Your Choices</h2>
          <p>
            You may request access, correction, or deletion of information you have directly provided, subject to
            legitimate business, operational, or legal retention requirements. You may also choose not to provide
            information, although that may limit our ability to respond meaningfully to your inquiry.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Policy Updates</h2>
          <p>
            This Privacy Policy may be updated from time to time to reflect changes in website functionality, business
            operations, legal requirements, or security posture. Updated versions become effective when published on
            this page.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Contact</h2>
          <p>
            For privacy-related questions or requests, please contact Vishwakamal Technicals through the website
            contact form or the professional channels referenced on this site.
          </p>
        </section>

        <p className="legal-backlink">
          <Link href="/">Return to homepage</Link>
        </p>
      </div>
    </main>
  );
}
