import React, { useEffect, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Link } from 'react-scroll';

export const Navbar = (props) => {

    // const [expandNavbar, setExpandNavbar] = useState(false);
    // const location = useLocation();
    // useEffect(() => {
    //     setExpandNavbar(false);
    // }, [location]);


    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
    //     <div className="text-white navbar w-full h-24 bg-emerald-600" id={expandNavbar ? "open" : "close"}>
    //         <div className="toggleButton w-full hidden  flex items-center justify-end">
    //             <button className=' mr-5 bg-transparent border-none  cursor-pointer'
    //                 onClick={() => {
    //                     setExpandNavbar((prev) => !prev);
    //                 }}
    //             >
    //                 <ReorderIcon className=' text-5xl' />
    //             </button>
    //         </div>
    //         <div className='flex '>
    //         <div>
    //             SG
    //     {/* <img src={Logo} alt='Logo Image' style={{ width: '200px' }} /> */}
    //   </div>
    //             <div className="links  w-full  flex items-center justify-center  ">
    //                 <Link to={"/"} className=' text-2xl m-5 no-underline'>Home</Link>
    //                 <Link to={"/projects"} className=' text-2xl m-5 no-underline'>Projects</Link>
    //                 <Link to={"/experience"} className=' text-2xl m-5 no-underline'>Experience</Link>

    //             </div>
    //             <div className='  items-center justify-end flex w-60 '>
    //                 <FormGroup>
    //                     <FormControlLabel control={<Switch onClick={props.toggleMode} defaultUnChecked />} label="Dark Mode" />
    //                 </FormGroup>

    //             </div>
    //         </div>

    //     </div>

    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <div>
      {/* <img src={Logo} alt='Logo Image' style={{ width: '200px' }} /> */}
    logo
    </div>

    {/* menu */}
    <ul className='hidden md:flex'>
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
        <Link to='work' smooth={true} duration={500}>
          Work
        </Link>
      </li>
      <li className=' px-4 cursor-pointer'>
        <Link to='contact' smooth={true} duration={500}>
          Contact
        </Link>
      </li>
    </ul>

    {/* Hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <ReorderIcon /> : <ReorderIcon />}
    </div>

    {/* Mobile menu */}
    <ul
      className={
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
      }
    >
      <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li className='py-6 text-4xl '>
        {' '}
        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
          Skills
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='work' smooth={true} duration={500}>
          Work
        </Link>
      </li>
      <li className='py-6 text-4xl'>
        {' '}
        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
          Contact
        </Link>
      </li>
    </ul>

    
  </div>

    )
}

export default Navbar