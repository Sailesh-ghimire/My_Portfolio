import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import emailjs from '@emailjs/browser';


import { useRef,useState } from "react";

export const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    // const theme = useContext(ThemeContext);
    // const darkMode = theme.state.darkMode;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(
        'service_bks8m4a',
        'template_0qw2fb8',
        formRef.current,
        '0n2-I0JhB86jiE0MJ'
        )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    };
  
    return (
      <div className="c h-full relative">
        <div className="c-bg w-5 h-full bg-red-600 absolute"></div>
        <div className="c-wrapper p-12 flex">
          <div className="c-left flex-1">
            <h1 className="c-title  text-6xl w-4/5">Let's discuss your project</h1>
            <div className="c-info ">
              <div className="c-info-item   flex items-center my-12 mx-0 font-light w-9/12">
                <img src={GitHubIcon} alt="" className="c-icon w-8 h-8 mr-5" />
                +977 9861292234
              </div>
              <div className="c-info-item  flex items-center my-12 mx-0 font-light w-9/12">
                <img className="c-icon w-8 h-8 mr-5" src={GitHubIcon} alt="" />
                contact@sailesh.dev
              </div>
              <div className="c-info-item  flex items-center my-12 mx-0 font-light w-9/12">
                <img className="c-icon w-8 h-8 mr-5" src={GitHubIcon} alt="" />
                Tikathali-5, Lalitpur
              </div>
            </div>
          </div>
          <div className="c-right flex-1 flex flex-col items-center justify-center">
            <p className="c-desc  font-extralight">
              <b>What's your story?</b> Get in touch. Always available for
              freelancing if the right project comes along. me.
            </p>
            <form className=' mt-5 ' ref={formRef} onSubmit={handleSubmit}>
              <input className='  w-1/2 h-12 border-none border-b border-black my-2 mx-0 text-sm pl-2' type="text" placeholder="Name" name="user_name" />
              <input className='  w-1/2 h-12 border-none border-b border-black my-2 mx-0 text-sm pl-2' type="text" placeholder="Subject" name="user_subject" />
              <input className='  w-1/2 h-12 border-none border-b border-black my-2 mx-0 text-sm pl-2' type="text" placeholder="Email" name="user_email" />
              <textarea className=' w-full mx-2 my-2 text-sm pl-2'  rows="5" placeholder="Message" name="message" />
              <button className='  border-none p-4 bg-emerald-600 text-white font-medium cursor-pointer'>Submit</button>
              {done && "Thank you..."}
            </form>
          </div>
        </div>
      </div>
  )
}

export default Contact