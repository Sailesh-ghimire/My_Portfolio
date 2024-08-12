import React from 'react';
import { ProjectList } from '../context/ProjectList';
import { Element } from 'react-scroll';

export const Projects = props => {
  return (
    <Element name='projects' className='w-full py-10'>
      <div
        className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'
        style={{
          backgroundColor: props.mode === 'dark' ? 'rgb(30 41 59)' : 'white',
          color: props.mode === 'dark' ? '#E0E0E0' : 'black',
        }}
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-emerald-800'>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {ProjectList.map((project, index) => (
            <div
              key={index}
              className='group container rounded-md shadow-lg flex flex-col justify-center items-center mx-auto bg-cover bg-center h-64 overflow-hidden transform transition-transform duration-300 hover:scale-105'
            >
              <img
                src={project.image}
                alt={project.name}
                className='w-full h-full object-cover rounded-md'
              />
              <div className='flex flex-col items-center justify-center bg-[rgba(0,0,0,0.6)] w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0'>
                <span className='text-xl font-bold text-white mb-4'>
                  {project.name}
                </span>
                <div className='flex space-x-4'>
                  <a
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-2 bg-white text-black text-sm font-bold transition-transform duration-200 transform hover:scale-105'>
                      Code
                    </button>
                  </a>
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-2 bg-white text-black text-sm font-bold transition-transform duration-200 transform hover:scale-105'>
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};
export default Projects;
