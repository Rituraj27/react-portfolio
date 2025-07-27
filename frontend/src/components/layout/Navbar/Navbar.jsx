import React from 'react';
import clodinaryLinks from '../../../data/clodinaryLinks';
import { Link } from 'react-router-dom';
import ToogleBtn from '../../ui/ToggleBtn';
import { useTheme } from '../../../context/ThemeContext';
import { useColor } from '../../../context/ColorContext';

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

export default function Navbar() {
  const { theme } = useTheme();
  const { color } = useColor();
  const { assets } = clodinaryLinks;
  return (
    <nav className='bg-[#dedbdb]  hidden dark:bg-[#232323]  z-50 fixed top-0 left-0 w-full md:flex justify-between h-16 items-center px-[10vw]'>
      <div>
        <img
          src={assets.logo}
          alt='logo'
          style={{
            filter:
              colorFilterMap[color] ||
              'invert(32%) sepia(98%) saturate(7492%) hue-rotate(200deg) brightness(95%) contrast(101%)',
          }}
          className='h-10'
        />
      </div>
      <div>
        <ul
          style={{
            color: theme === 'dark' ? 'white' : color,
          }}
          className='flex gap-10 font-[14px] font-mont items-center'
        >
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <a href='#about'>about me</a>
          </li>
          <li>
            <Link to='/contact'>projects</Link>
          </li>
          <li>
            <Link to='/contact'>blog</Link>
          </li>
          <li>
            <a href='#contact'>contact</a>
          </li>
          <li>
            <ToogleBtn />
          </li>
        </ul>
      </div>
    </nav>
  );
}
