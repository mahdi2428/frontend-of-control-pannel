// Import React and Tailwind
import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import { AuthProvider , useAuth } from "../../context/AuthContext";
// Import React icons
import { FaBars, FaTimes } from "react-icons/fa";
import SearchBase from "./NavComponenet/SearchBase";
import { useNavigate } from "react-router-dom";
// Define the navbar component
const Navbar = () => {
  const navigate = useNavigate()
  let {DataShop} = useAuth()
  let {get_product} = useAuth()
  let {get_news} = useAuth()
  let {news} = useAuth()
  // console.log(DataShop);
  // Define the state for the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [services, setservices] = useState(false);
  const [newsopen , setnewsopen] = useState(false)
  const [newsfield , setnewsfield] = useState(false)
  // const [style , setstyle] = useState('text-yellow-100 text-lg')
  // if (news){
  //   news.map((news)=>{
  //     setmassage(prev => prev + '' + news.id)
  //   })
  // }
  // useEffect(()=>{

  // } , [massage])
  const change_style = (key)=>{
    // const access_element = document.querySelector(`[data-key = '${key}']`)
    // access_element.classList.replace('border-y-yellow-100' , 'g')
  }
  // Define the function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Define the function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [open , setopen] = useState(false)
  const handleopen_one = ()=>{
      get_product()
      setopen(!open)
      // console.log(DataShop);
  }
  // Define the navigation items
  const navItems = ["", "", "", ""];

  // Return the JSX element
  return (
    <>
    <nav className=" top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="container relative mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-bold text-blue-600">
          My ControlPanel
        </a>
        <ul className="flex flex-row  items-center gap-4">
          <li onClick={()=>{navigate('/control_panel')}} className="text-lg font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
            Panel
          </li>
          <li className="text-lg font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
            About
          </li>
          <li onClick={()=>{
            setservices(!services)
          }} className="font-medium text-lg">
            <div className=" text-gray-700 hover:text-blue-600 cursor-pointer">
              Services
            </div>
            

            {services && <div className="absolute bg-slate-600 border-2 border-red-600 top-14 ">
            <ul>
              <li onClick={()=>{navigate('/control_panel/create_page')}} className="border-2  text-white hover:bg-slate-100 hover:text-black duration-300 cursor-pointer p-2 pt-1 pb-1">
                createItem
              </li>
              <li className="border-2 text-white hover:bg-slate-100 hover:text-black duration-300 cursor-pointer p-2 pt-1 pb-1">
                changeItem
              </li>
            </ul>
            </div>}
          </li>
          
          <li className="text-lg font-medium text-gray-700 hover:text-blue-600 cursor-pointer">
            Contact
          </li>
        </ul>
        
        <div className="flex" >
          <div className="me-5 cursor-pointer">
            <div onClick={()=>{
              setnewsopen(!newsopen)
              get_news()
              }} className="text-2xl hover:text-blue-600">
              <i class="bi bi-envelope"></i>
            </div>
            {newsopen && 
              <div className="bg-gray-100  border-2 rounded border-x-red-600 absolute flex flex-col w-80 h-80 right-2 p-1 overflow-auto scrollbar-none">
                {newsfield && <div onClick={()=>{setnewsfield(false)}} className="bg-yellow-100 border-2 rounded"><i  class="bi bi-x-lg me-3"></i><span className="text-lg">close</span></div>}
                <p className="text-center text-2xl text-red-600">News</p>
                <p  className=" text-lg mb-2">see what's your news : </p>

                <div className= "flex flex-col-reverse">
                  {news && news.length>0 ? 
                  news.map((massage)=>(
                    
                    
                    <div key={massage.id} data-key = {massage.id} onClick={()=>{
                      // console.log(massage.id);
                      // change_style(massage.id)
                      setnewsfield(massage.id)
                      }} className={newsfield == massage.id ? 'absolute z-10 rounded-lg h-full w-full left-0 top-7 duration-700 right-0 border-4 bg-gray-700  border-y-yellow-100  items-center  rounded p-2' : "border-4 bg-gray-700 relative  border-y-yellow-100 flex items-center w-full h-[40px] rounded p-2"}>
                      
                      {!newsfield && <p  className='text-yellow-100 text-lg'>{massage.title}</p>}
                      {newsfield == massage.id && 
                      <>
                      <div className="flex flex-col">
                        <p className="text-white me-3">Title : </p>
                        <p  className='text-yellow-100 text-lg'>{massage.title}</p>
                      </div>
                      
                      <div className="flex ">
                        <p className="text-white me-3"> Description : </p>
                      </div>
                      <div className="p-2 ps-6">
                          <p className='text-yellow-100 text-lg'>{massage.description}</p>
                      </div>
                      </>
                      }
                      
                      
                    </div>
                    
                  ))
                  :<p className="text-center text-2xl text-red-500">there is no news for you</p>
                  }
                </div>  
                
              </div>
            }
            
          
          </div>

          <button onClick={()=>{navigate('/')}} className="text-lg me-5 font-medium text-gray-700 hover:text-blue-600 cursor-pointer">HomePage</button>
          <button onClick={handleopen_one} className="text-lg font-medium text-gray-700 hover:text-blue-600 cursor-pointer">Search</button>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-md z-10 transition-all duration-300 ease-in-out">
          <ul>
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={closeMobileMenu}
                className="text-lg font-medium text-gray-700 hover:text-blue-600 cursor-pointer py-4 px-8 border-b border-gray-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
    <div className={open ? "w-full absolute h-full backdrop-blur-sm	duration-500	" : 'duration-500 absolute z-0'}>
      
      <div className={open ? "absolute opacity-100  top-40 w-full z-10 duration-500 flex justify-center" : 'duration-500 opacity-100 absolute bottom-[1000px] w-full'}>
        
          <SearchBase data={DataShop}/>
        
      </div>
      
      
    </div>
    </>
  );
};

// Export the navbar component
export default Navbar;
