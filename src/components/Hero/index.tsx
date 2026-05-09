import Image from 'next/image'
import React from 'react'
import OrangeLayout from '../Layout/OrangeLayout'

function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <OrangeLayout>
        <main className="flex flex-col md:flex-row items-center justify-between gap-12 min-h-[85vh] py-12">
          
          {/* Social Icons */}
          <aside className="flex md:flex-col items-center gap-6 z-10">
            {[
              { href: "https://x.com/Anirudh9094", src: "/twitter.png", label: "Twitter" },
              { href: "mailto:anirudh.kulkarni.dev@gmail.com", src: "/gmail.png", label: "Email" },
              { href: "https://www.fiverr.com/s/LdqVNb4", src: "/fiverr.png", label: "Fiverr" },
              { href: "https://www.upwork.com/freelancers/~011d020018c114bc7a", src: "/upwork.png", label: "Upwork" }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.href} 
                aria-label={social.label}
                className="group p-2 rounded-full hover:bg-primary/10 transition-all duration-300 border border-transparent hover:border-primary/20"
              >
                <Image 
                  src={social.src} 
                  alt={social.label} 
                  width={24} 
                  height={24} 
                  className="filter invert opacity-70 group-hover:opacity-100 transition-opacity" 
                />
              </a>
            ))}
          </aside>

          {/* Hero Text */}
          <section className="text-center md:text-left max-w-2xl z-10">
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
              Full Stack Developer
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              I’m <span className="text-gradient">Anirudh Kulkarni</span>
            </h1>
            <h2 className="text-gray-400 text-lg sm:text-xl md:text-2xl mb-10 max-w-lg mx-auto md:mx-0">
              Crafting high-performance digital experiences from Bangalore, India.
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href="#about"
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 text-center"
              >
                Explore My Work
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto glass px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-all duration-300 text-center"
              >
                Get in Touch
              </a>
            </div>
          </section>

          {/* Hero Image */}
          <div className="relative flex justify-center z-10">
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full animate-pulse" />
            <Image
              src="/home.png"
              alt="Anirudh Kulkarni"
              width={400}
              height={400}
              className="relative w-64 sm:w-80 md:w-[450px] animate-float"
              priority
            />
          </div>
        </main>
      </OrangeLayout>
    </div>
  )
}

export default Hero
