import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
const cv_form = () => {

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

const handleStorage = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    switch (field) {
        case "fullName":
            setFullName(e.target.value);
            localStorage.setItem("fullName", JSON.stringify(e.target.value));
            break;
        case "location":
            setLocation(e.target.value);
            localStorage.setItem("location", JSON.stringify(e.target.value));
            break;
        case "email":
            setEmail(e.target.value);
            localStorage.setItem("email", JSON.stringify(e.target.value));
            break;
        case "university":
            setUniversity(e.target.value);
            localStorage.setItem("university", JSON.stringify(e.target.value));
            break;
        case "yearOfGraduation":
            setYearOfGraduation(e.target.value);
            localStorage.setItem("yearOfGraduation", JSON.stringify(e.target.value));
            break;
        case "highSchool":
            setHighSchool(e.target.value);
            localStorage.setItem("highSchool", JSON.stringify(e.target.value));
            break;
        case "yearOfCompletion":
            setYearOfCompletion(e.target.value);
            localStorage.setItem("yearOfCompletion", JSON.stringify(e.target.value));
            break;
        case "companyNameOne":
            setCompanyNameOne(e.target.value);
            localStorage.setItem("companyNameOne", JSON.stringify(e.target.value));
            break;
        case "achievementOne":
            setAchievementOne(e.target.value);
            localStorage.setItem("achievementOne", JSON.stringify(e.target.value));
            break;
        case "achievementTwo":
            setAchievementTwo(e.target.value);
            localStorage.setItem("achievementTwo", JSON.stringify(e.target.value));
            break;
        case "achievementThree":
            setAchievementThree(e.target.value);
            localStorage.setItem("achievementThree", JSON.stringify(e.target.value));
            break;
        case "companyNameTwo":
            setCompanyNameTwo(e.target.value);
            localStorage.setItem("companyNameTwo", JSON.stringify(e.target.value));
            break;
        case "achievementFour":
            setAchievementFour(e.target.value);
            localStorage.setItem("achievementFour", JSON.stringify(e.target.value));
            break;
        case "achievementFive":
            setAchievementFive(e.target.value);
            localStorage.setItem("achievementFive", JSON.stringify(e.target.value));
            break;
        case "achievementSix":
            setAchievementSix(e.target.value);
            localStorage.setItem("achievementSix", JSON.stringify(e.target.value));
            break;
        case "skillOne":
            setSkillOne(e.target.value);
            localStorage.setItem("skillOne", JSON.stringify(e.target.value));
            break;
        case "skillTwo":
            setSkillTwo(e.target.value);
            localStorage.setItem("skillTwo", JSON.stringify(e.target.value));
            break;
        case "skillThree":
            setSkillThree(e.target.value);
            localStorage.setItem("skillThree", JSON.stringify(e.target.value));
            break;
        case "skillFour":
            setSkillFour(e.target.value);
            localStorage.setItem("skillFour", JSON.stringify(e.target.value));
            break;
        case "skillFive":
            setSkillFive(e.target.value);
            localStorage.setItem("skillFive", JSON.stringify(e.target.value));
            break;
        case "skillSix":
            setSkillSix(e.target.value);
            localStorage.setItem("skillSix", JSON.stringify(e.target.value));
            break;
        case "referenceOne":
            setReferenceOne(e.target.value);
            localStorage.setItem("referenceOne", JSON.stringify(e.target.value));
            break;
        case "referenceTwo":
            setReferenceTwo(e.target.value);
            localStorage.setItem("referenceTwo", JSON.stringify(e.target.value));
            break;
        case "professionalSummary":
            setProfessionalSummary(e.target.value);
            localStorage.setItem("professionalSummary", JSON.stringify(e.target.value));
            break;
        default:
            break;
    }
};
  return (
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
  )
}

export default cv_form