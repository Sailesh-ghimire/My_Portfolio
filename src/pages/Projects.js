import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { ProjectList } from '../context/ProjectList'

export const Projects = (props) => {
  return (
    <div style={{backgroundColor: props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} className='projects w-full h-auto flex justify-center items-center flex-col text-center text-6xl font-extrabold'>
    <h1 className='projectTitle text-center font-extrabold text-6xl'>  My personal Projects</h1>
    <div className="projectList   w-9/12 h-auto grid grid-cols-3 justify-center">
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