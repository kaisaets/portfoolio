import React from 'react'
import './styles/Projects.css'
import ProjectItem from '../components/ProjectItem';
import katselabor from '../assets/katselabor.png';

const Projects = () => {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projectList'>
        <ProjectItem name="Katselabor" image={katselabor} description="My very first website built with HTML and CSS" url="https://vso24ets.ita.voco.ee/veebiarendus/lopuprojekt/index.html" />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />

      </div>
    </div>
  )
}

export default Projects;