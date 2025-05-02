import React from 'react'
import img from "./assets/cv2.png"
import Image from 'next/image'
const loading = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
         <h1 className='mx-2 text-7xl text-gray-500 italic font-bold'>loading ...</h1>
         <Image className='rounded-xl border-2 border-dotted border-gray-300 '
      src={img}
      alt='resume example' 
      width={700} 
      height={900}/>
     
    </div>
  )
}

export default loading