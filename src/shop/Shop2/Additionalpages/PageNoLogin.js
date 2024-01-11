import React from 'react'
import { useNavigate } from 'react-router-dom'
function PageNoPermission() {
    const navigate = useNavigate()
  return (
    <div className='justify-center h-96 flex '>
        <div className=' mt-14 flex justify-center flex-col'>
            <p className='text-3xl '><i class="bi bi-emoji-frown"></i> you don't have permission to access this page :(  </p>
           <span className='text-3xl mb-14'>...........................................</span>
          <div className='flex'>
            <i class="bi bi-house-fill text-3xl me-4"></i>
           <button className='w-32 mt-1 bg-slate-700 py-1 px-3 rounded  text-white duration-300 hover:bg-black' onClick={()=>{
            navigate('/')
        }}>Home Page</button>
          </div>
           
        </div> 
        
    </div>
  )
}

export default PageNoPermission