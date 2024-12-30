import React, { useState } from "react";
import girl1 from "../assets/girl4.png";
import "../App.css";

function About() {
  const config = {
    para: "I am a passionate MERN stack developer with expertise in building responsive and dynamic web applications. I specialize in crafting seamless front-end interfaces using React.js and implementing robust back-end solutions with Node.js, Express.js, and MongoDB. I thrive on solving complex coding challenges and delivering solutions that are both efficient and adaptable, ensuring reliability and flexibility throughout the stack.",
  };

  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("skills");

  // Function to change the active tab
  const opentab = (tab) => {
    setActiveTab(tab);  // Set the active tab
  };

  return (
    <div className="min-h-screen bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image */}
          <img
            src={girl1}
            alt="Person"
            className="w-full md:w-1/3 h-auto rounded-lg mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 text-justify">{config.para}</p>

            {/* Tab Buttons */}
            <div className="tab-tiles flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6">
              <p
                className={`tab-links px-4 py-2 cursor-pointer ${
                  activeTab === "skills" ? "active-link" : ""
                }`}
                onClick={() => opentab("skills")}
              >
                Skills
              </p>
              <p
                className={`tab-links px-4 py-2 cursor-pointer ${
                  activeTab === "education" ? "active-link" : ""
                }`}
                onClick={() => opentab("education")}
              >
                Education
              </p>
            </div>

            {/* Skills Tab Content */}
            {activeTab === "skills" && (
              <div className="space-y-4 tab-contents active-tab" id="skills">
                {/* Skills Content */}
                <div className="flex items-center">
                  <label htmlFor="react" className="w-2/12">
                    React JS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                  </div>
                </div>

                <div className="flex items-center">
                  <label htmlFor="Nodejs" className="w-2/12">
                    Node JS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>

                <div className="flex items-center">
                  <label htmlFor="MongoDB" className="w-2/12">
                    MongoDB
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>

                <div className="flex items-center">
                  <label htmlFor="MySQL" className="w-2/12">
                    MySQL
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
              </div>
            )}

            {/* Education Tab Content */}
            {activeTab === "education" && (
              <div className="tab-contents1" id="education">
                <ul>
                  <li>
                    <div className="year mb-2">2016 (Master of Engineering)</div>
                    <div className="education-details">
                      VLSI DESIGN from SNS Institute of Technology, Coimbatore
                    </div>
                  </li>
                  <br/>
                  <hr/>
                  <li>
                    <div className="year mb-2 mt-2">2014 (Bachelor of Engineering)</div>
                    <div className="education-details">
                      Electronics and Communication Engineering from United Institute of Technology, Coimbatore
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
