import React from 'react';
import { useColor } from '../../context/ColorContext';

const colors = [
  { hex: '#3D74B6', name: 'blue' },
  { hex: '#E67514', name: 'orange' },
  { hex: '#B22222', name: 'firebrick' },
  { hex: '#E50046', name: 'rose' },
];

export default function ColorBox() {
  const { setColor } = useColor();

  const handleChange = (color) => {
    setColor(color);
  };

  return (
    <div className='bg-[#cccccc]  absolute md:-bottom-10 md:-left-5 left-[50%] -bottom-10 -translate-x-[50%] h-14 w-52 p-2 rounded-md flex gap-2 items-center justify-evenly dark:bg-[#303030] shadow-2xl'>
      {colors.map(({ hex, name }) => (
        <button
          key={name}
          className='h-10 w-10 rounded-md'
          onClick={() => handleChange(hex)}
          style={{ backgroundColor: hex }}
        ></button>
      ))}
    </div>
  );
}
