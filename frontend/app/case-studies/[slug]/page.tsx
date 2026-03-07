import { caseStudies } from "@/lib/content";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
      openGraph: { title: "Case Study Not Found" }
    };
  }

  return {
    title: `${study.title} Case Study`,
    description: study.transformation,
    openGraph: {
      title: `${study.title} | Case Study`,
      description: study.transformation,
      type: "article",
      url: `https://vishwakamal-technicals.com/case-studies/${study.slug}`
    }
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="case-page">
      <div className="container">
        <p className="eyebrow">Case Study</p>
        <h1>{study.title}</h1>
        <p className="tag">{study.industry}</p>

        <section className="case-detail card">
          <h2>Problem Statement</h2>
          <p>{study.problem}</p>
        </section>

        <section className="case-detail card">
          <h2>Technical Architecture</h2>
          <p>{study.architecture}</p>
          <p>
            <strong>Technology Stack:</strong> {study.stack.join(", ")}
          </p>
        </section>

        <section className="case-detail card">
          <h2>Business Transformation</h2>
          <p>{study.transformation}</p>
        </section>

        <section className="case-detail card">
          <h2>Quantifiable Outcomes</h2>
          <ul>
            {study.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <Link href="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
