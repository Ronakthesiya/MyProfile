import React, { useEffect } from 'react'
import './Project.css'
import projects from '../../data/projects.json'
import ProjectCard from './ProjectCard'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
  useEffect(() => {
    AOS.init({duration: 1500 , delay: 100});
  }, [])

  return <section id='project' className='container4'>
    <h2 className='title4' data-aos="fade-right">Projects</h2>
    <div className='projects'>
      {
        projects.map((project,id)=>{
          return <ProjectCard key={id} project={project}/>
        })
      }
    </div>
    <div className='fiveBlur'></div>
  </section>
}

export default Project