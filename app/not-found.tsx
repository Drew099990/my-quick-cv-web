import React from 'react'
import img from "./assets/cv2.png"
import Image from 'next/image'
const not_found = () => {
  return (
    <div className=' m-10 flex justify-center items-center text-7xl text-gray-500 '>
      <Image  className='rounded-xl border-2 border-dotted border-gray-300'
    src={img} 
    alt='resume example' 
    width={220} 
    height={300}/>
     <h1 className='m-2'> 404 page not found :(</h1></div>
  )
}

export default not_found