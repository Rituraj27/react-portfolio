import { createContext, useContext, useEffect, useState } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState(() => {
    return localStorage.getItem('color') || '#6d83f2';
  });

  useEffect(() => {
    localStorage.setItem('color', color);
  }, [color]);

  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  return useContext(ColorContext);
};
