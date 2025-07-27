import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { useColor } from '../../../context/ColorContext';

function ProjectCard({
  title,
  description,
  image,
  slug,
  liveLink,
  githubLink,
}) {
  const { color } = useColor();
  return (
    <div className='flex flex-col md:flex-row items-center relative justify-center gap-3'>
      <div className='md:w-[35vw] lg:w-[25vw] w-[95%] h-auto py-5 rounded-lg overflow-hidden bg-white dark:bg-[#303030] z-30 shadow-[-1px_1px_42px_-13px_#000000]'>
        <img src={image} alt='' className='w-full h-full object-contain' />
      </div>

      <div className='md:w-[50vw] lg:w-[40vw] w-[95%] h-80 px-10 md:pl-28 rounded-lg overflow-hidden bg-white dark:bg-[#232323] md:-ml-[10%] z-20 shadow-[-1px_1px_42px_-13px_#000000] flex flex-col justify-between py-10'>
        <div>
          <h3 className='text-2xl font-[700] mb-3'>{title}</h3>
          <p className='text-base '>{description}</p>
        </div>
        <div className='flex items-center gap-4 mt-5 text-white'>
          <a href={liveLink} target='_blank' rel='noopener noreferrer'>
            <button
              className='px-3 rounded-md py-2 text-sm'
              style={{ backgroundColor: color }}
            >
              Live
            </button>
          </a>
          <Link to={`case-study/${slug}`}>
            <button
              className='px-3 rounded-md py-2 text-sm'
              style={{ backgroundColor: color }}
            >
              Case Study{' '}
            </button>
          </Link>
          <a href={githubLink}>
            <FaGithub className='text-2xl' style={{ color: color }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
