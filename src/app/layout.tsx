import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anirudh Kulkarni | Premium Full Stack Developer & Freelancer",
  description:
    "Anirudh Kulkarni is a top-rated Full Stack Developer and Freelancer specializing in high-performance Next.js, React, and Node.js applications. Build your next startup with expert engineering.",
  keywords: [
    "Full Stack Developer",
    "Freelance Web Developer",
    "Next.js Expert",
    "React Developer Bangalore",
    "Software Engineer",
    "Hire a Developer",
    "Web Development Services",
    "Premium UI/UX Design",
    "Anirudh Kulkarni",
    "Telehealth Platform Developer",
    "SaaS Developer"
  ],
  authors: [{ name: "Anirudh Kulkarni" }],
  openGraph: {
    title: "Anirudh Kulkarni | Premium Full Stack Developer",
    description: "Expert Full Stack Engineering for modern startups and businesses.",
    url: "https://anirudh-kulkarni.com",
    siteName: "Anirudh Kulkarni Portfolio",
    images: [
      {
        url: "/home.png",
        width: 1200,
        height: 630,
        alt: "Anirudh Kulkarni Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anirudh Kulkarni | Full Stack Developer",
    description: "Expert Full Stack Engineering for modern startups.",
    images: ["/home.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${outfit.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
        <Analytics></Analytics>
      </body>
    </html>
  );
}
