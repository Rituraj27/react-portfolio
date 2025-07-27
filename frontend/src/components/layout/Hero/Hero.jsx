import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import ColorBox from '../../ui/ColorBox';
import { useColor } from '../../../context/ColorContext';
import { useTheme } from '../../../context/ThemeContext';
import clodinaryLinks from '../../../data/clodinaryLinks';

const colorFilterMap = {
  '#3D74B6':
    'invert(32%) sepia(98%) saturate(7492%) hue-rotate(200deg) brightness(95%) contrast(101%)',
  '#E67514':
    'invert(64%) sepia(93%) saturate(1085%) hue-rotate(6deg) brightness(94%) contrast(94%)',
  '#B22222':
    'invert(17%) sepia(99%) saturate(2953%) hue-rotate(358deg) brightness(97%) contrast(101%)',
  '#E50046':
    'invert(31%) sepia(91%) saturate(5627%) hue-rotate(328deg) brightness(101%) contrast(103%)',
};

export default function Hero() {
  const [showDob, setShowDob] = useState(false);
  const age = new Date().getFullYear() - 2003;
  const dob = 'new Date().getFullYear() - 2003';
  const { assets } = clodinaryLinks;

  const { color } = useColor();
  const { theme } = useTheme();

  const getDate = () => {
    setShowDob(!showDob);
  };

  return (
    <section className='w-full h-[75vh] md:h-[105vh] relative font-mont dark:bg-[#191919] bg-white overflow-hidden'>
      <div className='absolute top-0 right-0 w-[40vw]'>
        <img
          src={assets.heroLogo}
          style={{
            filter: colorFilterMap[color] || 'none',
          }}
          className='w-full h-full object-contain'
          alt='square'
        />
      </div>
      <div className='flex-col md:flex-row  flex items-center justify-center md:justify-between h-full w-full px-[10vw] relative z-10'>
        <div className='h-[60vh] w-[50vh] md:w-[80vw] flex md:items-start items-center text-center md:text-start flex-col justify-center dark:text-white'>
          <div>
            <p className='text-base'>Hello, I'm</p>
            <h1 className='uppercase text-4xl font-[900]'>Rituraj Hao</h1>
            <p className='uppercase text-lg'>Full Stack Developer</p>
          </div>
          <button
            className='p-2 rounded-md mt-4 text-white font-mont text-sm'
            style={{ backgroundColor: color }}
          >
            Download Resume
          </button>
          <div
            style={{ color: color }}
            className='text-2xl flex items-start gap-3 mt-4'
          >
            <a href=''>
              <FaGithub />
            </a>
            <a href=''>
              <FaXTwitter />
            </a>
            <a href=''>
              <SiLeetcode />
            </a>
          </div>
        </div>
        <div className='h-[60vh] md:w-[60vh] w-full flex flex-col md:items-start items-start justify-start md:justify-center '>
          <div
            style={{
              color: theme === 'dark' ? '#fff' : color,
              fontSize: 'clamp(12px, 2vw, 14px)',
            }}
            className='pl-2 shadow-2xl bg-white  dark:bg-[#303030] md:text-sm/7 md:w-[60vh] w-full h-[30vh] flex flex-col justify-center rounded-md relative'
          >
            <pre>
              1&nbsp;class&nbsp;
              <b className='font-bold'>Person</b>&nbsp;
              {`{`}
            </pre>
            <pre>2&nbsp;&nbsp;&nbsp;constructor()&nbsp;{`{`}</pre>
            <pre>
              3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.name&nbsp;=&nbsp;"
              <b className='font-bold'>Rituraj Hao</b>";
            </pre>
            <pre>
              4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.skillset&nbsp;=&nbsp;"
              <b className='font-bold'>Developer</b>,
              <b className='font-bold'>Designer</b>";
            </pre>
            <pre onClick={getDate}>
              5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.age&nbsp;=&nbsp;
              {showDob ? `"${dob}"` : age};
            </pre>
            <pre>6&nbsp;&nbsp;&nbsp;{`}`}</pre>
            <pre>7&nbsp;{`}`}</pre>

            <ColorBox />
          </div>
        </div>
      </div>
    </section>
  );
}
