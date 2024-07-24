import React, { useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { CiLight } from "react-icons/ci";
import NavBar from './NavBar';

const Header = ({darkMode, darkModeHandler}) => {
    const [menu, setMenu] = useState(false)
  return (
     <header className='border-gray-200 border-b-0 z-30 min-w-full backdrop-filter backdrop-blur-lg text-black flex justify-between items-center w-full py-2 px-8 dark:bg-black dark:text-white fixed'>
        <div className='flex-1'>
            <h1>Depakkumar</h1>
        </div>
        
        <nav className='mx-6 w-128 hidden md:block'>
            <ul className='flex justify-between' >
                <li className='px-4 hover:border-b-2 hover:text-blue-500'><a href="">Home</a></li>
                <li className='px-4 hover:border-b-2 hover:text-blue-500'><a href="">About</a></li>
                <li className='px-4 hover:border-b-2 hover:text-blue-500'><a href="">Skills</a></li>
                <li className='px-4 hover:border-b-2 hover:text-blue-500'><a href="">Education</a></li>
                <li className='px-4 hover:border-b-2 hover:text-blue-500'><a href="">Projects</a></li>
                <li className='px-4 hover:border-b-2 hover:text-blue-500'><a href="">Contact</a></li>
            </ul>
        </nav>

       {menu ? <NavBar setMenu={setMenu} /> : <></>}

        <div className='bg-white hover:bg-slate-100 dark:hover:bg-blue-800 dark:bg-black p-1 rounded-full' onClick={() => darkModeHandler()}>
         {darkMode && <CiLight size={25} className='cursor-pointer text-slate-400 dark:text-white'/>}
          {!darkMode && <MdOutlineDarkMode size={25} className='cursor-pointer text-slate-400' />}
        </div>

        <div className='p-1 mx-1 md:hidden' >
          <RiMenu3Line  size={25} className='cursor-pointer text-slate-400' onClick={() => setMenu(true)}/>
        </div>
    </header>
  )
}

export default Header
