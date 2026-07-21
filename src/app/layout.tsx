import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const siteUrl = "https://alishba-arshad.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alishba Arshad — AI Automation & Data Analytics",
    template: "%s — Alishba Arshad",
  },
  description:
    "Alishba Arshad builds AI automation systems and uses data analytics to solve business problems. Business Data Analyst transitioning into AI Automation Strategist.",
  keywords: [
    "Alishba Arshad",
    "AI Automation",
    "Business Data Analyst",
    "Data Analytics",
    "AI Agents",
    "n8n",
    "Machine Learning",
    "LLM",
    "RAG",
  ],
  authors: [{ name: "Alishba Arshad" }],
  creator: "Alishba Arshad",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Alishba Arshad — AI Automation & Data Analytics",
    description:
      "Building intelligent workflows, AI-powered automation systems, and data-driven solutions.",
    siteName: "Alishba Arshad",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alishba Arshad — AI Automation & Data Analytics",
    description:
      "Building intelligent workflows, AI-powered automation systems, and data-driven solutions.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
