import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "Your Long-Term Technology Partner for Scalable Digital Growth",
  description:
    "Enterprise product engineering, AI systems, cloud architecture, and long-term digital transformation by Vishwakamal Technicals.",
  openGraph: {
    title: "Your Long-Term Technology Partner for Scalable Digital Growth",
    description:
      "We architect resilient systems, build intelligent platforms, and drive continuous innovation.",
    url: "https://vishwakamal-technicals.com"
  }
};

export default function HomePage() {
  return <LandingPage />;
}
