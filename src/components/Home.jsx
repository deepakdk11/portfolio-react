import React from 'react'
import { RiFacebookFill, RiGithubFill, RiInstagramFill, RiLinkedinFill, RiTwitterXFill } from "react-icons/ri";
import img3 from '../assets/img3.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter'


const Home = () => {

  const [textEffect] = useTypewriter({
    words:["FrontEnd Developer", "React Developer", "Web Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  });

  return (
    <div className='bg-home-image  h-screen flex flex-col justify-between p-10 items-center lg:flex-row md:flex-col dark:bg-none dark:bg-black dark:text-white'>
      <div className='w-fit h-fit my-20'>
        <h1 className='text-3xl font-bold mb-2 lg:text-5xl md:text-5xl'>Hi <span className='text-yellow-400'>There</span>,</h1>
        <h1 className='text-3xl font-bold mb-2 lg:text-5xl md:text-5xl'>I'm Deepakkumar</h1>
        <h2 className=' text-lg my-4 lg:text-3xl md:text-3xl '>
          Iam into 
          <span className='text-red-500'> {textEffect}</span>
          <span><Cursor /></span>
        </h2>
        <div className='flex justify-between w-full'>
          <button className=' text-sm lg:text-base md:text-base px-4 py-2 my-4  rounded-lg w-fit bg-black text-white'>About Me &#11163;</button>
          {/* <button className=' text-sm lg:text-base md:text-base px-4 py-2 my-4 rounded-full w-fit bg-red-700 text-white'>Download CV &#11163;</button> */}
        </div>
        
        <div className='flex justify-between mt-3'>
          <a href='' className='w-fit p-2 bg-sky-600 rounded-full text-white cursor-pointer hover:text-black hover:bg-slate-300 hover:transition-all'><RiTwitterXFill size={25} /></a>
          <a href='' className='w-fit p-2 bg-sky-600 rounded-full text-white cursor-pointer hover:text-instagram hover:bg-slate-300 hover:transition-all'><RiInstagramFill size={25} /></a>
          <a href='' className='w-fit p-2 bg-sky-600 rounded-full text-white cursor-pointer hover:text-black hover:bg-slate-300 hover:transition-all'> <RiGithubFill size={25} /> </a>
          <a href='' className='w-fit p-2 bg-sky-600 rounded-full text-white cursor-pointer hover:text-linkedin hover:bg-slate-300 hover:transition-all'> <RiLinkedinFill size={25} /> </a>
          <a href="" className='w-fit p-2 bg-sky-600 rounded-full text-white cursor-pointer hover:text-facebook hover:bg-slate-300 hover:transition-all'> <RiFacebookFill size={25} /> </a>
        </div>
      </div>
      <div className='' >
        <img  className='w-128' src={img3} alt="" />
      </div>
    </div>
  )
}

export default Home
