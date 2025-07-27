import React from 'react';
import clodinaryLinks from '../../../data/clodinaryLinks';
import ProjectCard from './ProjectCard';

function Projects() {
  const { assets: _, project } = clodinaryLinks;
  const projects = [
    {
      title: 'Notes Café',
      description: 'A web app for browsing and downloading academic notes.',
      image: project.notescafe,
      slug: 'notescafe',
      liveLink: 'https://notescafe.vercel.app/',
      githubLink: 'https://github.com/Rituraj27/notescafe',
    },
    {
      title: 'Duo Studio',
      description: 'A portfolio website for a design studio.',
      image: project.duoStudio,
      slug: 'duostudio',
      liveLink: 'https://rituraj27.github.io/Duo-Studio-Clone/',
      githubLink: 'https://github.com/Rituraj27/Duo-Studio-Clone',
    },
  ];

  return (
    <div className='w-full h-fit dark:bg-[#191919] bg-white px-[10vw] pb-[10vh] relative pt-[10vh] font-mont'>
      <h2 className='text-center text-5xl font-mont font-[700] py-10 dark:text-white text-black'>
        Projects
      </h2>

      <div className='flex flex-wrap justify-center gap-10 text-black dark:text-white font-mont'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
