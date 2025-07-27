import { SiJavascript } from 'react-icons/si';

import { FaReact } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa6';
import { FaHtml5 } from 'react-icons/fa';
import { TbFileTypeCss } from 'react-icons/tb';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiAppwrite } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { IoLogoVercel } from 'react-icons/io5';
import { SiNetlify } from 'react-icons/si';
import { FaNpm } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import img from '../../../assets/programming-background-with-html-text.jpg';
import { useColor } from '../../../context/ColorContext';
import { useTheme } from '../../../context/ThemeContext';

function Skills() {
  const { color } = useColor();
  const { theme } = useTheme();
  return (
    <div className='w-full h-full md:h-[70vh] dark:bg-[#191919] bg-white px-[10vw] relative'>
      <div className='absolute top-0 left-0 w-full h-full md:h-[60vh] opacity-5 -skew-y-3'>
        <img className='w-full h-[98%] object-cover' src={img} alt='' />
      </div>
      <h2 className='text-center text-5xl font-mont font-[700] py-10 dark:text-white text-black'>
        My Skills
      </h2>
      <div>
        <div
          style={{ color: theme === 'dark' ? 'white' : color }}
          className='flex flex-wrap justify-center gap-10 p-10 text-black dark:text-white font-mont'
        >
          <div className='flex flex-col items-center'>
            <SiJavascript className='text-yellow-500 bg-black text-6xl rounded-md' />
            <h3 className='text-center text-base'>Javascript</h3>
          </div>
          <div className='flex flex-col items-center'>
            <FaReact className='text-blue-500 text-6xl rounded-md' />
            <h3 className='text-center text-base'>React</h3>
          </div>
          <div className='flex flex-col items-center'>
            <FaNode className='text-green-500 text-6xl rounded-md' />
            <h3 className='text-center text-base'>NodeJs</h3>
          </div>
          <div className='flex flex-col items-center'>
            <FaHtml5 className='text-orange-500 text-6xl rounded-md' />
            <h3 className='text-center text-base'>HTML</h3>
          </div>
          <div className='flex flex-col items-center'>
            <TbFileTypeCss className='text-blue-600 text-6xl rounded-md' />
            <h3 className='text-center text-base'>CSS</h3>
          </div>
          <div className='flex flex-col items-center'>
            <RiTailwindCssFill className='text-cyan-400 text-6xl rounded-md' />
            <h3 className='text-center text-base'>TailwindCSS</h3>
          </div>
          <div className='flex flex-col items-center'>
            <FaGithub className='text-gray-800 text-6xl rounded-md' />
            <h3 className='text-center text-base'>Github</h3>
          </div>
          <div className='flex flex-col items-center'>
            <SiMongodb className='text-green-700 text-6xl rounded-md' />
            <h3 className='text-center text-base'>MongoDB</h3>
          </div>
          <div className='flex flex-col items-center'>
            <SiAppwrite className='text-blue-500 text-6xl rounded-md' />
            <h3 className='text-center text-base'>AppWrite</h3>
          </div>
          <div className='flex flex-col items-center'>
            <TbBrandNextjs className='text-black text-6xl rounded-md' />
            <h3 className='text-center text-base'>NextJs</h3>
          </div>
          <div className='flex flex-col items-center'>
            <IoLogoVercel className='text-blue-600 text-6xl rounded-md' />
            <h3 className='text-center text-base'>Vercel</h3>
          </div>
          <div className='flex flex-col items-center'>
            <SiNetlify className='text-green-500 text-6xl rounded-md' />
            <h3 className='text-center text-base'>Netlify</h3>
          </div>
          <div className='flex flex-col items-center'>
            <FaNpm className='text-red-500 text-6xl rounded-md' />
            <h3 className='text-center text-base'>NPM</h3>
          </div>
          <div className='flex flex-col items-center'>
            <FaJava className='text-blue-800 text-6xl rounded-md' />
            <h3 className='text-center text-base'>Java</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
