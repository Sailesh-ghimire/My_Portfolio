import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export const Navbar = (props) => {

    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);


    return (
        <div className="text-white navbar w-full h-24 bg-emerald-600" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton w-full  flex items-center justify-end">
                <button className=' mr-5 bg-transparent border-none  cursor-pointer'
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon className=' text-5xl' />
                </button>
            </div>
            <div className='flex '>
                <div className="links  w-full  flex items-center justify-center  ">
                    <Link to={"/"} className=' text-2xl m-5 no-underline'>Home</Link>
                    <Link to={"/projects"} className=' text-2xl m-5 no-underline'>Projects</Link>
                    <Link to={"/experience"} className=' text-2xl m-5 no-underline'>Experience</Link>

                </div>
                <div className='  items-center justify-end flex w-60 '>
                    <FormGroup>
                        <FormControlLabel control={<Switch onClick={props.toggleMode} defaultUnChecked />} label="Dark Mode" />
                    </FormGroup>

                </div>
            </div>

        </div>
    )
}

export default Navbar