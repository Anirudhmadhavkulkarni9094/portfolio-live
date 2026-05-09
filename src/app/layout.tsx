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
  title: "Anirudh Kulkarni | Full Stack Developer Portfolio",
  description:
    "Portfolio of Anirudh Kulkarni, Full Stack Developer specializing in Next.js, React, and Node.js. Explore featured projects, skills, and contact information.",
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
