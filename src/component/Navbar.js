import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {
    const [item , setitem] = useState('')
    const navigate = useNavigate()


    let {user} = useAuth()
    let{logout} = useAuth()
    let {nav} = useAuth()
    const navhandeler = (e)=>{
        const navbar_user = document.querySelector('#navbar-user')
        navbar_user.classList.toggle('!top-[8%]')
        const navbar1 = document.querySelectorAll('.nav-item')
        setitem(true)
        navbar1.forEach(element => {
            element.classList.toggle('!left-0')
            element.classList.toggle('opacity-100')
            element.classList.toggle('transform-rotate')
        });
    }



    // let useClickOutside=(handler)=>{
    //     let click  = useRef();
    
    //     useEffect(()=>{
    //         let handler1= (event) =>{
    //             if(!click.current.contains(event.target)){
    //                 handler();
    //                 }
    //             };
    //             document.addEventListener("mousedown",handler1 );
    //             return () => {
    //             document.removeEventListener("mousedown",handler1)
    //             }
    //         });
    //         return click
    // };


    // const icon = useClickOutside(()=>{
    //     const navbar_user = document.querySelector('#navbar-user')
    //     navbar_user.classList.toggle('!top-[8%]')
    // })


    const navhandeler2 = () => {
        const navbar_user2 = document.getElementById('user-dropdown')
        if(navbar_user2.classList.replace('hidden','visible')){
        }else{
            navbar_user2.classList.replace('visible','hidden')
        } 
    }
    useEffect(()=>{
        
    })
    
  return (
    <div>
        <nav class=" bg-white border-gray-200 dark:bg-gray-900">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-4 px-14">
        <a  class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ProHome</span>
        </a>
        <div class="flex  items-center md:order-2">
            {user ? (
                <div className='flex'>
                    <button onClick={navhandeler2} type="button" class="flex mr-3 text-sm bg-gray-200 p-1 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span class="sr-only">Open user menu</span>
                        <PersonOutlineIcon/>
                        {/* <img  className="w-8 h-8 rounded-full"  src="" alt="user photo"/> */}
                    </button>
                    {/* <button className='pr-2 test' onClick={logout}></button> */}
                     {nav===true && 
                        <div class="z-50 absolute hidden right-1 top-9 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div class="px-4 py-3">
                            <span class="block text-sm text-gray-900 dark:text-white">{user && user.username}</span>
                            <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{user && user.email}</span>
                        </div>
                        <ul class="py-2 " aria-labelledby="user-menu-button">
                            <li >
                                <a class="block cursor-pointer px-4 py-2 text-sm text-gray-700  hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a onClick={()=>{navigate('/control_panel')}} class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">ControlPanel</a>
                            </li>
                            <li>
                                <a onClick={logout}  class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                    }
                </div>
            ):
            <button className='pr-2 test' onClick={()=>{navigate('/login')}}>
                Login
            </button> 
            }
            
           
            
            {/* <button id='button1' name='navbar' onClick={navhandeler} data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
                
            </button> */}
        </div>
            <div className="z-50 items-center right-0 justify-between top-[-100%] duration-300 w-full display-transition absolute md:relative md:top-0 md:flex md:w-auto md:order-1 " id="navbar-user">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li >
                        <a href="#" class="nav-item block opacity-0 md:opacity-100 delay-150 left-[60px] md:left-0 relative hover:scale-105  py-2 pl-3 pr-4 text-white bg-cyan-500 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="nav-item relative opacity-0 md:opacity-100 block left-[120px] md:left-0 hover:scale-105  py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-cyan-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" class="block nav-item opacity-0 md:opacity-100 relative left-[180px] md:left-0 py-2 pl-3 pr-4  text-gray-900 rounded hover:bg-cyan-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#" class="block nav-item opacity-0 md:opacity-100 relative left-[240px] md:left-0 hover:scale-105 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-cyan-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                    </li>
                    <li>
                        <a href="#" class="block nav-item opacity-0 hover:delay-0 relative left-[300px] md:left-0 hover:scale-105 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-cyan-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
        
        
        </div>
        </nav>
    </div>
  )
}
