import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Contact from '../components/Contact';
import Award from '../assets/1.jpg'

export const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <div className="skills ">
          <h2 >I am Sailesh Ghimire</h2>
          <div className="prompt">
            <p > A developer to learn and create</p>
            <LinkedInIcon />
            <GitHubIcon />
            <EmailOutlinedIcon />
          </div>
        </div>

        <div className="a h-full flex items-center sm:flex-col sm:text-center sm:mt-12">
          <div className="a-left flex flex-1 items-center justify-center relative h-full sm:w-full">
            <div className="a-card bg sm:hidden  absolute top-12 left-12 bg-slate-600 "></div>
            <div className="a-card sm:h-1/4 w-3/5 h-4/6 rounded-3xl relative hidden">
              <img
                src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="hahaha"
                className="a-img w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="a-right sm:p-5 flex-1">
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
            <div className="a-award sm:hidden mt-12 flex items-center justify-between">
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

        <div className="skills">
          <h1>Skills</h1>
          <ol className="list">
            <li className='item'>
              <h2>Front-end</h2>
              <span>
                ReactJS, HTML, CSS, Bootstrap, MaterialUI, TailwindCSS
              </span>
            </li>
            <li className='item'>
              <h2>Back-end</h2>
              <span>
                MySQL, .NET, NodeJS
              </span>
            </li>
            <li className='item'>
              <h2>Languages</h2>
              <span>
                Javascript, C#, C++, C, Typescript
              </span>
            </li>
          </ol>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default Home