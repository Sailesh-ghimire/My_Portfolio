import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <InstagramIcon />
                <LinkedInIcon />
                <GitHubIcon />
            </div>
            <p>&copy; 2022 sailesh.com</p>
        </div>
    )
}

export default Footer