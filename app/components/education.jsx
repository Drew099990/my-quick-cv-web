import React from 'react'

const Education = () => {
  return (
    <div><form className="p-5 pt-27 text-gray-700 flex flex-col justify-center items-center">
    <label>
        University:
      </label>
      <input placeholder='havard university' className="px-5 bg-gray-400 rounded-2xl w-100" type="text"></input>
      
      <label>
        Year Of Graduation:
      </label>
      <input placeholder='2017' className="bg-gray-400 rounded-2xl w-100 px-5" type="text"></input>
      
      <label>
        High school:
      </label>
      <input placeholder='mountainhill highschool' className="bg-gray-400 rounded-2xl w-100 px-5" type="text"></input>
      <label>
        Year Of Graduation:
      </label>
      <input placeholder='2012' className="bg-gray-400 rounded-2xl w-100 px-5" type="text"></input>
      
      <button  className='rounded border-dotted bottom-2 mt-5  border-gray-700 text-gray-800 underline'>next</button>
      </form></div>
  )
}

export default Education