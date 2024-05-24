import React, { useEffect } from 'react'
import './ProjectCard.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProjectCard = ({project: {title,image,desc,skills,demo,source}}) => {
  useEffect(() => {
    AOS.init({duration: 1500 , delay: 100});
  }, [])
  
  return <div className='container5' data-aos="zoom-in-up">
  <h3 className='projectTitle'>{title}</h3>
  <p className='projectDesc'>{desc}</p>
  <ul className='projectSkills'>
    {
      skills.map((skill,id)=>{
        return <li className='projectSkill' key={id}>{skill}</li>
      })
    }
  </ul>
  <div className='projectLinks'>
    <a className='projectLink' href={demo}>demo</a>
    <a className='projectLink' href={source}>Source</a>
  </div>
</div>
}

export default ProjectCard