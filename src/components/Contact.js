import React from 'react'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';


import { useRef, useState } from "react";



export const Contact = (props) => {
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
    <div name='contact' className=" h-screen w-full pt-10 "style={{backgroundColor: props.mode==='dark'?'rgb(30 41 59)':'white', color:props.mode==='dark'?'#E0E0E0':'black'}}>
      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div className="c-wrapper p-12 flex">
        <div className="c-left flex-1">
          <h1 className="c-title  text-6xl w-4/5">Let's Connect!!</h1>
          <div className="c-info ">
            <div className="c-info-item   flex items-center my-12 mx-0 font-normal w-9/12">
              <PhoneOutlinedIcon />
              +977 9861292234
            </div>
            <div className="c-info-item  flex items-center my-12 mx-0 font-normal w-9/12">
              <EmailOutlinedIcon />
              saileshghimire.sg@gmail.com
            </div>
            <div className="c-info-item  flex items-center my-12 mx-0 font-normal w-9/12">
              <HomeOutlinedIcon />
              Tikathali-5, Lalitpur
            </div>
          </div>
        </div>
        <div className="c-right flex-1 flex flex-col items-center justify-center">
          <p className="c-desc  font-extralight">
          <b>Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out using the form below. </b>
          
          </p>
          <form className=' mt-5 w-full'  ref={formRef} onSubmit={handleSubmit}  >
            {/* <input style={{backgroundColor: props.mode==='dark'?'black':'white', color:props.mode==='dark'?'white':'black'}}  className='  w-1/2 h-12 border-b border-black my-2 mx-0 text-sm pl-2' type="text" placeholder="Name" name="user_name" /> */}
            


            {/* <input className='  w-1/2 h-12  border-b border-black my-2 mx-0 text-sm pl-2' type="text" placeholder="Subject" name="user_subject" /> */}
            {/* <input className='  w-1/2 h-12 border-2 border-black my-2 mx-0 text-sm pl-2' type="text" placeholder="Email" name="user_email" /> */}
            <div className=' flex flex-1 flex-col'>
            <span className=' my-2 w-full'>
            <TextField style={{backgroundColor: props.mode==='dark'?'#e0e0e0':'white', color:props.mode==='dark'?'dark':'black'}} id="outlined-basic" label="Name" variant="outlined"name="user_name" className=' w-full rounded-md'  />
            </span>
            <span className=' my-2 w-full'>
            <TextField style={{backgroundColor: props.mode==='dark'?'#e0e0e0':'white', color:props.mode==='dark'?'dark':'black'}} id="outlined-basic" label="Subject" variant="outlined"name="user_subject" className=' w-full rounded-md' />
            </span>
            <span className=' my-2 w-full'>
            <TextField style={{backgroundColor: props.mode==='dark'?'#e0e0e0':'white', color:props.mode==='dark'?'dark':'black'}} id="outlined-basic" label="Email" variant="outlined" name="user_email" className=' w-full rounded-md' />
            </span>
            </div>
            <textarea style={{backgroundColor: props.mode==='dark'?'#e0e0e0':'white', color:props.mode==='dark'?'dark':'black'}} className=' w-full border-solid rounded-md border-2  my-2 text-base pl-2' rows="5" placeholder="Message" name="message" />
            <button className=' group  border-2 px-6 py-3 my-2 rounded-full flex items-center hover:bg-emerald-600 hover:border-emerald-600 '>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
        
      </div>
      </div>
      

    </div>



  )
}

export default Contact