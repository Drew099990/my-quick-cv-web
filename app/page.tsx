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
  // const[university,setUniversity] = useState("")
  const[gradutionyear,setGraduationyear] = useState("")
  const[Highschool,setHighschool] = useState("")
  const[completionyear,setCompletionyear] = useState("")
  const [activeSection, setActiveSection] = useState("contact");
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [university, setUniversity] = useState("");
  const [yearOfGraduation, setYearOfGraduation] = useState("");
  const [highSchool, setHighSchool] = useState("");
  const [yearOfCompletion, setYearOfCompletion] = useState("");
  const [companyNameOne, setCompanyNameOne] = useState("");
  const [achievementOne, setAchievementOne] = useState("");
  const [achievementTwo, setAchievementTwo] = useState("");
  const [achievementThree, setAchievementThree] = useState("");
  const [companyNameTwo, setCompanyNameTwo] = useState("");
  const [achievementFour, setAchievementFour] = useState("");
  const [achievementFive, setAchievementFive] = useState("");
  const [achievementSix, setAchievementSix] = useState("");
  const [skillOne, setSkillOne] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  const [skillThree, setSkillThree] = useState("");
  const [skillFour, setSkillFour] = useState("");
  const [skillFive, setSkillFive] = useState("");
  const [skillSix, setSkillSix] = useState("");
  const [referenceOne, setReferenceOne] = useState("");
  const [referenceTwo, setReferenceTwo] = useState("");
  const [professionalSummary, setProfessionalSummary] = useState("");
  const showModal = () => {
    setShow((prevShow) => !prevShow);
  };

  const selector = (section:any) => {
    setActiveSection(section);
  };

  

  const handleStorage = (field: string, value: string) => {
    switch (field) {
        case "fullName":
            setFullName(value);
            localStorage.setItem("fullName", JSON.stringify(value));
            break;
        case "location":
            setLocation(value);
            localStorage.setItem("location", JSON.stringify(value));
            break;
        case "email":
            setEmail(value);
            localStorage.setItem("email", JSON.stringify(value));
            break;
        case "university":
            setUniversity(value);
            localStorage.setItem("university", JSON.stringify(value));
            break;
        case "yearOfGraduation":
            setYearOfGraduation(value);
            localStorage.setItem("yearOfGraduation", JSON.stringify(value));
            break;
        case "highSchool":
            setHighSchool(value);
            localStorage.setItem("highSchool", JSON.stringify(value));
            break;
        case "yearOfCompletion":
            setYearOfCompletion(value);
            localStorage.setItem("yearOfCompletion", JSON.stringify(value));
            break;
        case "companyNameOne":
            setCompanyNameOne(value);
            localStorage.setItem("companyNameOne", JSON.stringify(value));
            break;
        case "achievementOne":
            setAchievementOne(value);
            localStorage.setItem("achievementOne", JSON.stringify(value));
            break;
        case "achievementTwo":
            setAchievementTwo(value);
            localStorage.setItem("achievementTwo", JSON.stringify(value));
            break;
        case "achievementThree":
            setAchievementThree(value);
            localStorage.setItem("achievementThree", JSON.stringify(value));
            break;
        case "companyNameTwo":
            setCompanyNameTwo(value);
            localStorage.setItem("companyNameTwo", JSON.stringify(value));
            break;
        case "achievementFour":
            setAchievementFour(value);
            localStorage.setItem("achievementFour", JSON.stringify(value));
            break;
        case "achievementFive":
            setAchievementFive(value);
            localStorage.setItem("achievementFive", JSON.stringify(value));
            break;
        case "achievementSix":
            setAchievementSix(value);
            localStorage.setItem("achievementSix", JSON.stringify(value));
            break;
        case "skillOne":
            setSkillOne(value);
            localStorage.setItem("skillOne", JSON.stringify(value));
            break;
        case "skillTwo":
            setSkillTwo(value);
            localStorage.setItem("skillTwo", JSON.stringify(value));
            break;
        case "skillThree":
            setSkillThree(value);
            localStorage.setItem("skillThree", JSON.stringify(value));
            break;
        case "skillFour":
            setSkillFour(value);
            localStorage.setItem("skillFour", JSON.stringify(value));
            break;
        case "skillFive":
            setSkillFive(value);
            localStorage.setItem("skillFive", JSON.stringify(value));
            break;
        case "skillSix":
            setSkillSix(value);
            localStorage.setItem("skillSix", JSON.stringify(value));
            break;
        case "referenceOne":
            setReferenceOne(value);
            localStorage.setItem("referenceOne", JSON.stringify(value));
            break;
        case "referenceTwo":
            setReferenceTwo(value);
            localStorage.setItem("referenceTwo", JSON.stringify(value));
            break;
        case "professionalSummary":
            setProfessionalSummary(value);
            localStorage.setItem("professionalSummary", JSON.stringify(value));
            break;
        default:
            break;
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
    {activeSection === 'contact' && (
        <div>
            <form className="p-5 pt-27 text-gray-700 flex flex-col justify-center items-center">
                <label>Full Name:</label>
                <input
                    id="fullName"
                    value={fullName}
                    onChange={(e) => handleStorage("fullName", e.target.value)}
                    placeholder='William M...'
                    className="rounded-2xl px-5 bg-gray-400 w-100"
                    type="text"
                />
                <label>Location:</label>
                <input
                    id="location"
                    value={location}
                    onChange={(e) => handleStorage("location", e.target.value)}
                    placeholder='city, country'
                    className="rounded-2xl px-5 bg-gray-400 w-100"
                    type="text"
                />
                <label>Email:</label>
                <input
                    id="email"
                    value={email}
                    onChange={(e) => handleStorage("email", e.target.value)}
                    placeholder='andrewmmuyunda777@gmail.com'
                    className="rounded-2xl px-5 bg-gray-400 w-100"
                    type="text"
                />
                <button onClick={() => selector('education')} className='rounded border-dotted bottom-2 mt-5 border-gray-700 text-gray-800 underline'>next</button>
            </form>
        </div>
    )}
    {activeSection === 'education' && (
        <div>
            <form className="p-5 pt-27 text-gray-700 flex flex-col justify-center items-center">
                <label>University:</label>
                <input
                    id="university"
                    value={university}
                    onChange={(e) => handleStorage("university", e.target.value)}
                    placeholder='Harvard University'
                    className="px-5 bg-gray-400 rounded-2xl w-100"
                    type="text"
                />
                <label>Year Of Graduation:</label>
                <input
                    id="yearOfGraduation"
                    value={yearOfGraduation}
                    onChange={(e) => handleStorage("yearOfGraduation", e.target.value)}
                    placeholder='2017'
                    className="bg-gray-400 rounded-2xl w-100 px-5"
                    type="text"
                />
                <label>High School:</label>
                <input
                    id="highSchool"
                    value={highSchool}
                    onChange={(e) => handleStorage("highSchool", e.target.value)}
                    placeholder='Mountainhill High School'
                    className="bg-gray-400 rounded-2xl w-100 px-5"
                    type="text"
                />
                <label>Year Of Completion:</label>
                <input
                    id="yearOfCompletion"
                    value={yearOfCompletion}
                    onChange={(e) => handleStorage("yearOfCompletion", e.target.value)}
                    placeholder='2012'
                    className="bg-gray-400 rounded-2xl w-100 px-5"
                    type="text"
                />
                <button onClick={() => selector('work')} className='rounded border-dotted bottom-2 mt-5 border-gray-700 text-gray-800 underline'>next</button>
            </form>
        </div>
    )}
    {activeSection === 'work' && (
        <div>
            <form className="p-5 pt-20 text-gray-700 rounded-2xl flex flex-col justify-center items-center">
                <label>Company Name #1:</label>
                <input
                    id="companyNameOne"
                    value={companyNameOne}
                    onChange={(e) => handleStorage("companyNameOne", e.target.value)}
                    placeholder='Google'
                    className="bg-gray-400 px-5 rounded-2xl w-100"
                    type="text"
                />
                <label>Achievements at work:</label>
                <input
                    id="achievementOne"
                    value={achievementOne}
                    onChange={(e) => handleStorage("achievementOne", e.target.value)}
                    placeholder='Achievement 1'
                    className="bg-gray-400 px-5 rounded-2xl w-100"
                    type="text"
                />
                <label>Achievements at work:</label>
                <input
                    id="achievementTwo"
                    value={achievementTwo}
                    onChange={(e) => handleStorage("achievementTwo", e.target.value)}
                    placeholder='Achievement 2'
                    className="bg-gray-400 px-5 rounded-2xl w-100"
                    type="text"
                />
                <label>Achievements at work:</label>
                <input
                    id="achievementThree"
                    value={achievementThree}
                    onChange={(e) => handleStorage("achievementThree", e.target.value)}
                    placeholder='Achievement 3'
                    className="bg-gray-400 px-5 rounded-2xl w-100"
                    type="text"
                />
                <label>Company Name #2:</label>
                <input
                    id="companyNameTwo"
                    value={companyNameTwo}
                    onChange={(e) => handleStorage("companyNameTwo", e.target.value)}
                    placeholder='Top Company'
                    className="bg-gray-400 px-5 rounded-2xl w-100"
                    type="text"
                />
                <label>Achievements at work:</label>
                <input
                    id="achievementFour"
                    value={achievementFour}
                    onChange={(e) => handleStorage("achievementFour", e.target.value)}
                    placeholder='Achievement 1'
                    className="bg-gray-400 px-5 rounded-2xl w-100"
                    type="text"
                />
                <label>Achievements at work:</label>
                <input
                    id="achievementFive"
                    value={achievementFive}
                    onChange={(e) => handleStorage("achievementFive", e.target.value)}
                    placeholder='Achievement 2'
                    className="bg-gray-400 px-5 rounded-2xl w-100"
                    type="text"
                />
                <label>Achievements at work:</label>
                <input
                    id="achievementSix"
                    value={achievementSix}
                    onChange={(e) => handleStorage("achievementSix", e.target.value)}
                    placeholder='Achievement 3'
                    className="bg-gray-400 px-5 rounded-2xl w-100"
                    type="text"
                />
                <button onClick={() => selector('skills')} className='rounded border-dotted bottom-2 mt-5 border-gray-700 rounded-2xl text-gray-800 underline'>next</button>
            </form>
        </div>
    )}
    {activeSection === 'skills' && (
        <div>
            <form className="p-5 pt-27 text-gray-700 px-5 rounded-2xl flex flex-col justify-center items-center">
                <label>Skill:</label>
                <input
                    id="skillOne"
                    onChange={(e) => handleStorage("skillOne", e.target.value)}
                    placeholder='Skill 1'
                    className="bg-gray-400 rounded-2xl px-5 w-100"
                    type="text"
                />
                <label>Skill:</label>
                <input
                    id="skillTwo"
                    onChange={(e) => handleStorage("skillTwo", e.target.value)}
                    placeholder='Skill 2'
                    className="bg-gray-400 rounded-2xl px-5 w-100"
                    type="text"
                />
                <label>Skill:</label>
                <input
                    id="skillThree"
                    onChange={(e) => handleStorage("skillThree", e.target.value)}
                    placeholder='Skill 3'
                    className="bg-gray-400 rounded-2xl px-5 w-100"
                    type="text"
                />
                <label>Skill:</label>
                <input
                    id="skillFour"
                    onChange={(e) => handleStorage("skillFour", e.target.value)}
                    placeholder='Skill 4'
                    className="bg-gray-400 rounded-2xl px-5 w-100"
                    type="text"
                />
                <label>Skill:</label>
                <input
                    id="skillFive"
                    onChange={(e) => handleStorage("skillFive", e.target.value)}
                    placeholder='Skill 5'
                    className="bg-gray-400 rounded-2xl px-5 w-100"
                    type="text"
                />
                <label>Skill:</label>
                <input
                    id="skillSix"
                    onChange={(e) => handleStorage("skillSix", e.target.value)}
                    placeholder='Skill 6'
                    className="bg-gray-400 rounded-2xl px-5 w-100"
                    type="text"
                />
                <button onClick={() => selector('reference')} className='rounded border-dotted bottom-2 mt-5 border-gray-700 rounded-2xl text-gray-800 underline'>next</button>
            </form>
        </div>
    )}
    {activeSection === 'reference' && (
        <div>
            <form className="p-5 pt-27 text-gray-700 rounded-2xl flex flex-col justify-center items-center">
                <label>Reference:</label>
                <input
                    id="referenceOne"
                    onChange={(e) => handleStorage("referenceOne", e.target.value)}
                    placeholder='Reference of past work'
                    className="bg-gray-400 px-5 rounded-2xl w-100"
                    type="text"
                />
                <label>Reference:</label>
                <input
                    id="referenceTwo"
                    onChange={(e) => handleStorage("referenceTwo", e.target.value)}
                    placeholder='Reference of past work'
                    className="bg-gray-400 px-5 rounded-2xl w-100"
                    type="text"
                />
                <button onClick={() => selector('summary')} className='rounded border-dotted bottom-2 mt-5 border-gray-700 rounded-2xl text-gray-800 underline'>next</button>
            </form>
        </div>
    )}
    {activeSection === 'summary' && (
        <div>
            <form className="p-5 pt-27 text-gray-700 rounded-2xl flex flex-col justify-center items-center">
                <label>Summary:</label>
                <input
                    id="summary"
                    value={professionalSummary}
                    onChange={(e) => handleStorage("professionalSummary", e.target.value)}
                    placeholder='Your work summary,...'
                    className="px-5 bg-gray-400 rounded-2xl w-100"
                    type="text"
                />
                <Link href="temp" className="decoration-none">
                    <button className='rounded border-dotted mt-5 bottom-2 border-gray-700 rounded-2xl text-gray-800 underline'>Generate CV now!</button>
                </Link>
            </form>
        </div>
    )}
</div>
        </div>
      )}
    </div>
  );
}