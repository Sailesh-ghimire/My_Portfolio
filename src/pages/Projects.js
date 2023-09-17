import React from 'react'
import { ProjectList } from '../context/ProjectList'

export const Projects = (props) => {
  return (
    // <div style={{backgroundColor: props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}} className='projects w-full h-auto flex justify-center items-center flex-col text-center text-6xl font-extrabold'>
    // <h1 className='projectTitle text-center font-extrabold text-6xl'>  My personal Projects</h1>
    // <div className="projectList   w-9/12 h-auto grid grid-cols-3 justify-center">
    //  {ProjectList.map((project, idx)=>{
    //   return <ProjectItem id={idx} name={project.name} 
    //   image={project.image}
    //   />
    //  })}

    // </div>
    // </div>
    <div name='work' className='w-full md:h-screen '>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          
          {/* Gird Item */}
          {ProjectList.map((project, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${project.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div
               bg-no-repeat bg-cover bg-center h-64 
              hover:bg-gradient-to-r from-[rgba(112,157,255,0.8)] via-[hsla(242,74%,61%,0.8)] to-transparent "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100  ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {project.name}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={project.github} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={project.live} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  )
}

export default Projects