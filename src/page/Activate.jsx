import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import image  from '../static/images/2.jpg'


function Activate() {
    let {Registerconfirm} = useAuth()
    let {loading} = useAuth()
    const params = useParams()

    useEffect(()=>{
        const uid = params.uid
        const token = params.token
        Registerconfirm(uid , token)
        console.log(uid);
    } , [])
  return (
    <div style={{backgroundImage: `url(${image})`}}>
       <div className='min-h-screen flex flex-col justify-center items-center focus:ring-0'>
            {loading ? <p className='text-center text-3xl text-white'>Loading...</p> : 
            <p className='text-center text-3xl text-white'>Your account successfully verified</p>
            }
        </div>
    </div>
  )
}

export default Activate