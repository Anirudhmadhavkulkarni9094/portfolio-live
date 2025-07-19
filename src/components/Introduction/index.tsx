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
      description: "An Australian-based startup for employee management.",
      link: "https://www.floworq.com/",
      budget: "$300",
      ongoing: false,
    },
    {
      title: "Capital Directories",
      description: "A South Asian investor management tool.",
      link: "https://www.capitaldirectories.com/",
      budget: "$200",
      ongoing: false,
    },
    {
      title: "Clientoid",
      description: "MicroSaaS for post-delivery client management.",
      link: "https://clientoid.vercel.app/",
      budget: "$300",
      ongoing: true,
    },
  ];

  const personalProjects = [
    { title: "Digital Innovation UI", description: "A Digital Agency for Marketing", link: "https://digital-innovation-studio.vercel.app/" },
    { title: "Expense Tracker", description: "An Expense tracker built to track you daily spending!", link: "https://expense-tracker-next-app.vercel.app/" },
  ];

  return (
    <OrangeVerLayout>
      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white gap-10 px-6 md:px-16">
        {/* Profile Image */}
        <Image
          src="/Profile.jpg"
          alt="Anirudh Kulkarni - Full Stack Developer Profile Picture"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
          priority
        />

        {/* Text Content */}
        <div className="max-w-2xl">
          <h2 className="font-bold text-xl mb-3">About Me</h2>
          <h3 className="font-semibold text-3xl md:text-4xl leading-snug mb-5">
            I will <span className="text-[#FF914D]">Design and Develop</span> the best websites
          </h3>
          <p className="text-gray-400 leading-relaxed">
            I am a Full Stack Developer based in Bangalore, India, specializing in modern web technologies
            like <strong>Next.js</strong>, <strong>React</strong>, and <strong>Node.js</strong>. I create dynamic and
            responsive applications, delivering high-quality solutions that meet client needs.
          </p>
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
