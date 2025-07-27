import contactSvg from '../../../assets/contact.png';
import { useColor } from '../../../context/ColorContext';
function ContactMe() {
  const { color } = useColor();
  return (
    <div className=' w-full h-[100vh] dark:bg-[#191919] bg-white pb-[10vh] relative font-mont px-[10vw]'>
      <h2 className='text-center text-5xl font-mont font-[700] py-5 dark:text-white text-black mb-[5vw]'>
        Get In Touch
      </h2>
      <div
        style={{ backgroundColor: color }}
        className='p-2 gap-4 rounded-xl lg:rounded-r-none  relative h-[25vw] lg:w-[30vw] w-[100%] flex items-center justify-center flex-col text-white'
      >
        <img
          src={contactSvg}
          alt=''
          className='w-[70%] h-[70%] object-contain md:block hidden'
        />
        <h2 className='text-3xl'>Thank You</h2>
        <p className='text-[18px]'>Do you have any quries?</p>

        <div className='dark:bg-[#303030] p-4 rounded-xl absolute top-[5%] lg:top-auto lg:left-[100%]  w-[95%] lg:w-[50vw]'>
          <form
            action=''
            className='items-center justify-between grid grid-cols-1 grid-rows-[repeat(4,minmax(10px))] lg:grid-cols-2 lg:grid-rows-[repeat(3,110px)] h-full w-full gap-4'
          >
            <label className='flex flex-col lg:col-start-1 lg:col-end-2 col-span-2'>
              Email
              <input
                type='email'
                name='email'
                placeholder='example@gmail.com'
                className='w-[100%] pl-[1.1vw] py-[1vw] border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-600 placeholder:text-sm text-black'
              />
            </label>
            <label className='flex flex-col lg:col-start-2 lg:col-end-3 col-span-2'>
              Name
              <input
                type='text'
                name='text'
                placeholder='Eren Yager'
                className='w-[100%] pl-[1.1vw] py-[1vw] border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-600 placeholder:text-sm text-black'
              />
            </label>
            <label className='lg:col-start-1 lg:col-end-3 col-span-2 flex flex-col'>
              Message
              <textarea
                rows='4'
                placeholder='Hi there...!'
                className='w-[100%] pl-[1.1vw] py-[1vw] border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-600 placeholder:text-sm text-black'
              ></textarea>
            </label>

            <div className='col-start-2 col-end-3 flex items-end justify-end bg-amber-600'>
              <button
                className='py-2 px-6 rounded-md'
                style={{ backgroundColor: color }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
