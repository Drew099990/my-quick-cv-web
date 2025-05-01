import React from 'react'

const skills = () => {
  return (
    <div><form className="p-5 pt-27 text-gray-700 px-5 rounded-2xl  flex flex-col justify-center items-center">
    <label>
        Skill:
      </label>
      <input placeholder='1' className="bg-gray-400 rounded-2xl px-5  w-100" type="text"></input>
      
      <label>
        Skill:
      </label>
      <input placeholder='2' className="bg-gray-400 rounded-2xl  px-5 w-100" type="text"></input>
      
      <label>
        Skill:
      </label>
      <input placeholder='3' className="bg-gray-400 rounded-2xl  px-5 w-100" type="text"></input>
      
      <label>
        Skill:
      </label>
      <input placeholder='4' className="bg-gray-400 rounded-2xl px-5 w-100" type="text"></input>
      
      <label>
        Skill:
      </label>
      <input placeholder='5' className="bg-gray-400 rounded-2xl px-5 w-100" type="text"></input>
      
      
      <button  className='rounded border-dotted bottom-2 mt-5  border-gray-700 rounded-2xl  text-gray-800 rounded-2xl  underline'>next</button>
      </form></div>
  )
}

export default skills