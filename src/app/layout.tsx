import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Anirudh Kulkarni — Software Engineer",
    template: "%s | Anirudh Kulkarni",
  },
  alternates: { canonical: "/" },
  description:
    "Anirudh Kulkarni is a software engineer in Bengaluru, India, building thoughtful products and reliable web applications with React, Next.js, and Node.js.",
  openGraph: {
    title: "Anirudh Kulkarni — Software Engineer",
    description:
      "Building software, products, and systems. Selected work and notes from Anirudh Kulkarni.",
    type: "website",
    url: "/",
    siteName: "Anirudh Kulkarni",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anirudh Kulkarni — Software Engineer",
    description:
      "Building software, products, and systems. Selected work and notes from Anirudh Kulkarni.",
  },
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
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
