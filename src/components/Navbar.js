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
        <div className='navbar w-full h-24 bg-red-600' id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton w-full h-24 flex items-center justify-end">
                <button className=' mr-5 bg-transparent border-none text-white cursor-pointer'
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <ReorderIcon className=' text-5xl' />
                </button>
            </div>
            <div className="Links w-full h-full flex items-center justify-center ">
                <Link to={"/"} className='  text-2xl'>Home</Link>
                <Link to={"/projects"} className='  text-2xl'>Projects</Link>
                <Link to={"/experience"} className='  text-2xl'>Experience</Link>
            </div>
        </div>
    )
}

export default Navbar