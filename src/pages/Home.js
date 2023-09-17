import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Contact from '../components/Contact';
import profile from '../assets/profile.jpg'
import About from './About';

export const Home = (props) => {
  return (
    // <div style={{backgroundColor: props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}>
    //   <div className='home    w-full items-center'>
    //     <div className='about h-screen w-full   flex flex-col justify-center items-center text-center '>
    //       <h2 className=' text-7xl h-16' >I am Sailesh Ghimire</h2>
    //       <div className="prompt w-2/5 text-3xl">
    //         <p > A developer to learn and create</p>
    //         <LinkedInIcon className='text-6xl m-1' />
    //         <GitHubIcon className='text-6xl m-1' />
    //         <EmailOutlinedIcon className='text-6xl m-1' />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="a h-screen flex items-center ">
    //     <div className="a-left flex flex-1 items-center relative justify-center  h-full ">
    //       <div className="a-card-bg top-12 left-12 absolute bg-green-600 "></div>
    //       <div className="a-card  w-3/5 h-3/5 rounded-3xl relative  overflow-hidden">
    //         <img
    //           src={profile}
    //           alt="profile"
    //           className="a-img w-full h-full object-cover"
    //         />
    //       </div>
    //     </div>
    //     <div className="a-right flex-1">
    //       <h1 className="a-title font-normal">About Me</h1>
    //       <p className="a-sub my-5 mx-0">
    //         It is a long established fact that a reader will be distracted by the
    //         readable content.
    //       </p>
    //       <p className="a-desc font-light">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    //         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //         aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
    //       </p>
          
    //     </div>
    //   </div>

    //   <div className='home py-10 w-full items-center bg-emerald-600'>
    //     <div className="skills w-full text-4xl flex justify-center flex-col items-center">
    //       <h1>Skills</h1>
    //       <ol className="list list-none  justify-center">
    //         <li className='item'>
    //           <h2 className=' '>Front-end</h2>
    //           <span className=' text-xl'>
    //             ReactJS, HTML, CSS, Bootstrap, MaterialUI, TailwindCSS
    //           </span>
    //           <hr/>
    //         </li>
    //         <li className='item'>
    //           <h2 className=' '>Back-end</h2>
    //           <span className=' text-xl'>
    //             MySQL, .NET, NodeJS
    //           </span>
    //           <hr/>
    //         </li>
    //         <li className='item'>
    //           <h2 className=' '>Languages</h2>
    //           <span className=' text-xl'>
    //             Javascript, C#, C++, C, Typescript
    //           </span>
    //           <hr/>
    //         </li>
    //       </ol>
    //     </div>
    //   </div >

    //   <Contact />
    // </div>

    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          SAILESH GHIMIRE
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed earum exercitationem officiis quidem magnam necessitatibus laboriosam ullam, voluptate, eos architecto impedit dolores numquam qui repellat itaque. At qui explicabo molestiae?
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <ArrowForwardOutlinedIcon className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Home