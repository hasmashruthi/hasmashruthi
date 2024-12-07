import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p>
              I'm looking forward to contributing my skills in web development and collaborating on exciting and innovative projects.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:youremail@example.com" className="hover:underline">
                shruthiji06@exmple.com
              </a>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <FaPhone className="text-green-400" />
              <span>+91-9942555292</span>
               </div>
               <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/hasmashruthi/" className="text-gray-400 hover:text-white">
              <FaLinkedin />
                 </a>
                <a href="https://github.com/shruthi1993S" className="text-gray-400 hover:text-white">
                <FaGithub />
                 </a>
              </div>

          </div>
          <div className="flex-1 w-full">
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              <input type="hidden" name="access_key" value="32844918-01a8-4c84-9b85-ae6f1ced482a" />
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea
                  name="message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </div>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
