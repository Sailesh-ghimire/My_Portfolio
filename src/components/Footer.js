import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return (
        <div className='footer w-full h-52 bg-slate-600 flex justify-center items-center flex-col pt-3 mt-52'>
            <div>
                <InstagramIcon className=' sm:text-5xl mt-5 text-7xl cursor-pointer'/>
                <LinkedInIcon  className=' sm:text-5xl mt-5 text-7xl cursor-pointer'/>
                <GitHubIcon    className=' sm:text-5xl mt-5 text-7xl cursor-pointer'/>
            </div>
            <p className='text-white'>&copy; 2022 sailesh.com</p>
        </div>
    )
}

export default Footer