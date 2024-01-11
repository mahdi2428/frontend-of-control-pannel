import React, { useState }  from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export default function HomePage() {
  let {user} = useAuth()
  let {logout} = useAuth()
  // function logout(e){
  //   e.preventDefault()
    
  //   console.log(user)
  // }
  // console.log(user)
  return (
    <>

      <div>HomePage</div>
      {user && <h2>Hello {user.username}</h2>}
      {user && <button ><Link onClick={logout} to='/login'>Logout</Link></button>}
    </>
  )
}
