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

        <div className="a">
          <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
              <img
                src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="a-img"
              />
            </div>
          </div>
          <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
              It is a long established fact that a reader will be distracted by the
              readable content.
            </p>
            <p className="a-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
            </p>
            <div className="a-award">
              <img src={Award} alt="" className="a-award-img" />
              <div className="a-award-texts">
                <h4 className="a-award-title">International Design Awards 2021</h4>
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