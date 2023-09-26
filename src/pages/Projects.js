import React from 'react'
import { ProjectList } from '../context/ProjectList'

export const Projects = (props) => {
  return (

    <div name='projects' className='w-full md:h-screen ' style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30 41 59)' : 'white', color: props.mode === 'dark' ? '#E0E0E0' : 'black' }}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4  border-emerald-800'>
            Projects
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">

          {ProjectList.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              onMouseEnter={(e) => {
                e.target.style.backgroundImage = 'linear-gradient(to right, rgba(112, 157, 255, 0.8), hsla(242, 74%, 61%, 0.8))';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundImage = `url(${project.image})`;
              }}
              className="shadow-lg  group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div
               bg-no-repeat bg-cover bg-center h-64 
                shadow-[#040c16] hover:scale-110 duration-500"
            >
              <div className="opacity-0 group-hover:opacity-100  ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {project.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"> 
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
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