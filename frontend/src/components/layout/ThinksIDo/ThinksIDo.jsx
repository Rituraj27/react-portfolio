import React from 'react';
import { FaCode } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiLeetcode } from 'react-icons/si';
import { useColor } from '../../../context/ColorContext';

export default function ThinksIDo() {
  const { color } = useColor();
  return (
    <div className=' h-fit w-full px-[10vw] dark:bg-[#191919] bg-white'>
      <h2 className='text-center text-5xl font-mont font-[700] py-10 dark:text-white text-black'>
        Things I Do
      </h2>

      <div className='flex justify-between md:flex-row flex-col items-center gap-6 py-[5vh]'>
        <div className='dark:text-white text-black h-72 md:w-80 w-[90%] rounded-xl shadow-2xl bg-[#cecece] dark:bg-[#232323]  flex flex-col items-center justify-center gap-5'>
          <FaCode
            className='text-8xl p-4 rounded-full'
            style={{ backgroundColor: color }}
          />
          <h3 className='text-2xl'>Fullstack</h3>
          <p className='px-4 text-center text-[15px]'>
            Bridging the gap between design and logic with full-stack
            development
          </p>
        </div>

        <div className='dark:text-white text-black h-72 md:w-80 w-[90%] rounded-xl shadow-2xl bg-[#dedbdb]  dark:bg-[#232323]  flex flex-col items-center justify-center gap-5'>
          <IoLogoJavascript
            className='text-8xl p-4 rounded-full'
            style={{ backgroundColor: color }}
          />
          <h3 className='text-2xl'>JavaScript</h3>
          <p className='px-4 text-center text-[15px]'>
            I use it daily and constantly push myself to write better, more
            efficient code.
          </p>
        </div>

        <div className='dark:text-white text-black h-72 md:w-80 w-[90%] rounded-xl shadow-2xl bg-[#dedbdb]  dark:bg-[#232323] flex flex-col items-center justify-center gap-5'>
          <SiLeetcode
            className='text-8xl p-4 rounded-full'
            style={{ backgroundColor: color }}
          />
          <h3 className='text-2xl'>Logic Building</h3>
          <p className='px-4 text-center text-[15px]'>
            Whether it's algorithms or edge cases, I thrive on logical thinking.
          </p>
        </div>
      </div>
    </div>
  );
}
