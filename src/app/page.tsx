import Head from "next/head";
import OrangeLayout from "@/components/Layout/OrangeLayout";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import GetQuote from "@/components/GetQuote/GetQuote";
import Pricing from "@/components/Pricing/Pricing";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anirudh Kulkarni | Full Stack Developer in Bangalore</title>
        <meta
          name="description"
          content="Anirudh Kulkarni is a Full Stack Developer based in Bangalore, specializing in modern web technologies like Next.js, React, and Node.js."
        />
        <meta name="keywords" content="Full Stack Developer, Next.js, React, Bangalore, Anirudh Kulkarni" />
        <meta name="author" content="Anirudh Kulkarni" />

        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="Anirudh Kulkarni | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer based in Bangalore, skilled in MERN and modern web apps." />
        <meta property="og:image" content="/home.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anirudh Kulkarni | Full Stack Developer" />
        <meta name="twitter:description" content="Full Stack Developer based in Bangalore, specializing in modern web technologies." />
        <meta name="twitter:image" content="/home.png" />
      </Head>
      <Hero></Hero>
      <Introduction/>
      <Services></Services>
      <Pricing></Pricing>
      <GetQuote></GetQuote>
    </>
  );
}
