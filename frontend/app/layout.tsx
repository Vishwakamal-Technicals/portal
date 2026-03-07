import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vishwakamal-technicals.com"),
  title: {
    default: "Vishwakamal Technicals | Strategic Technology Partner",
    template: "%s | Vishwakamal Technicals"
  },
  description:
    "Vishwakamal Technicals designs, builds, scales, and optimizes digital systems as a long-term technology partner for enterprise growth.",
  openGraph: {
    title: "Vishwakamal Technicals",
    description:
      "Your long-term technology partner for scalable digital growth, enterprise architecture, and applied AI transformation.",
    type: "website",
    url: "https://vishwakamal-technicals.com",
    siteName: "Vishwakamal Technicals"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishwakamal Technicals",
    description: "Enterprise-grade technology partnership for sustained digital growth."
  },
  icons: {
    icon: "/brand/logo-256.png",
    shortcut: "/brand/logo-256.png",
    apple: "/brand/logo-256.png"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}
