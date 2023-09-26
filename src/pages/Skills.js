import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import mongodb from '../assets/mongo.png'
import react from '../assets/react.png'
import github from '../assets/github.png'



const Skills = (props) => {
    return (
        <div>
            <div name='skills' className='w-full h-screen ' style={{ backgroundColor: props.mode === 'dark' ? 'rgb(30 41 59)' : 'white', color: props.mode === 'dark' ? '#E0E0E0' : 'black' }}>
                <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                    <div>
                        <p className='text-4xl font-bold inline border-b-4 border-emerald-800 '>Skills</p>
                        <p className='py-4'> These are the technologies I've worked with</p>
                    </div>

                    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                            <p className='my-4'>HTML</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={css} alt="HTML icon" />
                            <p className='my-4'>CSS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={js} alt="HTML icon" />
                            <p className='my-4'>JAVASCRIPT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={react} alt="HTML icon" />
                            <p className='my-4'>REACT</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={github} alt="HTML icon" />
                            <p className='my-4'>GITHUB</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={node} alt="HTML icon" />
                            <p className='my-4'>NODE JS</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={mongodb} alt="HTML icon" />
                            <p className='my-4'>MONGO DB</p>
                        </div>
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={tailwind} alt="HTML icon" />
                            <p className='my-4'>TAILWIND</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills