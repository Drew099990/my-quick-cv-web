"use client";
import { FaSmile } from "react-icons/fa";
import { useState } from "react";
import About from "./components/about";
import { json } from "stream/consumers";
import Demos from "./components/demos";
import Link from "next/link";

export default function Home() {
  const [temp,setTemp] = useState("")
  const [show, setShow] = useState(false);
  const[university,setUniversity] = useState("")
  const[gradutionyear,setGraduationyear] = useState("")
  const[Highschool,setHighschool] = useState("")
  const[completionyear,setCompletionyear] = useState("")
  const [activeSection, setActiveSection] = useState("contact");
  const [contact,setContact] = useState("")
  const [education,setEducation] = useState("")
  const [work,setWork] = useState("")
  const [skills,setSkills] = useState("")
  const [reference,setReference] = useState("")
  const [summary,setSummary] = useState("")
  

  const showModal = () => {
    setShow((prevShow) => !prevShow);
  };

  const selector = (section:any) => {
    setActiveSection(section);
  };

  

    const handleContactChange = (e:any) => {
      setContact(e.target.value);
    };
  
    const handleContactSave = (field:string) => {
      switch (field) {
        case "full name":
          localStorage.setItem("full name", JSON.stringify(contact));
          break;
        case "location":
          localStorage.setItem("", JSON.stringify(contact));
          break;
        case "email":
          localStorage.setItem("email", JSON.stringify(contact));
          break;
        default:
          break;
      }
    };
const handleEducationChange = (e:any) => {
  setEducation(e.target.value)
}

  const handleEducationSave = (feild:string)=>{

    if (feild === "University"){
    localStorage.setItem("university",JSON.stringify(education));
    }
    else if (feild === "Year Of Graduation"){
      localStorage.setItem("year of graduation",JSON.stringify(education));
    }
    else if (feild === "High school"){
      localStorage.setItem("high school",JSON.stringify(education));
    }
    else if( feild === "Year Of Completion"){
      localStorage.setItem("year of completion",JSON.stringify(education));
    }
    else{
    //
    }
  };

  const handleWorkSave = (feild:string)=>{

    switch(feild){
      case "Company name #1": localStorage.setItem("company1",JSON.stringify(work));
        break;
      case "1": localStorage.setItem("achie1",JSON.stringify(work));
      break;
      case "2": localStorage.setItem("achie2",JSON.stringify(work));
        break; 
      case "3": localStorage.setItem("achie3",JSON.stringify(work));
        break;
      case "Company name #2": localStorage.setItem("company2",JSON.stringify(work))
      break;
      case "01": localStorage.setItem("achie01",JSON.stringify(work));
        break;
      case "02": localStorage.setItem("achie02",JSON.stringify(work));
        break;
      case "03": localStorage.setItem("achie03",JSON.stringify(work));
        break;         
    }
  };

 const handleWorkChange = (e:any) =>{
  setWork(e.target.value)
 }

  const skills_page = (feild:string,value:string ,e:string)=>{

    if (feild === ""){

    }
    else if (feild === ""){

    }
    else if (feild === ""){

    }
    else{
     
    }
  };

  const reference_page = (feild:string,value:string ,e:string)=>{

    if (feild === ""){

    }
    else if (feild === ""){

    }
    else if (feild === ""){

    }
    else{
     
    }
  };

  const handleSummaryChange = (e:any)=>{
   setSummary(e.target.value)
  }

  const handleSummarySave = (feild:string)=>{

    if (feild === "summary"){
 localStorage.setItem("summary",JSON.stringify(summary))
    }

  };

 

  return (
    <div className="max-md:flex max-md:justify-center max-md:items-center max-md:flex-col">


      <About />

      <Demos/>

      <div className="flex justify-center">
        <button
          onClick={showModal}
          className="ring-2 max-md:mt-6 animate-bounce  bg-gray-900 p-3 rounded-2xl text-amber-50 mt-10"
        >
          Create your CV now!
        </button>
      </div>
 
      {show && (
        <div
          onDoubleClick={() => setShow(false)}
          className="bg-[#b4b2b2] min-md:ml-95 flex flex-col fixed top-[15%] border-gray-700 border-4 border-double w-[760px] rounded-2xl shadow-2xl h-[600px] m-6 max-md:w-[340px]"
        >
          <div className="w-full bg-gradient-to-r   from-gray-400 via-[#b4b2b2] to-gray-400 z-10 flex border-b-4 pr-2 border-dotted justify-evenly items-stretch">
            <button
              onClick={() => selector('contact')}
              className="rounded-tl-2xl flex-1 px-2 border-r-4 mx-2 my-1 border-dotted"
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
              className="rounded-tr-2xl flex-1 px-2 mx-2 my-1 border-dotted"
            >
              Professional Summary
            </button>
          </div>
          <div>

            
            {activeSection === 'contact' && <div><form className="p-5 pt-27 text-gray-700 flex flex-col justify-center items-center">
        <label>
            Full Name:
          </label>
          <input
                  id="full name"
                  value={contact}
                  onChange={handleContactChange}
                  onBlur={() => handleContactSave("full name")}
                  placeholder='William M...'
                  className="rounded-2xl px-5 bg-gray-400 w-100"
                  type="text"
                />
          <label>
            Location:
          </label>
          <input 
          id="location"
          onChange={handleContactChange}
                  onBlur={() => handleContactSave("location")}
          placeholder='city,country' 
          className="rounded-2xl px-5 bg-gray-400 w-100" type="text"></input>
          
          <label>
            Email:
          </label>
          <input
          id="email"
          onChange={handleContactChange}
                  onBlur={() => handleContactSave("email")}
           placeholder='andrewmmuyunda777@gmail.com' 
           className="rounded-2xl px-5 bg-gray-400 w-100" type="text"></input>
          
          <button onClick={()=>selector('education')} className='rounded border-dotted bottom-2 mt-5  border-gray-700 text-gray-800 underline'>next</button>
          </form></div>}
            {activeSection === 'education' &&  <div><form className="p-5 pt-27 text-gray-700 flex flex-col justify-center items-center">
    <label>
        University:
      </label>
      <input  value={education}
       onChange={handleEducationChange}
                  onBlur={() => handleEducationSave("University")}
                   placeholder='havard university' className="px-5 bg-gray-400 rounded-2xl w-100" type="text"></input>
      
      <label>
        Year Of Graduation:
      </label>
      <input value={education}
       onChange={handleEducationChange}
                  onBlur={() => handleEducationSave("Year Of Graduation")}
      placeholder='2017' 
      className="bg-gray-400 rounded-2xl w-100 px-5" type="text"></input>
      
      <label>
        High school:
      </label>
      <input value={education}
       onChange={handleEducationChange}
                  onBlur={() => handleEducationSave("High school")}
      placeholder='mountainhill highschool' 
      className="bg-gray-400 rounded-2xl w-100 px-5" type="text"></input>
      <label>
        Year Of Completion:
      </label>
      <input value={education}
       onChange={handleEducationChange}
                  onBlur={() => handleEducationSave("Year Of Completion")}
      placeholder='2012' 
      className="bg-gray-400 rounded-2xl w-100 px-5" type="text"></input>
      
      <button onClick={()=>selector('work')} className='rounded border-dotted bottom-2 mt-5  border-gray-700 text-gray-800 underline'>next</button>
      </form></div>}
            {activeSection === 'work' &&  <div><form className="p-5 pt-20 text-gray-700 rounded-2xl flex flex-col justify-center items-center">
    <label>
    Company Name #1:
      </label>
      <input value={work}
       onChange={handleWorkChange}
                  onBlur={() => handleWorkSave("Company name #1")}
      placeholder='google' 
      className="bg-gray-400 px-5 rounded-2xl w-100" type="text"></input>
      
      <label>
        Achivements at work:
      </label>
      <input value={work}
       onChange={handleWorkChange}
                  onBlur={() => handleWorkSave("1")}
      placeholder='1' 
      className="bg-gray-400 px-5 rounded-2xl w-100" type="text"></input>
      
      <label>
        Achivements at work:
      </label>
      <input value={work}
       onChange={handleWorkChange}
                  onBlur={() => handleWorkSave("2")}
      placeholder='2' 
      className="bg-gray-400  px-5 rounded-2xl w-100" type="text"></input>
      
      <label>
        Achivements at work:
      </label>
      <input value={work}
       onChange={handleWorkChange}
                  onBlur={() => handleWorkSave("3")}
      placeholder='3' 
      className="bg-gray-400 px-5 rounded-2xl w-100" type="text"></input>
      

      <label>
    Company Name #2:
      </label>
      <input value={work}
       onChange={handleWorkChange}
                  onBlur={() => handleWorkSave("Company name #2")}
      placeholder='top' 
      className="bg-gray-400 px-5 rounded-2xl w-100" type="text"></input>
      
      <label>
        Achivements at work:
      </label>
      <input value={work}
       onChange={handleWorkChange}
                  onBlur={() => handleWorkSave("01")}
      placeholder='1' 
      className="bg-gray-400 px-5 rounded-2xl w-100" type="text"></input>
      
      <label>
        Achivements at work:
      </label>
      <input value={work}
       onChange={handleWorkChange}
                  onBlur={() => handleWorkSave("02")}
      placeholder='2' 
      className="bg-gray-400 px-5 rounded-2xl w-100" type="text"></input>
      
      <label>
        Achivements at work:
      </label>
      <input value={work}
       onChange={handleWorkChange}
                  onBlur={() => handleWorkSave("03")}
      placeholder='3' 
       className="bg-gray-400 px-5 rounded-2xl w-100" type="text"></input>
      




      <button onClick={()=>selector('skills')} className='rounded border-dotted bottom-2 mt-5  border-gray-700 rounded-2xl text-gray-800 rounded-2xl underline'>next</button>
      </form></div>}
            {activeSection === 'skills' && <div><form className="p-5 pt-27 text-gray-700 px-5 rounded-2xl  flex flex-col justify-center items-center">
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
      
      
      <button  onClick={()=>selector('reference')} className='rounded border-dotted bottom-2 mt-5  border-gray-700 rounded-2xl  text-gray-800 rounded-2xl  underline'>next</button>
      </form></div>}
            {activeSection === 'reference' && <div><form className="p-5 pt-27 text-gray-700 rounded-2xl  flex flex-col justify-center items-center">
    <label>
        reference:
      </label>
      <input placeholder='reference of past work' className="bg-gray-400 px-5 rounded-2xl  w-100" type="text"></input>
      
      <label>
        reference:
      </label>
      <input placeholder='reference of past work' className="bg-gray-400 px-5 rounded-2xl  w-100" type="text"></input>
      
      <button onClick={()=>selector('summary')}  className='rounded border-dotted bottom-2 mt-5  border-gray-700 rounded-2xl  text-gray-800 rounded-2xl  underline'>next</button>
      </form></div>}


            {activeSection === 'summary' &&     <div><form className="p-5 pt-27 text-gray-700 rounded-2xl  flex flex-col justify-center items-center">
        <label>
            Summary</label>
            
            <input value={summary} onChange={handleSummaryChange} onBlur={()=>handleSummarySave("summary")} placeholder='your work summary,...' className="px-5 bg-gray-400 rounded-2xl  w-100" type="text"></input>
         <Link href="temp" className="decoration-none">   <button  className='rounded border-dotted mt-5 bottom-2 border-gray-700 rounded-2xl text-gray-800 rounded-2xl underline'>generate cv now!</button>
         </Link>
            </form></div>}
            
          </div>
        </div>
      )}
    </div>
  );
}