import Image from 'next/image';
import React from 'react';
import OrangeVerLayout from '../Layout/OrangeVerLayout';
import ProjectCard from '../Cards/ProjectCard';

function Introduction() {
  const skills = [
    "/html.png", "/css.png", "/developer.png", "/canvas.png",
    "/figma.png", "/github.png", "/nodejs.png", "/atom.png",
    "/typescript.png", "/java.png", "/python.png", "/database.png",
  ];

  const featuredProjects = [
    {
      title: "Floworq",
      description: "An Australian-based startup for employee management, built employment payroll integration.",
      link: "https://www.floworq.com/",
      budget: "$300",
      ongoing: false,
    },
    {
      title: "Clinecxa.lk",
      description: "A comprehensive Sri Lanka based telehealth platform connecting patients with healthcare professionals.",
      link: "https://www.clinecxa.lk/",
      budget: "Confidential",
      ongoing: true,
    }
  ];



  return (
    <OrangeVerLayout>
      <div className="space-y-24">
        {/* About Section */}
        <section
          id="about"
          className="flex flex-col lg:flex-row items-center justify-between gap-16 px-6 lg:px-12"
        >
          {/* Profile Image with decorative background */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <Image
              src="/Profile.jpg"
              alt="Anirudh Kulkarni"
              width={400}
              height={400}
              className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              I build <span className="text-gradient">high-performance</span> digital products.
            </h3>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer based in Bangalore, India, dedicated to building 
                exceptional digital experiences. I specialize in modern technologies like 
                <span className="text-white font-medium"> Next.js</span>, 
                <span className="text-white font-medium"> React</span>, and 
                <span className="text-white font-medium"> Node.js</span>.
              </p>
              <p>
                My goal is to help businesses bridge the gap between complex problems and 
                elegant solutions. Whether it&apos;s a high-converting landing page or a 
                complex SaaS platform, I deliver quality that scales.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300"
              >
                Start a Project
              </a>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Portfolio</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Featured Projects</h3>
            </div>
            <p className="text-gray-400 max-w-sm">
              A selection of my recent work in web development and design.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        </section>



        {/* Skills Section */}
        <section className="px-6 lg:px-12 py-12 glass rounded-3xl mx-6 lg:mx-12">
          <h2 className="text-center text-gray-400 font-medium uppercase tracking-[0.2em] mb-12">
            Tech Stack & Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {skills.map((skill) => (
              <div key={skill} className="relative group">
                 <Image
                  src={skill}
                  alt=""
                  width={45}
                  height={45}
                  className="filter invert group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </OrangeVerLayout>
  );
}

export default Introduction;
