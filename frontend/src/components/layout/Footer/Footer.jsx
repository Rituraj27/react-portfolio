import React from 'react';
import clodinaryLinks from '../../../data/clodinaryLinks';
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

function Footer() {
  const { assets } = clodinaryLinks;
  const { color } = useColor();
  return (
    <footer className='bg-[#dedbdb] dark:bg-[#232323] w-full flex justify-between h-16 items-center px-[10vw] shadow-[0px_-23px_69px_-36px_#4d4c4c]'>
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
        <p className='dark:text-white text-black'>Made By Rituraj</p>
      </div>
    </footer>
  );
}

export default Footer;
