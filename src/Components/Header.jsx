import React from 'react'
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { FaClipboard } from "react-icons/fa6";
import '../App.css'; 

function Header() {

  const [toggleMenu,setToggleMenu]=useState(false)
  return (
    <header className=" flex justify-between  px-5 py-2 bg-black "> 
      <div className="text-white text-2xl px-10  flex items-center"> 
      <FaClipboard className="mr-2" /> {/* FontAwesome icon with margin */}
      Shruthi
    </div>

        
            <nav className='hidden md:block'> 
            <ul className='flex space-x-2 text-white font-bold'>
            <li ><a className='hover:text-gray-600' href='/'>Home</a></li>
            <li ><a className='hover:text-gray-600' href='#about'>About</a></li>
            <li ><a className='hover:text-gray-600' href='#projects'>Projects</a></li>
            <li ><a  className='hover:text-gray-600' href='#contact'>Contact</a></li>
            </ul>
            </nav>
            {toggleMenu && <nav className='block md:hidden fixed top-0 left-0 w-full bg-black bg-opacity-90 z-30 '> 
            <ul onClick={()=>setToggleMenu(!toggleMenu)} className='flex flex-col items-center justify-center text-white h-full mobile-nav'>
            <li ><a className='hover:text-gray-400' href='/'>Home</a></li>
            <li ><a className='hover:text-gray-400'  href='#about'>About</a></li>
            <li ><a className='hover:text-gray-400' href='#projects'>Projects</a></li>
            <li ><a className='hover:text-gray-400' href='#contact'>Contact</a></li>
            </ul>
            </nav>}
      <button onClick={()=>setToggleMenu(!toggleMenu)}className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
  )
}

export default Header