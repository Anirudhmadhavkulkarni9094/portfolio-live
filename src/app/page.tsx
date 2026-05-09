import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import GetQuote from "@/components/GetQuote/GetQuote";
import Pricing from "@/components/Pricing/Pricing";
import Services from "@/components/Services/Services";
import HomeBlog from "@/components/HomeBlog/HomeBlog";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Anirudh Kulkarni",
            "jobTitle": "Full Stack Developer",
            "url": "https://anirudh-kulkarni.com",
            "sameAs": [
              "https://github.com/Anirudhmadhavkulkarni9094",
              "https://linkedin.com/in/anirudh-kulkarni"
            ],
            "description": "Premium Full Stack Developer specializing in Next.js, React, and SaaS development.",
            "knowsAbout": ["Web Development", "Next.js", "React", "Node.js", "Telehealth", "SaaS"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SaaS Development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce Development"
                  }
                }
              ]
            }
          })
        }}
      />
      <div className="relative sticky top-0 z-50">
      <Navbar />
      </div>

      <Hero></Hero>
      <Introduction/>
      <HomeBlog></HomeBlog>
      <Services></Services>
      <Pricing></Pricing>
      <GetQuote></GetQuote>
    </>
  );
}
