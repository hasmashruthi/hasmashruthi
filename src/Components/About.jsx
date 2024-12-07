import React from "react";
import girl1 from "../assets/girl1.png";
function About() {
  const config = {
    para: "I am a passionate full-stack developer with expertise in building responsive and dynamic web applications. I specialize in crafting seamless front-end interfaces and robust back-end solutions, always striving to solve complex coding challenges and deliver solutions that are both efficient and adaptable",
  };
  return (
    // <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
    //     <div className='md:w-1/2 py-5'>
    //         <img className='h-[400px]'  src={girl1}/>
    //     </div>

    //     <div className='md:w-1/2 flex justify-center'>
    //       <div className=' px-5 flex flex-col justify-center'>
    //           <h1 className='text-4xl text-black mb-5 font-bold' >About Me</h1>
    //           <p className=' text-white'>{config.para}</p>
    //       </div>
    //     </div>

    // </section>
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={girl1}
            alt=""
            className="w-72 h-80 rounded-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">{config.para}</p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="HTML&CSS" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="react" className="w-2/12">
                  React
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="Nodejs" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div />

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
