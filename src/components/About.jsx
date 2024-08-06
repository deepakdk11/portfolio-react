import React from 'react'
import mee from '../assets/mee.jpg'
import {links} from '../assets/assets.js'
import { IoMdCloudDownload } from "react-icons/io";

const About = () => {
  return (
    <div className='py-10 dark:bg-black dark:text-white ' id='about'>

      <div className='w-full mb-10 '>
        <h1 className='text-4xl text-center'>About Me</h1>
      </div>

      <div className='flex flex-col md:px-20 items-center lg:flex-row '>

        <div className=' md:w-full'>
            <img src={mee} alt="" className='w-52 rounded-lg mx-auto  md:w-60 object-cover   transition-all' />
        </div>  

        <div className='px-10'>
          <p className='text-2xl font-bold my-4'>Deepakkumar</p>
          <p className='px-2 py-1 mb-2 text-sm bg-gray-200 w-fit rounded-md text-sky-600'>Front-End Developer</p>
            
          <p className='text-sm md:text-lg'>
            Junior Front-End Developer with a strong foundation in <span className='font-bold'>HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, 
            jQuery and React JS.</span> Recently completed a comprehensive web development course on Udemy, where I gained 
            hands-on experience by developing an eCommerce website and several other projects. Dedicated to building 
            responsive, user-friendly interfaces and passionate about leveraging modern web technologies to deliver 
            high-quality projects. Currently seeking a Front-End Developer position to apply my skills and continue 
            growing in a collaborative and dynamic environment.
          </p>

          <p className='my-2 text-sky-600'>Email :<a href="mailto:adkdeepak07@gmail.com" className='text-black dark:text-white'> adkdeepak07@gmail.com</a></p>
          <p className='my-2 mb-4'><span className='text-sky-600'>Location :</span> Bengaluru</p>
          
          <div className='flex items-center w-fit px-4 py-1 bg-sky-600 text-lg rounded-md text-white hover:drop-shadow-xl transition-all'>
            <a target='_blank' href={links.resume}>Resume</a>
            <IoMdCloudDownload className='ml-2' />
          </div> 

        </div>

      </div>

    </div>
  )
}

export default About