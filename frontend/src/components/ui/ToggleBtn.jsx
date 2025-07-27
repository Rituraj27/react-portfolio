import { useColor } from '../../context/ColorContext';
import { useTheme } from '../../context/ThemeContext';

export default function ToogleBtn() {
  const { theme, toggleTheme } = useTheme();
  const { color } = useColor();

  const isDark = theme === 'dark';

  return (
    <div>
      <label className='inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          checked={isDark}
          onChange={() => toggleTheme()}
          className='sr-only peer'
        />
        <div className='relative w-[75px] h-8 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-300 peer-checked:bg-blue-600 dark:peer-checked:bg-[#303030]'>
          <div
            style={{ backgroundColor: color }}
            className={`absolute top-1/2 left-1 transform  -translate-y-1/2  h-6 w-9 rounded-xl text-white border-none  dark:border-none flex items-center justify-center text-[8px] uppercase font-[900] shadow transition-transform duration-300 ${
              isDark ? 'translate-x-8' : 'translate-x-0'
            }`}
          >
            {isDark ? 'Dark' : 'Light'}
          </div>
        </div>
        {/* <span className='ms-3 text-sm font-medium text-gray-900 dark:text-gray-300'></span> */}
      </label>
    </div>
  );
}
