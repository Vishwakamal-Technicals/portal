import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Vishwakamal Technicals covering website access, acceptable use, intellectual property, liability, and engagement limitations.",
  openGraph: {
    title: "Terms of Use",
    description:
      "Terms of Use for Vishwakamal Technicals covering website access, acceptable use, intellectual property, liability, and engagement limitations.",
    url: "https://vishwakamal-technicals.com/terms-of-use"
  }
};

export default function TermsOfUsePage() {
  return (
    <main className="legal-page">
      <div className="container legal-container">
        <p className="eyebrow">Legal</p>
        <h1>Terms of Use</h1>
        <p className="legal-intro">
          These Terms of Use govern access to and use of the Vishwakamal Technicals website. By using this website,
          you agree to these terms. If you do not agree, you should discontinue use of the site.
        </p>

        <section className="legal-section">
          <h2>1. Website Purpose</h2>
          <p>
            This website is provided for informational, business development, and professional communication purposes.
            It describes Vishwakamal Technicals capabilities, engagement approach, and contact channels, and it may be
            updated without prior notice.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Acceptable Use</h2>
          <p>
            You agree not to misuse the website, interfere with its operation, attempt unauthorized access, submit
            malicious content, reverse engineer protected functionality, or use the site in a manner that could harm
            the business, its systems, or other users.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. No Client Relationship by Website Access Alone</h2>
          <p>
            Accessing this website, reviewing materials, or submitting an inquiry does not by itself establish a
            client, advisor, partnership, fiduciary, employment, or legally binding service relationship. Any formal
            engagement requires explicit written agreement.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including branding, design, text, structure, graphics, and other materials,
            is owned by or licensed to Vishwakamal Technicals unless otherwise stated. You may not copy, reproduce,
            distribute, republish, or commercially exploit site content without prior written permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Accuracy and Informational Nature</h2>
          <p>
            We aim to present information that is clear and reliable, but the website is provided on an informational
            basis and may contain updates, revisions, or omissions. Business, technical, and legal decisions should
            not be made solely on the basis of website content without direct consultation.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Third-Party Links</h2>
          <p>
            This website may contain links to third-party services or external profiles. Those destinations are
            provided for convenience only. Vishwakamal Technicals is not responsible for external content, policies,
            availability, or practices of third-party websites.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Disclaimer of Warranties</h2>
          <p>
            The website is made available on an as-is and as-available basis. To the maximum extent permitted by law,
            Vishwakamal Technicals disclaims warranties of merchantability, fitness for a particular purpose,
            non-infringement, uninterrupted access, or error-free operation.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Vishwakamal Technicals shall not be liable for indirect,
            incidental, special, consequential, or business interruption damages arising from or related to use of, or
            inability to use, this website or its content.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Changes to Terms</h2>
          <p>
            These Terms of Use may be updated periodically to reflect changes in our business, operations, legal
            obligations, or website functionality. Continued use of the website after publication of revised terms
            constitutes acceptance of those updates.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Governing Principles</h2>
          <p>
            These terms are intended to be interpreted in a commercially reasonable manner consistent with applicable
            law, professional practice, and enforceable digital business standards.
          </p>
        </section>

        <section className="legal-section">
          <h2>11. Contact</h2>
          <p>
            For questions related to these Terms of Use or a potential commercial engagement, contact Vishwakamal
            Technicals through the channels provided on this website.
          </p>
        </section>

        <p className="legal-backlink">
          <Link href="/">Return to homepage</Link>
        </p>
      </div>
    </main>
  );
}
