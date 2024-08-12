import React, { useState } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Link } from 'react-scroll';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Logo from '../assets/sg-low-resolution-logo-color-on-transparent-background (1).png';

export const Navbar = props => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed top-0 left-0 w-full h-[80px] bg-emerald-800 text-white flex justify-between items-center px-4 z-50'>
      <div className=' my-1 h-fit w-36 cursor-pointer '>
        <img className=' w-full object-cover h-full ' src={Logo} alt='Logo ' />
      </div>
      <ul className='hidden md:flex text-center items-center text-lg justify-center'>
        <li className=' px-4 cursor-pointer'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=' px-4 cursor-pointer'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=' px-4 cursor-pointer'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=' px-4 cursor-pointer'>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='px-4 cursor-pointer'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className=' px-4 cursor-pointer'>
          <FormGroup className='flex items-center '>
            <FormControlLabel
              control={<Switch onClick={props.toggleMode} defaultUnChecked />}
              label='DarkMode'
              size='small'
            />
          </FormGroup>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <ReorderIcon /> : <CloseOutlinedIcon />}
      </div>

      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center bg-emerald-800'
        }
      >
        <li className='py-6 text-4xl cursor-pointer'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl cursor-pointer'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li>
          <FormGroup className='flex items-center '>
            <FormControlLabel
              control={<Switch onClick={props.toggleMode} defaultUnChecked />}
              label='Dark Mode'
              size='small'
            />
          </FormGroup>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
