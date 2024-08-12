import React from 'react';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';

import { useRef, useState } from 'react';

export const Contact = props => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_bks8m4a',
        'template_0qw2fb8',
        formRef.current,
        '0n2-I0JhB86jiE0MJ'
      )
      .then(
        result => {
          console.log(result.text);
          setDone(true);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      name='contact'
      className=' h-screen w-full py-10  '
      style={{
        backgroundColor: props.mode === 'dark' ? 'rgb(30 41 59)' : 'white',
        color: props.mode === 'dark' ? '#E0E0E0' : 'black',
      }}
    >
      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className=' p-12 flex flex-wrap'>
          <div className=' flex-1'>
            <h1 className='  text-6xl w-4/5'>Let's Connect!!</h1>
            <div className=' '>
              <div className='   flex items-center my-12 mx-0 font-normal w-9/12'>
                <PhoneOutlinedIcon />
                +977 9861292234
              </div>
              <div className='  flex items-center my-12 mx-0 font-normal w-9/12'>
                <EmailOutlinedIcon />
                saileshghimire.sg@gmail.com
              </div>
              <div className='  flex items-center my-12 mx-0 font-normal w-9/12'>
                <HomeOutlinedIcon />
                Tikathali-5, Lalitpur
              </div>
            </div>
          </div>
          <div className=' flex-1 flex flex-col items-center justify-center'>
            <p className='  font-extralight'>
              <b>
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, feel free to reach out using the form below.{' '}
              </b>
            </p>
            <form
              className=' mt-5 w-full'
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className=' flex flex-1 flex-col'>
                <span className=' my-2 w-full'>
                  <TextField
                    style={{
                      backgroundColor:
                        props.mode === 'dark' ? '#e0e0e0' : 'white',
                      color: props.mode === 'dark' ? 'dark' : 'black',
                    }}
                    id='outlined-basic'
                    label='Name'
                    variant='outlined'
                    name='user_name'
                    className=' w-full rounded-md'
                  />
                </span>
                <span className=' my-2 w-full'>
                  <TextField
                    style={{
                      backgroundColor:
                        props.mode === 'dark' ? '#e0e0e0' : 'white',
                      color: props.mode === 'dark' ? 'dark' : 'black',
                    }}
                    id='outlined-basic'
                    label='Subject'
                    variant='outlined'
                    name='user_subject'
                    className=' w-full rounded-md'
                  />
                </span>
                <span className=' my-2 w-full'>
                  <TextField
                    style={{
                      backgroundColor:
                        props.mode === 'dark' ? '#e0e0e0' : 'white',
                      color: props.mode === 'dark' ? 'dark' : 'black',
                    }}
                    id='outlined-basic'
                    label='Email'
                    variant='outlined'
                    name='user_email'
                    className=' w-full rounded-md'
                  />
                </span>
              </div>
              <textarea
                style={{
                  backgroundColor: props.mode === 'dark' ? '#e0e0e0' : 'white',
                  color: props.mode === 'dark' ? 'dark' : 'black',
                }}
                className=' w-full border-solid rounded-md border-2  my-2 text-base pl-2'
                rows='5'
                placeholder='Message'
                name='message'
              />
              <button className=' group  border-2 px-6 py-3 my-2 rounded-full flex items-center hover:bg-emerald-800 hover:border-emerald-800 '>
                Submit
              </button>
              {done && 'Thank you...'}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
