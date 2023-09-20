import React, {  useState } from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Link } from 'react-scroll';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import  Logo  from "../assets/sg-low-resolution-logo-color-on-transparent-background (1).png";

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

    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-emerald-600 text-white '>
      <div className=' my-1 h-fit w-36 cursor-pointer '  >
    
      <img className=' w-full object-cover h-full '  src={Logo} alt='Logo '  />
      
    </div>
    

    {/* menu */}
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
                       <FormControlLabel  control={<Switch onClick={props.toggleMode} defaultUnChecked />} label='DarkMode' size="small" />
                   </FormGroup>
                   </li>  
    </ul>

    {/* Hamburger */}
    <div onClick={handleClick} className='md:hidden z-10'>
      {!nav ? <ReorderIcon /> : <CloseOutlinedIcon />}
    </div>

    {/* Mobile menu */}
    <ul
      className={
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen  flex flex-col justify-center items-center bg-emerald-600'
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
        <li >
      <FormGroup className='flex items-center '>
                       <FormControlLabel   control={<Switch onClick={props.toggleMode} defaultUnChecked />} label="Dark Mode"  size="small" />
                   </FormGroup>
                   </li>  
      
    </ul>

    
  </div>

    )
}

export default Navbar