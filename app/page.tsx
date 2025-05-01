"use client";
import { FaSmile } from "react-icons/fa";
import { useState } from "react";
import About from "./about";
import Contact from "./components/contact";
import Education from "./components/education";
import Work from "./components/work";
import Skills from "./components/skills";
import Reference from "./components/reference";
import Summary from "./components/summary";

export default function Home() {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState("contact");

  const showModal = () => {
    setShow((prevShow) => !prevShow);
  };

  const selector = (section:any) => {
    setActiveSection(section);
  };

  return (
    <div className="max-md:flex max-md:justify-center max-md:items-center max-md:flex-col">
      <h1 className="bg-[#b4b2b2] max-md:w-[400px] border-2 border-dotted font-semibold italic text-gray-700 border-gray-700 p-3 space-x-3 flex justify-center items-start rounded-2xl m-2">
        
      </h1>

      <About />
      
      <div className="bg-[#b4b2b2] max-md:w-fit min-md:mx-7 space-x-3 max-md:flex-col border-2 border-gray-700 flex justify-center items-start rounded-2xl m-4">
    <div className="w-[400px] rounded-2xl shadow-2xl h-[400px] bg-gray-700 max-md:w-[320px] m-6"></div>
    <div className="w-[400px] rounded-2xl shadow-2xl h-[400px] bg-amber-100 m-6 max-md:w-[320px]"></div>
    <div className="w-[400px] rounded-2xl shadow-2xl h-[400px] bg-amber-100 m-6 max-md:w-[320px]"></div>
    <div className="w-[400px] rounded-2xl shadow-2xl h-[400px] bg-gray-700 m-6 max-md:w-[320px]"></div>
  </div>
      <div className="flex justify-center">
        <button
          onClick={showModal}
          className="ring-2 max-md:mt-6 animate-bounce bg-gray-900 p-3 rounded-2xl text-amber-50 mt-2"
        >
          Create your CV now!
        </button>
      </div>

      {show && (
        <div
          onDoubleClick={() => setShow(false)}
          className="bg-[#b4b2b2] min-md:ml-95 flex flex-col fixed top-[15%] border-4 border-dotted w-[760px] rounded-2xl shadow-2xl h-[600px] m-6 max-md:w-[340px]"
        >
          <div className="w-full bg-gray-500 z-10 flex border-b-4 pr-2 border-dotted justify-evenly items-stretch">
            <button
              onClick={() => selector('contact')}
              className="flex-1 px-2 border-r-4 mx-2 my-1 border-dotted"
            >
              Contact Information
            </button>
            <button
              onClick={() => selector('education')}
              className="flex-1 px-2 border-r-4 mx-2 my-1 border-dotted"
            >
              Education
            </button>
            <button
              onClick={() => selector('work')}
              className="flex-1 px-2 border-r-4 mx-2 my-1 border-dotted"
            >
              Work Experience
            </button>
            <button
              onClick={() => selector('skills')}
              className="flex-1 px-2 border-r-4 mx-2 my-1 border-dotted"
            >
              Skills
            </button>
            <button
              onClick={() => selector('reference')}
              className="flex-1 px-2 border-r-4 mx-2 my-1 border-dotted"
            >
              References
            </button>
            <button
              onClick={() => selector('summary')}
              className="flex-1 px-2 mx-2 my-1 border-dotted"
            >
              Professional Summary
            </button>
          </div>
          <div>
            {activeSection === 'contact' && <Contact />}
            {activeSection === 'education' && <Education />}
            {activeSection === 'work' && <Work />}
            {activeSection === 'skills' && <Skills />}
            {activeSection === 'reference' && <Reference />}
            {activeSection === 'summary' && <Summary />}
          </div>
        </div>
      )}
    </div>
  );
}