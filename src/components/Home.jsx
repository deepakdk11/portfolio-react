import React from 'react'
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import { FaHandPointDown } from "react-icons/fa";
import img3 from '../assets/img3.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import {links} from '../assets/assets.js'


const Home = () => {

  const [textEffect] = useTypewriter({
    words:["FrontEnd Developer", "React Developer", "Web Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  });

  return (
    <div className='justify-normal bg-home-image bg-cover h-screen flex flex-col md:justify-between p-10 items-center lg:flex-row md:flex-col dark:bg-none dark:bg-black dark:text-white' id='home'>
      <div className='w-full sm:w-fit md:w-fit h-fit my-24'>
        <h1 className='text-4xl sm:text-4xl font-bold mb-2 lg:text-5xl md:text-5xl'>Hi <span className='text-yellow-400'>There</span>,</h1>
        <h1 className='text-4xl sm:text-4xl font-bold mb-2 lg:text-5xl md:text-5xl'>I'm Deepakkumar</h1>
        <h2 className=' text-xl sm:text-xl my-4 lg:text-3xl md:text-3xl '>
          Iam into 
          <span className='text-red-500'> {textEffect}</span>
          <span><Cursor /></span>
        </h2>
        <div className='flex justify-between items-center w-fit text-sm lg:text-base md:text-base px-4 py-2 my-4  rounded-lg  bg-black text-white hover:drop-shadow-xl transition-all dark:bg-gray-600'>
          <a href='#about' className=' '>About Me</a>
          <FaHandPointDown className='ml-2' />
        </div>
        
        <div className='flex justify-between mt-3'>
          <a href={links.twitter} target='_blank' className='w-fit p-2 bg-sky-600 rounded-full text-white cursor-pointer hover:text-black hover:bg-slate-300 hover:transition-all'><RiTwitterXFill size={25} /></a>
          <a href={links.instagram} target='_blank' className='w-fit p-2 bg-sky-600 rounded-full text-white cursor-pointer hover:text-instagram hover:bg-slate-300 hover:transition-all'><RiInstagramFill size={25} /></a>
          <a href={links.github} target='_blank' className='w-fit p-2 bg-sky-600 rounded-full text-white cursor-pointer hover:text-black hover:bg-slate-300 hover:transition-all'> <RiGithubFill size={25} /> </a>
          <a href={links.linkedin} target='_blank' className='w-fit p-2 bg-sky-600 rounded-full text-white cursor-pointer hover:text-linkedin hover:bg-slate-300 hover:transition-all'> <RiLinkedinFill size={25} /> </a>
          <a href={links.instagram} target='_blank' className='w-fit p-2 bg-sky-600 rounded-full text-white cursor-pointer hover:text-facebook hover:bg-slate-300 hover:transition-all'> <RiFacebookFill size={25} /> </a>
        </div>
      </div>
      <div className='mt-10' >
        <img  className='w-128' src={img3} alt="" />
      </div>
    </div>
  )
}

export default Home
