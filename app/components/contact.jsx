import React from 'react'

const Contact = () => {
  return (
    <div><form className="p-5 pt-27 text-gray-700 flex flex-col justify-center items-center">
        <label>
            Full Name:
          </label>
          <input placeholder='william m....' className="rounded-2xl px-5 bg-gray-400 w-100" type="text"></input>
          
          <label>
            Location:
          </label>
          <input placeholder='city,country' className="rounded-2xl px-5 bg-gray-400 w-100" type="text"></input>
          
          <label>
            Email:
          </label>
          <input placeholder='andrewmmuyunda777@gmail.com' className="rounded-2xl px-5 bg-gray-400 w-100" type="text"></input>
          
          <button  className='rounded border-dotted bottom-2 mt-5  border-gray-700 text-gray-800 underline'>next</button>
          </form></div>
  )
}

export default Contact