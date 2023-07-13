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
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <GitHubIcon/>
                <img src={GitHubIcon} alt="" className="c-icon" />
                +1 1234 556 75
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={GitHubIcon} alt="" />
                contact@lama.dev
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={GitHubIcon} alt="" />
                245 King Street, Touterie Victoria 8520 Australia
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What's your story?</b> Get in touch. Always available for
              freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input  type="text" placeholder="Name" name="user_name" />
              <input  type="text" placeholder="Subject" name="user_subject" />
              <input  type="text" placeholder="Email" name="user_email" />
              <textarea  rows="5" placeholder="Message" name="message" />
              <button>Submit</button>
              {done && "Thank you..."}
            </form>
          </div>
        </div>
      </div>
  )
}

export default Contact