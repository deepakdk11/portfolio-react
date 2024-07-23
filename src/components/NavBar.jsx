import React from 'react'
import { IoMdClose } from "react-icons/io";

const NavBar = ({setMenu}) => {
  return (
      <nav className='absolute top-0 right-0 bottom-0 h-screen w-2/4 flex flex-col p-4 gap-5 bg-gray-100/95 backdrop-filter backdrop-blur-sm md:hidden dark:bg-black/95'>

          <IoMdClose size={25} className='text-black self-end cursor-pointer dark:text-white' onClick={() => setMenu(false)} />
          <ul className='w-full text-black dark:text-white' >
              <li className='pb-6 text-lg'><a href="#">Home</a></li>
              <li className='pb-6'><a href="#">About</a></li>
              <li className='pb-6'><a href="#">Skills</a></li>
              <li className='pb-6'><a href="#">Education</a></li>
              <li className='pb-6'><a href="#">Projects</a></li>
              <li className=''><a href="#">Contact</a></li>
          </ul>
      </nav>
  )
}

export default NavBar
