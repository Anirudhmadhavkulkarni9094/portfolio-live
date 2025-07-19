import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  budget?: string;
  ongoing?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, budget, ongoing }) => {
  return (
    <div className="relative rounded-lg p-[2px] border-1 border-orange-500 hover:scale-105 transition-transform">
      <div className="bg-[#2A2524] rounded-lg p-6 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          {budget && <p className="text-sm text-gray-300">💰 Budget: {budget}</p>}
          {ongoing && (
            <p className="text-green-400 font-semibold mt-1">🚀 Ongoing Project</p>
          )}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-[#FF914D] text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
