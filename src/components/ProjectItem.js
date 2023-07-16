import React from 'react'
import proj from '../assets/1.jpg'
import { useNavigate } from 'react-router-dom'

const ProjectItem = ({image, name, id}) => {
  const navigate = useNavigate();
  return (
    <div className='projectItem md:w-80 md:h-80 rounded-2xl w-80 h-80 m-10 border-x-amber-500 text-center
    hover:border-x-amber-500 hover:translate-x-2 hover:cursor-pointer'
    onClick={()=>{
      navigate("/project/" + id);
      }}
      >
        <div className="bgImage rounded-tl rounded-tr w-full h-full bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${proj})` }} ></div>
            <h1 className=' text-2xl'>{name}</h1>
    </div>
  )
}

export default ProjectItem