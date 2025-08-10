import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingConsultationButton from "./components/Floatingbutton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Guide – Data-Driven Decisions for Modern Businesses",
  description:
    "Unlock smarter decision-making with 'The Guide' – a free 40-page playbook crafted for business leaders. Learn how to replace chaos with clarity using real-time data, proven systems, and German-engineered solutions.",
  keywords: [
    "Data-driven decision making",
    "Business guide",
    "Free business playbook",
    "BS-Systeme GmbH",
    "Real-time analytics",
    "Digital transformation",
    "SME solutions",
    "German business tools",
  ],
  authors: [{ name: "BS-Systeme GmbH", url: "https://www.bs-systeme.de/" }],
  creator: "BS-Systeme GmbH",
  publisher: "BS-Systeme GmbH",
  metadataBase: new URL("https://www.bs-systeme.de"),
  openGraph: {
    title: "The Guide – 40 Pages to Smarter Business Decisions",
    description:
      "Say goodbye to Excel chaos. Download the free guide to transform your business with smart, data-driven decisions.",
    url: "https://www.bs-systeme.de",
    siteName: "BS-Systeme GmbH",
    images: [
      {
        url: "/section3.jpg",
        width: 1200,
        height: 630,
        alt: "The Guide by BS-Systeme",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Guide – 40 Pages to Smarter Business Decisions",
    description:
      "Free guide by BS-Systeme to eliminate guesswork and empower business decisions with real-time data.",
    images: ["/og-image.jpg"], // Replace with your Twitter OG image
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingConsultationButton/>
      </body>
    </html>
  );
}
