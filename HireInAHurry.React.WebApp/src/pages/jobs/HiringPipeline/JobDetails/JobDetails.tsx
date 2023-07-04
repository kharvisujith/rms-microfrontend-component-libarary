import React from 'react'
import './JobDetails.styles.scss';
import { useState } from 'react'


function ExpandableText({text}:any) {
  const max= 100; // max char
  const [isExpanded, setIsExpanded] = useState(false)

  const words = text.split(' ')

  const toggle = () => setIsExpanded(prev => !prev)

  if (words.length > max) {
    return (
      <>
        {isExpanded ? text : (
          words.slice(0, max).join(' ') + '...'
        )}
        &nbsp;
        <span style={{cursor:'pointer',color:'skyblue'}} onClick={toggle} role="button">
            {isExpanded ? 'Read less' : 'Read more'}
        </span>
      </>
    )
  }

  return text
}
const JobsDetails = () => {
 const jobsDetailsData = {
	"jobId" : "5ede2f28-e572-42c0-8780-aa084c0457dc",
	"workMode" : "Remote",
	"jobType" : "FullTime",
	"positions" : 20,
	"notice period" : "30 days",
	"experience" : "5 years",
	"salary" : "20-22k",      
	"qualification" : "B.E/B.Tech/MCA",
	"Skills" : ["Js","ReactJs","Figma"],
	"jobDescription" : "Responsible for the overall architecture for the workstream (e.g. Lead to Order) Definition of the high-level workstream architecture for the next 12 months aligned to Target/Transition defined by Eas.Work closely with business owner of the stream to guide and prioritize business capabilities.Delivery of Impact Assessments for workstream (may delegate to squad architects if the item,Responsible for theDefinition of the high-level workstream architecture for the next 12 months aligned to Target/Transition defined by Eas.Work closely with business owner of the stream to guide and prioritize business capabilities.Delivery of Impact Assessments for workstream (may delegate to squad architects if the item.Work closely with business owner of the stream to guide and prioritize business capabilities,Work closely with business owner of the stream to guide and prioritize business capabilities.Work closely with business owner of the stream to guide and prioritize business capabilities"
}
  return (
    <div className="main-job-details-container">
        <div className='main-job-details-section'>
            <h3 className='main-job-details-section-title'>Job Summary</h3>
            <div className='skills-container'>
                <div className='skills-capsule'>{jobsDetailsData.workMode}</div>
                <div className='skills-capsule'>{jobsDetailsData.jobType}</div>
            </div>
        </div>
        <div className='main-job-details-section'>
            <h3 className='main-job-details-section-title'>Qualifications</h3>
            <p>{jobsDetailsData.qualification}</p>
        </div>
        <div className='main-job-details-section'>
            <h3 className='main-job-details-section-title'>Skills</h3>
            <div className='skills-container'>
                {jobsDetailsData.Skills.map((skill)=>{
                    return <div className='skills-capsule'>{skill}</div>
                })}
            </div>
        </div>
        <div className='main-job-details-section' style={{paddingBottom:"2rem"}}>
            <h3 className='main-job-details-section-title'>Job Description</h3>
            <p style={{lineHeight:'1rem'}}><ExpandableText text={jobsDetailsData.jobDescription}/></p>
        </div>
    </div>
  )
}

export default JobsDetails;