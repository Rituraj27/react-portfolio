import { useState } from 'react';
import clodinaryLinks from '../../../data/clodinaryLinks';
import { useColor } from '../../../context/ColorContext';
import { Slide, ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

function ContactMe() {
  const { assets } = clodinaryLinks;
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [validEmail, setValidEmail] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  function validateEmail(email) {
    return emailRegex.test(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, name, message } = formData;

    if (!email || !name || !message) {
      toast.error('Please fill out all the fields');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Invalid email address');
      return;
    }

    try {
      const res = await axios.post('https://api.riturajhao.in/send', {
        email,
        name,
        message,
      });

      if (res.data.success) {
        toast.success('Form submitted successfully');
        setFormData({ email: '', name: '', message: '' });
      } else {
        toast.error('Something went wrong IDK');
      }
    } catch (error) {
      toast.error(`Idk the error DAM`);
      console.log(error);
    }
  };

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
          src={assets.contactPhoto}
          alt=''
          className='w-[70%] h-[70%] object-contain md:block hidden'
        />
        <h2 className='text-3xl'>Thank You</h2>
        <p className='text-[18px]'>Do you have any quries?</p>

        <div className='dark:bg-[#232323] bg-[#dedbdb] dark:text-white text-black p-4 rounded-xl absolute top-[5%] lg:top-auto lg:left-[100%]  w-[95%] lg:w-[50vw]'>
          <form
            onSubmit={handleSubmit}
            className='items-center justify-between grid grid-cols-1 grid-rows-[repeat(4,minmax(10px))] lg:grid-cols-2 lg:grid-rows-[repeat(3,110px)] h-full w-full gap-4'
          >
            <label className='flex flex-col lg:col-start-1 lg:col-end-2 col-span-2'>
              Email
              <input
                type='email'
                name='email'
                value={formData.email}
                placeholder='example@gmail.com'
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, [e.target.name]: value });
                  setValidEmail(validateEmail(value));
                }}
                className={`w-[100%] pl-[1.1vw] py-[1vw] border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-600 placeholder:text-sm text-black ${
                  validEmail ? '' : 'focus:ring-red-500'
                }`}
              />
            </label>
            <label className='flex flex-col lg:col-start-2 lg:col-end-3 col-span-2'>
              Name
              <input
                type='text'
                value={formData.name}
                name='name'
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                placeholder='Eren Yager'
                className='w-[100%] pl-[1.1vw] py-[1vw] border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-600 placeholder:text-sm text-black'
              />
            </label>
            <label className='lg:col-start-1 lg:col-end-3 col-span-2 flex flex-col'>
              Message
              <textarea
                value={formData.message}
                maxLength='500'
                name='message'
                onChange={(e) => {
                  setFormData({ ...formData, [e.target.name]: e.target.value });
                }}
                rows='4'
                placeholder='Hi there...!'
                className='w-[100%] pl-[1.1vw] py-[1vw] border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-600 placeholder:text-sm text-black'
              ></textarea>
            </label>

            <div className='col-start-2 col-end-3 flex items-end justify-end'>
              <button
                type='submit'
                className='py-2 px-6 rounded-md'
                style={{ backgroundColor: color }}
                disabled={validEmail}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
        transition={Slide}
      />
    </div>
  );
}

export default ContactMe;
