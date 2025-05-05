import React from 'react'

import img from "../assets/cv2.png"
import img2 from "../assets/cv3.png"
import img3 from "../assets/cv7.png"
import img4 from "../assets/cv6.png"

import Image from 'next/image'

const Demos = () => {
  return (
    <div className="bg-[#b4b2b2] shadow-xl max-md:w-fit min-md:mx-7 space-x-3 max-md:flex-col border-2 border-gray-700 flex justify-center items-start rounded-2xl border-dashed m-4">
   <h1 className='m-2 font-bold text-gray-600'>choose template</h1>
   
    <div className="w-[400px] hover:flex-col rounded-2xl hover:scale-105 transition-all duration-150 border-2 border-dotted border-gray-300  flex justify-center items-center  shadow-2xl h-[400px] hover:border-4 hover:border-double hover:bg-gray-600 bg-gray-700 max-md:w-[320px] m-6">
      <Image className='rounded-xl border-2 border-dotted border-gray-300 '
      src={img}
      alt='resume example' 
      width={220} 
      height={300}/>
      <h1 className='mx-2 text-gray-400 italic font-bold'>layout 1</h1>
    </div>

    <div className="w-[400px] hover:flex-col hover:scale-105 transition-all duration-150 rounded-2xl border-2 border-dotted border-gray-300 flex justify-center items-center shadow-2xl hover:border-4 hover:border-double hover:bg-gray-600 h-[400px] bg-gray-700 m-6 max-md:w-[320px]">
    <Image  className='rounded-xl border-2 border-dotted border-gray-300'
    src={img2} 
    alt='resume example' 
    width={220} 
    height={300}/>
          <h1 className='mx-2 text-gray-400 italic font-bold'>layout 2</h1>
    </div>

    <div className="w-[400px] hover:flex-col hover:scale-105 transition-all duration-150 rounded-2xl border-2 border-dotted border-gray-300 flex justify-center items-center shadow-2xl hover:border-4 hover:border-double hover:bg-gray-600 h-[400px] bg-gray-700 m-6 max-md:w-[320px]">
    <Image  className='rounded-xl border-2 border-dotted border-gray-300'
    src={img3} 
    alt='resume example' 
    width={220} 
    height={300}/>
          <h1 className='mx-2 text-gray-400 italic font-bold'>layout 3</h1>
    </div> 
    <div className="w-[400px] hover:flex-col   hover:scale-105 transition-all duration-150 rounded-2xl border-2 border-dotted border-gray-300 flex justify-center items-center shadow-2xl  hover:border-4 hover:border-double hover:bg-gray-600 h-[400px] bg-gray-700 m-6 max-md:w-[320px]">
    <Image  className='rounded-xl border-2 border-dotted border-gray-300 '
    src={img4}
     alt='resume example'
      width={220} 
      height={300}/>
            <h1 className='mx-2 hover:m-10 text-gray-400 italic font-bold'>layout 4</h1>
    </div>
  </div>
  )
}

export default Demos