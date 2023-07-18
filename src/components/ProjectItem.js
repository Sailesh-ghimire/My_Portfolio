import React from 'react'
import project from '../assets/project.png'
import { useNavigate } from 'react-router-dom'

const ProjectItem = ({image, name, id}) => {
  const navigate = useNavigate();
  return (
    <div className='projectItem  rounded-2xl w-80 h-80 m-10 shadow-lg text-center
     hover:shadow-lg hover:transition hover:duration-300 hover:ease-in hover:cursor-pointer'
    onClick={()=>{
      navigate("/project/" + id);
      }}
      >
        <div className="bgImage rounded-tl-2xl rounded-tr-2xl w-full h-52 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${project})` }} ></div>
            <h1 className=' text-2xl'>{name}</h1>
    </div>
  )
}

export default ProjectItem