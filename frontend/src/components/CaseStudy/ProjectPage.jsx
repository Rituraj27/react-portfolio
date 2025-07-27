import { useParams } from 'react-router-dom';
import projects from '../../data/projectData';

function ProjectPage() {
  const { projectId } = useParams();
  const project = projects[projectId];
  if (!project) {
    return (
      <div className='text-center p-10 text-red-500 font-mont'>
        <h1 className='text-3xl font-bold'>404 - Project Not Found</h1>
        <p>No case study found for “{projectId}”.</p>
      </div>
    );
  }

  return (
    <div className='p-10 max-w-5xl mx-auto text-black dark:text-white font-mont mt-[10vh]'>
      <h1 className='text-4xl font-bold mb-6'>{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        className='w-full max-w-3xl mb-6 rounded-xl shadow-lg'
      />

      <p className='text-lg mb-4'>{project.description}</p>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>✨ Features</h2>
      <ul className='list-disc pl-5 space-y-1'>
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h2 className='text-2xl font-semibold mt-6 mb-2'>🛠 Tech Stack</h2>
      <div className='flex flex-wrap gap-2'>
        {project.techStack.map((tech, index) => (
          <span
            key={index}
            className='bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm'
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
