import React, { useState } from 'react'
import image  from '../static/images/2.jpg'
import { useAuth } from '../context/AuthContext'
import { useParams } from 'react-router-dom';

function Reset_password_confirmation() {
    const [newpassword , setnewpassword] = useState({
        new_password : '' , 
        re_new_password : ''
    })
    const params = useParams()
    let {Reset_password_confirm} = useAuth()
    let {loading} =useAuth()
    const {new_password , re_new_password} = newpassword


    const onchange =(e) =>setnewpassword({...newpassword , [e.target.name] : e.target.value})


    const onsubmit = (e) =>{
        const uid = params.uid
        const token = params.token
        e.preventDefault()
        Reset_password_confirm(uid , token , new_password , re_new_password)
    }
    
  return (
        <div style={{backgroundImage: `url(${image})`}}>
        <div className='min-h-screen flex flex-col justify-center items-center focus:ring-0'>
                <p className='text-3xl mb-5 text-gray-300 font-extrabold'>Reset Password Confirmation</p>
                {loading ? <p className='text-center text-3xl text-white'>Loading...</p> :
                <form onSubmit={(e)=>onsubmit(e)} className='w-full lg:w-1/3 xl:w-1/4 flex flex-col justify-center	 border border-violet-200 p-4 shadow bg-gray-100 rounded-xl bg-transparent h-80 focus:ring-0 backdrop-blur-md '>
                    <input onChange={(e)=>onchange(e)} className='input hover:-translate-y-1 h-7 duration-300 mb-3 ease-in-out rounded' type='password'  name='new_password' placeholder= 'Enter your new password'/>
                    <input onChange={(e)=>onchange(e)} className='input hover:-translate-y-1 h-7 duration-300 mb-3 ease-in-out rounded' type='password'  name='re_new_password' placeholder= 'Enter your password again'/>
                    <button className='font-thin rounded-2xl w-full mt-5 py-1 shadow border-gray-400 bg-white hover:bg-blue-600 hover:text-white hover:shadow-lg transition ease-in-out  bg-blue-500 hover:-translate-y-1  duration-300 font-medium	'  type='submit' >Submit</button>
                </form>
                }
            </div>
        </div>


  )
}

export default Reset_password_confirmation