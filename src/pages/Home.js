import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Contact from '../components/Contact';
import Award from '../assets/1.jpg'

export const Home = () => {
  return (
    <>
      <div className='home w-full items-center'>
        <div className='about  w-full h-screen flex flex-col justify-center items-center text-center bg-slate-600'>
          <h2 className=' text-7xl h-16' >I am Sailesh Ghimire</h2>
          <div className="prompt w-2/5 text-3xl">
            <p > A developer to learn and create</p>
            <LinkedInIcon className='text-6xl m-1' />
            <GitHubIcon className='text-6xl m-1' />
            <EmailOutlinedIcon className='text-6xl m-1' />
          </div>
        </div>
      </div>

      <div className="a h-screen flex items-center ">
        <div className="a-left flex flex-1 items-center justify-center relative h-full ">
          <div className="a-card bg   absolute top-12 left-12 bg-slate-600 "></div>
          <div className="a-card  w-3/5 h-4/5 rounded-3xl relative overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="hahaha"
              className="a-img w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="a-right flex-1">
          <h1 className="a-title font-normal">About Me</h1>
          <p className="a-sub my-5 mx-0">
            It is a long established fact that a reader will be distracted by the
            readable content.
          </p>
          <p className="a-desc font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
          </p>
          <div className="a-award  mt-12 flex items-center justify-between">
            <img src={Award} alt="hahaha" className="a-award-img w-32 h-32 rounded-2xl" />
            <div className="a-award-texts w-4/6">
              <h4 className="a-award-title font-bold mb-2">International Design Awards 2021</h4>
              <p className="a-award-desc">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                and fugit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='home py-10 w-full items-center bg-slate-400'>
        <div className="skills w-full text-4xl flex justify-center flex-col items-center">
          <h1>Skills</h1>
          <ol className="list list-none  justify-center">
            <li className='item'>
              <h2 className=' '>Front-end</h2>
              <span className=' text-xl'>
                ReactJS, HTML, CSS, Bootstrap, MaterialUI, TailwindCSS
              </span>
              <hr/>
            </li>
            <li className='item'>
              <h2 className=' '>Back-end</h2>
              <span className=' text-xl'>
                MySQL, .NET, NodeJS
              </span>
              <hr/>
            </li>
            <li className='item'>
              <h2 className=' '>Languages</h2>
              <span className=' text-xl'>
                Javascript, C#, C++, C, Typescript
              </span>
              <hr/>
            </li>
          </ol>
        </div>
      </div >

      <Contact />
    </>
  )
}

export default Home