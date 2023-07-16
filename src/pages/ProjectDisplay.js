import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../context/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub';


const ProjectDisplay = () => {
const {id}=useParams();
const project = ProjectList[id];

  return (
    <div className='project w-full h-full flex items-center flex-col'>
        <h1 className=' mt-12 text-4xl'>{project.name}</h1>
        <img className=' w-700 rounded-lg' src={project.image} alt='' />
        <p className=' text-4xl'>
            <b>Skills:</b> {project.skills}
        </p>
        <GitHubIcon className=' text-6xl'/>
    </div>
      )
}

export default ProjectDisplay