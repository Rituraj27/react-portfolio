import clodinaryLinks from '../../../data/clodinaryLinks';
import { useColor } from '../../../context/ColorContext';
import { useTheme } from '../../../context/ThemeContext';

function AboutMe() {
  const { color } = useColor();
  const { theme } = useTheme();
  const { assets } = clodinaryLinks;
  return (
    <div className='h-full w-full dark:bg-[#191919] bg-white md:pb-40 pb-80'>
      <h2 className='text-center text-5xl font-mont font-[700] py-10 dark:text-white text-black'>
        About Me
      </h2>
      <div
        className='w-full h-auto -skew-y-3 flex items-center justify-between px-[10vw] p-20 md:flex-row flex-col gap-10 relative '
        style={{ backgroundColor: theme === 'dark' ? '#232323' : color }}
      >
        <div className='w-52 h-52 skew-y-3 rounded-full overflow-hidden border-4 border-white'>
          <img
            src={assets.profilePhoto}
            alt='Rituraj'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='text-white text-xl font-mont skew-y-3 md:w-1/2 w-4/5 '>
          <p className='mb-4'>
            I am a FullStack developer with expertise in JavaScript. I enjoy
            solving complex problems and learning new skills. I am passionate
            about creating high-quality code that follows best practices and
            industry standards.
          </p>
          <p>
            I am always looking for new challenges and opportunities to grow as
            a developer.
          </p>
        </div>

        <div className='absolute w-full skew-y-3 -bottom-[400px] md:-bottom-40 left-0 flex items-center justify-center md:justify-between px-[10vw] p-20 gap-5 md:gap-20 md:flex-row flex-col '>
          <div
            className='md:w-68 h-auto bg-red-400 w-full rounded-md shadow-2xl'
            style={{
              backgroundColor: theme === 'dark' ? '#242424' : '#dedbdb',
              color: theme === 'dark' ? '#fff' : color,
            }}
          >
            <p className='p-5 font-mont'>
              “Simplicity is the baddest choice to be the best.“
            </p>
            <p className='text-right pr-5'>~Rituraj Hao</p>
          </div>
          <div
            className='md:w-68 h-auto bg-red-400 w-full rounded-md shadow-2xl'
            style={{
              backgroundColor: theme === 'dark' ? '#242424' : '#dedbdb',
              color: theme === 'dark' ? '#fff' : color,
            }}
          >
            <p className='p-5 font-mont'>
              “I know I’m not successful enough, but I’m passionate enough not
              to worry.“
            </p>
            <p className='text-right pr-5'>~Rituraj Hao</p>
          </div>
          <div
            className='md:w-68 h-auto bg-red-400 w-full rounded-md shadow-2xl'
            style={{
              backgroundColor: theme === 'dark' ? '#242424' : '#dedbdb ',
              color: theme === 'dark' ? '#fff' : color,
            }}
          >
            <p className='p-5 font-mont'>
              “Creativity is the driver of an unstoppable train called Passion.”
            </p>
            <p className='text-right pr-5'>~Rituraj Hao</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
