import React from 'react'

export const About = (props) => {
  return (
    <div name='about' className='w-full h-screen ' style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30 41 59)' : 'white', color: props.mode === 'dark' ? '#E0E0E0' : 'black' }}>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-emerald-800'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>Currently exploring the world of backend development with Node.js and MongoDB. </p>
          </div>
          <div>
            <p>
              This journey is a stepping stone towards becoming a full-stack developer. Beyond the realm of personal projects,
              I see joining a dynamic company as a pivotal step in my journey.
              Working alongside experienced professionals, tackling real-world challenges,
              and being exposed to diverse projects will be invaluable in honing my skills and expanding my horizons.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About