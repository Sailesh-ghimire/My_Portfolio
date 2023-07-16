import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';

export const Navbar = () => {

    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);


    return (
        <div className='navbar w-full h-24 bg-green-400' id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton w-full  flex items-center justify-end">
                <button className=' mr-5 bg-transparent border-none text-white cursor-pointer'
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon className=' text-5xl' />
                </button>
            </div>
            <div className="links w-full  flex items-center justify-center text-white ">
                <Link to={"/"} className=' text-2xl m-5 no-underline'>Home</Link>
                <Link to={"/projects"} className=' text-2xl m-5 no-underline'>Projects</Link>
                <Link to={"/experience"} className=' text-2xl m-5 no-underline'>Experience</Link>
            </div>
        </div>
    )
}

export default Navbar