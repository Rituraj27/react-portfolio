import React, { useState } from 'react';
import './MobileNav.css';
import { useColor } from '../../../context/ColorContext';
import { Link } from 'react-router-dom';
import ToogleBtn from '../../ui/ToggleBtn';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const { color } = useColor();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* Sidebar Modal */}
      {open && (
        <div className='md:hidden fixed h-72 w-28 bottom-24 right-0 z-50'>
          <ul className='flex flex-col gap-3 font-[14px] font-mont items-center text-white'>
            <li
              className='w-20 py-2 rounded-md text-center '
              style={{ backgroundColor: color }}
            >
              <Link to='/'>home</Link>
            </li>
            <li
              className='w-20 py-2 rounded-md text-center'
              style={{ backgroundColor: color }}
            >
              <Link to='/about'>about me</Link>
            </li>
            <li
              className='w-20 py-2 rounded-md text-center'
              style={{ backgroundColor: color }}
            >
              <Link to='/contact'>projects</Link>
            </li>
            <li
              className='w-20 py-2 rounded-md text-center'
              style={{ backgroundColor: color }}
            >
              <Link to='/contact'>blog</Link>
            </li>
            <li
              className='w-20 py-2 rounded-md text-center'
              style={{ backgroundColor: color }}
            >
              <Link to='/contact'>contact</Link>
            </li>
            <li>
              <ToogleBtn />
            </li>
          </ul>
        </div>
      )}

      <div
        className='md:hidden rounded-full h-16 w-16 fixed bottom-5 right-6 z-50 flex items-center'
        style={{ backgroundColor: color }}
      >
        <div
          id='nav-icon2'
          className={open ? 'open' : ''}
          onClick={toggleMenu}
          style={{ transform: 'scale(0.6)' }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}
