import React from 'react'
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { FaClipboard } from "react-icons/fa6";
import '../App.css'; 

function Header() {

  const [toggleMenu,setToggleMenu]=useState(false)
  return (
    <header className="flex items-center justify-between px-5 py-2 bg-black">
  {/* Left Section: Icon and Name */}
  <div className="text-white text-1xl flex items-center px-5 font-bold">
    <FaClipboard className="mr-2" /> {/* FontAwesome icon with margin */}
    Shruthi
  </div>

  {/* Center Section: Navigation */}
  <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
    <ul className="flex space-x-8 text-white font-bold">
      <li><a className="hover:text-gray-600" href="/">Home</a></li>
      <li><a className="hover:text-gray-600" href="#about">About</a></li>
      <li><a className="hover:text-gray-600" href="#projects">Projects</a></li>
      <li><a className="hover:text-gray-600" href="#contact">Contact</a></li>
    </ul>
  </nav>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setToggleMenu(!toggleMenu)}
    className="block md:hidden text-white"
  >
    <Bars3Icon className="h-5" />
  </button>

  {/* Mobile Menu */}
  {toggleMenu && (
    <nav className="block md:hidden absolute top-0 left-0 w-full bg-black bg-opacity-90">
      <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white p-5">
        <li><a className="hover:text-gray-400" href="/">Home</a></li>
        <li><a className="hover:text-gray-400" href="#about">About</a></li>
        <li><a className="hover:text-gray-400" href="#projects">Projects</a></li>
        <li><a className="hover:text-gray-400" href="#contact">Contact</a></li>
      </ul>
    </nav>
  )}
</header>

  )
}

export default Header