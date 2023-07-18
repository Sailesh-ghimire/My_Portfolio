import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../context/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub';


const ProjectDisplay = (props) => {
const {id}=useParams();
const project = ProjectList[id];

  return (
    <div style={{backgroundColor: props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} className='project w-full h-screen flex justify-center items-center flex-col'>
        <h1 className=' mt-12 text-4xl'>{project.name}</h1>
        <img className=' h-96 rounded-lg' src={project.image} alt='' />
        <p className=' text-4xl'>
            <b>Skills:</b> {project.skills}
        </p>
        <GitHubIcon className=' text-6xl'/>
    </div>
      )
}

export default ProjectDisplay