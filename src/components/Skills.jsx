import React, { useState } from 'react'
import {icons , toolsIcons} from '../assets/assets.js'

const Skills = () => {
  const [list, setList] = useState('frontEnd')
  return (
    <div className='py-10 dark:bg-black dark:text-white'>
      <div className='w-full'>
        <h1 className='text-4xl text-center'>My Skills</h1>
      </div>
  
      <div className='w-fit my-4 mt-9 mx-auto bg-gray-300 rounded-md py-2 dark:bg-slate-900'>
        <button 
          className={list==="frontEnd" ? 'px-5 py-1 mx-2 bg-sky-500 text-white text-lg rounded-md'
          : 'px-5 py-1 mx-2 text-lg  hover:bg-gray-200 hover:rounded-md dark:hover:bg-gray-800'} 
          onClick={() => setList("frontEnd")}>
          Front-End
        </button>

        <button 
          className={list==="tools" ? 'px-5 py-1 mx-2 bg-sky-500 text-white text-lg rounded-md' 
          : 'px-5 py-1 mx-2 text-lg hover:bg-gray-200 hover:rounded-md dark:hover:bg-gray-800'} 
          onClick={() => setList("tools")}>
          Tools
        </button>
      </div>

      <div className=' lg:w-3/4 2xl:w-3/5 my-10 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8'>
        {list==="frontEnd" ?  
            icons.map((icon) => 
                <div key={icon.id} className=' w-fit'>
                    <img className='w-20 p-2' src={icon.image} alt={icon.name} />
                    <p className='text-center'>{icon.name}</p>
                </div>
            ) : list==="tools" ?
            toolsIcons.map((icon)=>
              <div key={icon.id} className=' w-fit'>
                    <img className='w-20 p-2' src={icon.image} alt={icon.name} />
                    <p className='text-center'>{icon.name}</p>
                </div>
            ):
            <></>
        }
        
      </div>
    </div>
  )
}

export default Skills
