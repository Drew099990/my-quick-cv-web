import Image from "next/image";
import { FaSmile } from "react-icons/fa";


export default function Home() {
  return (
   <div className="max-md:flex max-md:justify-center max-md:items-center max-md:flex-col">
    <h1 className="bg-[#b4b2b2]  max-md:w-[400px] border-2 border-dotted font-semibold italic text-gray-700 border-gray-700 p-3 space-x-3  flex justify-center items-start rounded-2xl m-4">Welcome to Quick CV!

Creating your perfect resume has never been easier or faster. In just minutes, you can choose from a variety of beautifully designed templates that showcase your unique skills and experiences. Whether you're starting your career or looking for a new opportunity, our user-friendly platform ensures you’ll stand out to employers. Get started today and take the first step toward your dream job!

<FaSmile className="text-5xl  text-gray-600 "></FaSmile></h1>
    <div className="bg-[#b4b2b2] max-md:w-fit min-md:mx-7 space-x-3 max-md:flex-col border-2 border-gray-700  flex justify-center items-start rounded-2xl m-4">
    <div className="w-[400px] rounded-2xl shadow-2xl h-[400px] bg-gray-700 max-md:w-[320px] m-6"> </div>
    <div className="w-[400px] rounded-2xl shadow-2xl h-[400px] bg-amber-100 m-6 max-md:w-[320px] "> </div>
    <div className="w-[400px] rounded-2xl shadow-2xl h-[400px] bg-amber-100 m-6 max-md:w-[320px]"> </div>
    <div className="w-[400px] rounded-2xl shadow-2xl h-[400px] bg-gray-700 m-6 max-md:w-[320px]"> </div>
   
   </div>
   <div className="flex justify-center">
    <button  className="ring-2 max-md:mt-6 animate-bounce bg-gray-900 p-3 rounded-2xl text-amber-50 mt-2">create your cv now!</button>
    </div>
   </div>
  );
}
