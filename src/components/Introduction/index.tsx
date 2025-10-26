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
      title: "IPractis",
      description: "A platform to connect students with teachers for online learning.",
      link: "https://ipractis.com/",
      budget: "Confidential",
      ongoing: true,
    }
  ];

  const personalProjects = [
    { title: "Digital Innovation UI", description: "A Digital Agency for Marketing", link: "https://digital-innovation-studio.vercel.app/" },
    { title: "Expense Tracker", description: "An Expense tracker built to track you daily spending!", link: "https://expense-tracker-next-app.vercel.app/" },
  ];

  return (
    <OrangeVerLayout>
      {/* About Section */}
      <section
  id="about"
  className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white gap-10 px-6 md:px-16"
>
  {/* Profile Image */}
  <Image
    src="/Profile.jpg"
    alt="Anirudh Kulkarni - Full Stack Developer"
    width={300}
    height={300}
    className="rounded-lg shadow-lg"
    priority
  />

  {/* Text Content */}
  <div className="max-w-2xl">
    <h2 className="font-bold text-xl mb-3">About Me</h2>
    <h3 className="font-semibold text-3xl md:text-4xl leading-snug mb-5">
      I build <span className="text-[#FF914D]">fast, scalable websites</span> that grow your business.
    </h3>
    <p className="text-gray-400 leading-relaxed mb-4">
      I'm a Full Stack Developer from Bangalore, India, specializing in modern web technologies like
      <strong> Next.js</strong>, <strong>React</strong>, and <strong>Node.js</strong>. I help startups and businesses
      launch sleek, high-performing websites that convert visitors into customers.
    </p>
    <p className="text-gray-400 leading-relaxed">
      If you need a <strong>responsive website</strong> or a <strong>custom web app</strong> that works seamlessly on
      all devices, I can make it happen—on time and within budget.
    </p>
    <a
      href="#contact"
      className="inline-block mt-6 bg-[#FF914D] text-black font-semibold px-6 py-3 rounded-lg shadow hover:scale-105 transition-transform"
    >
      Get Your Free Quote →
    </a>
  </div>
</section>


      {/* Featured Projects */}
      <section className="bg-[#1F1B1A] py-12 px-6">
        <h2 className="text-white text-2xl font-bold mb-8">Featured Work: Web Development Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
              budget={project.budget}
              ongoing={project.ongoing}
            />
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      <section className="bg-[#1F1B1A] py-12 px-6">
        <h2 className="text-white text-2xl font-bold mb-8">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 px-6">
        <h2 className="text-white text-2xl font-bold mb-8 text-center">My Skills & Technologies</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
          {skills.map((skill) => (
            <Image
              key={skill}
              src={skill}
              alt={`Technology: ${skill.split('/')[1].split('.')[0]} logo`}
              width={50}
              height={50}
              className="m-2 hover:scale-110 transition-transform invert-100"
            />
          ))}
        </div>
      </section>
    </OrangeVerLayout>
  );
}

export default Introduction;
