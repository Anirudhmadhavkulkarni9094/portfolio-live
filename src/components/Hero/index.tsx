import Image from 'next/image'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import OrangeLayout from '../Layout/OrangeLayout'

function Hero() {
  return (
    <div>
      <OrangeLayout>
        <Navbar />
        <main className="flex flex-col md:flex-row items-center justify-between gap-8 min-h-[80vh]">
          
          {/* Social Icons */}
          <aside className="flex md:flex-col items-center gap-4">
            <a href="https://x.com/Anirudh9094" aria-label="Twitter">
              <Image src="/twitter.png" alt="Twitter Icon" width={25} height={25} className="filter invert m-1" />
            </a>
            <a href="mailto:anirudh.kulkarni.dev@gmail.com" aria-label="Email">
              <Image src="/gmail.png" alt="Gmail Icon" width={25} height={25} className="filter invert m-1" />
            </a>
            <a href="https://www.fiverr.com/s/LdqVNb4" aria-label="Instagram">
              <Image src="/fiverr.png" alt="Instagram Icon" width={25} height={25} className="filter invert m-1" />
            </a>
            <a href="https://www.upwork.com/freelancers/~011d020018c114bc7a?mp_source=share" aria-label="Upwork">
              <Image src="/upwork.png" alt="Upwork Icon" width={25} height={25} className="filter invert m-1" />
            </a>
          </aside>

          {/* Hero Text */}
          <section className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              I’m Anirudh Kulkarni
            </h1>
            <h2 className="text-[#FF914D] text-lg sm:text-xl md:text-2xl mb-6">
              A Full Stack Developer based in Bangalore, India
            </h2>
            <a
              href="#about"
              className="bg-[#FF914D] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#ff7a29] transition inline-block"
              aria-label="Learn more about me"
            >
              Learn More
            </a>
          </section>

          {/* Hero Image */}
          <div className="flex justify-center">
            <Image
              src="/home.png"
              alt="Illustration of a Full Stack Developer"
              width={280}
              height={280}
              className="w-48 sm:w-64 md:w-80"
              priority
            />
          </div>
        </main>
      </OrangeLayout>
    </div>
  )
}

export default Hero
