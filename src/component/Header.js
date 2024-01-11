import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import image from '../static/images/1.jpg'
{/* <Link to='/login'>Login</Link>
        <span>   |   </span>
        <Link to='/'>HomePage</Link>
        <span> | </span>
<Link to='register'>Register</Link> */}
export default function Header
() {
  return (
    <>
    <div className="opacity-1 container mx-auto p-4">
        <div className="flex flex-col md:flex-row-reverse justify-center content-center">
            <div className='relative !h-96 !w-full md:w-1/2 h-full'>
                <div className="absolute !w-full z-20 duration-500 back-img h-full bg-cover bg-center"></div>
                {/* <div className='absolute !w-full z-10 h-full back-image-rotate md:!rotate-0'></div>
                <div className='absolute !w-full z-0 h-full back-image-rotate !rotate-12 md:!rotate-0'></div> */}
            </div>
            
            <div className='!w-full mt-14 md:mt-0 md:w-1/2'>
                <div className=" flex flex-col justify-center  ">
                    <div>
                        <h1 className="text-4xl font-bold">ProHome</h1>
                        <p className="ms-5 mt-3 text-2xl">
                            Home of programers 
                        </p>
                        <p className='text-2xl ms-10'>Home of Professional</p>
                        <br/>
                        <p>You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:w-full to apply the w-full utility at only medium screen sizes and above</p> 
                    </div>
                    <div>
                        <p>Tesla was incorporated in July 2003 by Martin Eberhard and Marc Tarpenning as Tesla Motors. The company's name is a tribute to inventor and electrical engineer Nikola Tesla. </p>
                    </div>
                    <div className="text-center mt-10">
                        <button className="w-5/6 bg-yellow-500 rounded-full bg-yellow-500 border text-xl">next</button>
                    </div>
                </div>  
            </div>
            
        </div>
    </div>
</>
  )
}
