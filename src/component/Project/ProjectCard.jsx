import React, { useEffect } from 'react'
import './ProjectCard.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProjectCard = ({project: {title,image,desc,skills,Demo,source}}) => {
  useEffect(() => {
    AOS.init({duration: 1500 , delay: 100});
  }, [])
  
  return <div className='container5' data-aos="zoom-in-up">
  <h3 className='projectTitle'>{title}</h3>
  <p className='projectDesc'>{desc}</p>
  <div className='projectSkills'>
    {
      skills.map((skill,id)=>{
        return <span className='projectSkill' key={id}>{skill}</span>
      })
    }
  </div>
  <div className='projectLinks'>
    <a className='projectLink' href={Demo}>Demo</a>
    <a className='projectLink' href={source}>Source</a>
  </div>
</div>
}

export default ProjectCard