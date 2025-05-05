import React from 'react'
import { FaSmile } from 'react-icons/fa'

const About = () => {
  return (
    <div> <p className="bg-gradient-to-r  shadow-xl from-gray-400 via-[#b4b2b2] to-gray-400 text-gray-800 flex flex-row max-md:w-fit min-md:mx-7 border-2 border-gray-700 rounded-2xl m-4 p-3">
    Welcome to Quick CV!
   Creating your perfect resume has never been easier or faster. In just minutes, you can choose from a variety of beautifully designed templates that showcase your unique skills and experiences. Whether you're starting your career or looking for a new opportunity, our user-friendly platform ensures you’ll stand out to employers. Get started today and take the first step toward your dream job!
   <FaSmile className="text-5xl text-gray-600" /> </p>
   
   </div>
  )
}

export default About