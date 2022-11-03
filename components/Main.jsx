import React from 'react'
import Link from 'next/link'; 
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Main =() => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
            <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
             </p>
             <h1 className='py-4 text-gray-700'>
            Hi,  I&#39;m <span className='text-[#5651e5]'> Owen</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Am Full-Stack Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m a Junior web developer with robust problem-solving skills 
            (graduated from Hyperiondev  Bootcamp as a Full Stack Web developer) 
            am a very open-minded person. I get along with people very well and I like team-work 
            I adjust to change very ease. Currently,
            I’m focused on learning New technologies web applications while
            advancing my knowledge.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/owen-matsalani-543b4077/'
              target='_blank'
              rel="noreferrer"
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://github.com/owen-twaks' target='_blank' rel="noreferrer">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
                <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main;