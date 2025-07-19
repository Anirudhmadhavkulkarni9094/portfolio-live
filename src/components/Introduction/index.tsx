import Image from 'next/image';
import React from 'react';
import OrangeVerLayout from '../Layout/OrangeVerLayout';

function Introduction() {

    const skills = [
        "/html.png",
        "/css.png",
        "/developer.png",
        "/canvas.png",
        "/figma.png",
        "/github.png",
        "/nodejs.png",
        "/atom.png",
        "/typescript.png",
        "/java.png",
        "/python.png",
        "/database.png",
    ]
  return (
    <OrangeVerLayout>
      <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white gap-10 px-6 md:px-16">
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
            I will <span className="text-[#FF914D]">Design and Develop</span> the best websites
          </h3>
          <p className="text-gray-400 leading-relaxed">
            I am a Full Stack Developer based in Bangalore, India, specializing in modern web technologies
            like <strong>Next.js</strong>, <strong>React</strong>, and <strong>Node.js</strong>. With a passion for creating dynamic and
            responsive web applications, I aim to deliver high-quality solutions that meet client needs. My expertise
            includes building scalable applications, optimizing performance, and ensuring a seamless user experience
            across devices. Let's collaborate to bring your ideas to life with innovative web solutions.
          </p>
        </div>
      </section>
      <section className="bg-[#1F1B1A] py-12 px-6">
  {/* Heading */}
  <h2 className="text-white text-2xl font-bold mb-8">FEATURED WORK</h2>

  {/* Cards Container */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="border border-orange-500 rounded-lg p-6 bg-[#2A2524] hover:scale-105 transition-transform">
      <h3 className="text-white text-xl font-semibold mb-2">Floworq</h3>
      <p className="text-gray-400 mb-4">An Australian based startup for employee Management</p>
      <button className="bg-[#FF914D] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
        View Project
      </button>
    </div>

    {/* Card 2 */}
    <div className="border border-orange-500 rounded-lg p-6 bg-[#2A2524] hover:scale-105 transition-transform">
      <h3 className="text-white text-xl font-semibold mb-2">Capital Directories</h3>
      <p className="text-gray-400 mb-4">A South Asian based Investor management tool</p>
      <button className="bg-[#FF914D] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
        View Project
      </button>
    </div>

    {/* Card 3 */}
    <div className="border border-orange-500 rounded-lg p-6 bg-[#2A2524] hover:scale-105 transition-transform">
      <h3 className="text-white text-xl font-semibold mb-2">Clientoid</h3>
      <p className="text-gray-400 mb-4">An Indian based MicroSaaS tool for post-delivery client management</p>
      <button className="bg-[#FF914D] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
        View Project
      </button>
    </div>
  </div>
</section>
<section className="bg-[#1F1B1A] py-12 px-6">
  {/* Heading */}
  <h2 className="text-white text-2xl font-bold mb-8">PERSONAL PROJECTs</h2>

  {/* Cards Container */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="border border-orange-500 rounded-lg p-6 bg-[#2A2524] hover:scale-105 transition-transform">
      <h3 className="text-white text-xl font-semibold mb-2">Floworq</h3>
      <p className="text-gray-400 mb-4">An Australian based startup for employee Management</p>
      <button className="bg-[#FF914D] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
        View Project
      </button>
    </div>

    {/* Card 2 */}
    <div className="border border-orange-500 rounded-lg p-6 bg-[#2A2524] hover:scale-105 transition-transform">
      <h3 className="text-white text-xl font-semibold mb-2">Capital Directories</h3>
      <p className="text-gray-400 mb-4">A South Asian based Investor management tool</p>
      <button className="bg-[#FF914D] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
        View Project
      </button>
    </div>

    {/* Card 3 */}
    <div className="border border-orange-500 rounded-lg p-6 bg-[#2A2524] hover:scale-105 transition-transform">
      <h3 className="text-white text-xl font-semibold mb-2">Clientoid</h3>
      <p className="text-gray-400 mb-4">An Indian based MicroSaaS tool for post-delivery client management</p>
      <button className="bg-[#FF914D] text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
        View Project
      </button>
    </div>
  </div>
</section>

<section>
  <h2 className="text-white text-2xl font-bold mb-8 text-center">My Skills</h2>
    <div className='grid grid-cols-4 invert-100 text-center justify-items-center'>
        {skills.map(skill=>{
            return (
                <Image 
                    key={skill} 
                    src={skill} 
                    alt={skill.split('/')[1].split('.')[0]} 
                    width={50} 
                    height={50} 
                    className="m-2"
                />
            );
        })}
    </div>
</section>

    </OrangeVerLayout>
  );
}

export default Introduction;
