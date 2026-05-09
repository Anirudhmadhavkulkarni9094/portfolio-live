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
    <div className="glass group relative overflow-hidden rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16C10.9124 16 10.017 16.8954 10.017 18L10.017 21M12.017 2V5M5.017 7L7.017 9M17.017 7L15.017 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-4">
             {ongoing && (
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            )}
            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
          </div>
          
          <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            {budget && (
              <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                {budget}
              </span>
            )}
             {ongoing && (
              <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400">
                Ongoing
              </span>
            )}
          </div>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-white font-bold group/link"
        >
          View Project
          <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
