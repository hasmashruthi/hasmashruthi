import React from 'react'
import girl1 from '../assets/girl1.jpeg'
import { FaDownload } from 'react-icons/fa';
function Content() {
 
  return (
 
        // <section className='flex flex-col md:flex-row  px-5 py-32 bg-primary justify-center'>
        //     <h1 className=' md:w-1/2 text-white text-6xl font-content-font '>Hi,<br/>Im <span className='text-black'>S</span> Hasma Shruthi 
        //     <p className='text-2xl'>{config.subtitle}</p>
        //     </h1>
        //     <img className='md:w-1/6 'src={girl1}/>
        // </section>
        
  
  <div className='min-h-screen bg-black text-white text-center py-8'>
    <img src={girl1} alt=""className='mx-auto mb-8 w-40 h-50 rounded-full object-cover border-2 border-blue-300 transform transition-tranform 
    duration-300 hover:scale-105'/>
    <h1 className='text-2xl font-bold'>Hi! I'm{" "}
          <span className=' text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Hasma Shruthi</span> 👋🏻 <br/><br/>
          <span className='text-5xl italic'> Full-Stack Developer </span></h1>
    <p className='mt-4 text-lg text-gray-300'>I excel in building innovative and responsive web applications</p>
    
    <div className='mt-8 space-x-4'>
    <a href="https://drive.google.com/file/d/1nHlccmKXBTIBJbEvzkKoqQmy6b6gj8vP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
    <button
      className="bg-gradient-to-r from-green-400 to-blue-500 text-white inline-flex 
        items-center justify-center transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
    >   Resume <FaDownload className="ml-2" />
    </button>
</a>

    </div>
   
  </div>
  )
}


export default Content