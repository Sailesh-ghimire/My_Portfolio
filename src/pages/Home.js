import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { Link } from 'react-scroll';



export const Home = (props) => {
  const email = "saileshghimire.sg@gmail.com";
  const handleMouseEnter = () => {

    setTimeout(() => {
      alert(email);
    }, 1000);
  };
  return (
    <div name='home' className='w-full h-screen ' style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30 41 59)' : 'white', color: props.mode === 'dark' ? '#E0E0E0' : 'black' }}>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className=''>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold '>
          SAILESH GHIMIRE
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold '>
          I'm a Web Developer.
        </h2>
        <p className=' py-4 max-w-[700px]'>
          I'm a passionate and ambitious web developer specializing in ReactJS. As a fresher in the industry, I'm excited to leverage my skills to craft dynamic and user-friendly websites. Let's connect and collaborate to create impactful web experiences together!
        </p>
        <div className="div flex items-center ">
          <a href='https://www.linkedin.com/in/sailesh-ghimire/' target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className='text-6xl m-1' />
          </a>

          <a href='https://github.com/Sailesh-ghimire' target="_blank" rel="noopener noreferrer">
            <GitHubIcon className='text-6xl m-1' />
          </a>
          <button onClick={handleMouseEnter}>
            <EmailOutlinedIcon className='text-6xl m-1 cursor-pointer'
              title={`Email: ${email}`}
            />
          </button>
        </div>
        <div className=' flex '>
          <a href='CV.pdf' target="_blank">
            <button className=' rounded-full group border-2 mr-2 px-6 py-3 my-2 flex items-center hover:bg-emerald-800 hover:border-emerald-800' >
              Download CV
              <span >
                <AttachmentIcon className='ml-3 ' />
              </span>
            </button>
          </a>
          <button className='  rounded-full group border-2 px-6 py-3 my-2 flex items-center hover:bg-emerald-800 hover:border-emerald-800'>
            <Link to='projects' smooth={true} duration={500}>
              View Projects
            </Link>
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