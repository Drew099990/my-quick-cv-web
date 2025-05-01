import React from 'react'

const Summary = () => {
  return (
    <div><form className="p-5 pt-27 text-gray-700 rounded-2xl  flex flex-col justify-center items-center">
        <label>
            Summary</label>
            
            <input placeholder='your work summary,...' className="px-5 bg-gray-400 rounded-2xl  w-100" type="text"></input>
            <button  className='rounded border-dotted mt-5 bottom-2 border-gray-700 rounded-2xl text-gray-800 rounded-2xl underline'>generate cv now!</button>
     
            </form></div>
  )
}

export default Summary