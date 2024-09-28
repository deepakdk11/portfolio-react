import React, { useState } from 'react'
import {reactProjects , javascriptProjects} from '../assets/assets.js'
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const [changeProject, setChangeProject] = useState('react')
    const [visibleProject, setVisibleProject] = useState(3)
    
  return (
    <div className='py-10 dark:bg-black dark:text-white w-full flex flex-col' id='project'>
        <div className='w-full'>
            <h1 className='text-4xl text-center'>Project</h1>
        </div>
      
      <div className='w-fit my-4 mt-9 mx-auto bg-gray-300 rounded-md py-2 dark:bg-slate-900'>
        <button className={changeProject==="react" ? 'px-5 py-1 mx-2 bg-sky-500 text-white text-lg rounded-md'
          : 'px-5 py-1 mx-2 text-lg  hover:bg-gray-200 hover:rounded-md dark:hover:bg-gray-800'}
          onClick={() => setChangeProject("react")}>React</button>
        <button className={changeProject==="javascript" ? 'px-5 py-1 mx-2 bg-sky-500 text-white text-lg rounded-md'
          : 'px-5 py-1 mx-2 text-lg  hover:bg-gray-200 hover:rounded-md dark:hover:bg-gray-800'} 
          onClick={() => setChangeProject("javascript")}>JavaScript</button>
      </div>

      <div className='flex flex-col w-fit my-10 mx-auto lg:grid lg:grid-cols-3'>
        {changeProject === "react" ?
           reactProjects.slice(0, visibleProject).map((pro) => 
            <div key={pro.id} className=' bg-slate-200 rounded-md p-4 w-80 my-4 md:mx-4 transition-all hover:scale-110 hover:opacity-100 dark:bg-gray-900'>
                <img src={pro.image} alt={pro.name} className='w-80 rounded-md ' />
                <p className='text-xl py-4 font-bold'>{pro.name}</p>
                <p className='text-gray-600 dark:text-gray-400'>{pro.description}</p>
                <div className='w-full flex justify-between  my-4'>
                    <div className='flex items-center bg-white py-1 px-2 rounded-md text-black'>
                       <a target='_blank' href={pro.link} className='pr-2' >View Link</a>
                       <FaExternalLinkAlt size={10} /> 
                    </div>
                    
                    <div className='flex items-center font-thin bg-black py-1 px-2 rounded-md text-white'>
                        <a target='_blank' href={pro.code} className='pr-2'>Score Code</a>
                        <FaCode size={10} />
                    </div> 
                </div>
            </div>
        ):
        changeProject==="javascript" ?
        javascriptProjects.map((pro) => 
            <div key={pro.id} className=' bg-slate-200 rounded-md p-4 w-80 my-4 md:mx-4 transition-all hover:scale-110 hover:opacity-100 dark:bg-gray-900'>
                <img src={pro.image} alt={pro.name} className='w-80 rounded-md' />
                <p className='text-xl py-4 font-bold'>{pro.name}</p>
                <p className='text-gray-600 dark:text-gray-400'>{pro.description}</p>
                 
                <div className='w-full flex justify-between my-4'>
                    <div className='flex items-center bg-white py-1 px-2 rounded-md text-black'>
                       <a target='_blank' href={pro.link} className='pr-2' >View Link</a>
                       <FaExternalLinkAlt size={10} /> 
                    </div>
                    
                    <div className='flex items-center font-thin bg-black py-1 px-2 rounded-md text-white'>
                        <a target='_blank' href={pro.code} className='pr-2'>Score Code</a>
                        <FaCode size={10} />
                    </div> 
                </div>
                
            </div>

             ): <></>
        }
      </div>
        <button className='mx-auto my-2 w-fit bg-sky-500 py-1 px-3 rounded-md text-white text-xl' onClick={() => setVisibleProject(visibleProject + 3)}>View More</button>
    </div>
  )
}

export default Projects
