import React from 'react'
import HR2 from "../assets/HR-2.jpg"
import shopping from "../assets/shopping.jpg"
import USER from "../assets/USER.jpg"

function Projects() {
    const config={
        projects:[
            {
            id:1,
            name:"HR Dashboard",
            image: HR2,
            link:"https://github.com/shruthi1993S/HR-mangement-frontend"
             },
            {
                id:2,
                name:"User Management system",
                image: USER,
                link:"https://github.com/shruthi1993S/user-management.git"
             },
             {
                id:3,
                name:"Ecommerce Hub",
                image: shopping,
                link:"https://github.com/shruthi1993S/redux-shopping-cart.git"
             },

    
    ]
    }
  return (
    // <section className='flex flex-col py-20 px-5 justify-center bg-primary text-white' id="projects">
    // <div className='w-full'>
    //     <div className='flex flex-col px-10 py-5'>
    //         <h1 className='text-4xl text-black mb-5 font-bold justify-center'>Projects</h1>
    //         <p>these are some of my best projects</p>
    //     </div>
    //  </div>
    //     <div className='w-full'>
    //         <div className='flex flex-col md:flex-row px-10 gap-5'>
    //             {config.projects.map((project)=>(
                   
    //                 <div className='relative'>
    //                 <img className="h-[400px] w-[500px]" src={project.image}></img>
    //                     <div className='project-desc'>
    //                         <p className='text-center px-5 py-5'>{project.description}</p>
    //                         <div className='flex justify-center'>
    //                         <a  className="btn" target="_blank" href={project.link}>View Project</a>
    //                  </div>
    //                     </div>
                        
    //                  </div>
    //             ))}             </div> 
    //     </div>
    // </section>

    <div className="bg-black text-white py-20" id="projects">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {config.projects.map((project)=>(
                <div key ={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lgtransform transition-transorm duration-300
                hover:scale-105'> 
                    <img src={project.image} alt={project.name} className='rounded-lg mb-5 w-full h-48 object-cover'/>
                    <h3 className='text-xl font-bold mb-4 text-center'>{project.name}</h3>
                    <a href={project.link} className="flex justify-center  bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full " target="_blank" 
              rel="noopener noreferrer">GitHub</a>
                </div>
            ))}
            </div>

        </div>
    </div>



  )
}

export default Projects