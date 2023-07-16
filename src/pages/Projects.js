import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../context/ProjectList'

export const Projects = () => {
  return (
    <div className='projects w-full h-auto flex justify-center items-center flex-col text-center text-6xl font-extrabold'>
    <h1 className='projectTitle text-center font-extrabold text-6xl'>  My personal Projects</h1>
    <div className="projectList md:w-80 md:h-80 md:grid-cols-1 lg:grid-cols-1 w-9/12 h-auto grid grid-cols-1 place-items-center">
     {ProjectList.map((project, idx)=>{
      return <ProjectItem id={idx} name={project.name} 
      image={project.image}
      />
     })}

    </div>
    </div>
  )
}

export default Projects