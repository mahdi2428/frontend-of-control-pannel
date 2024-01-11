import React from 'react'
import image  from '../static/images/2.jpg'

function Checkyouremail() {
  return (
    <div style={{backgroundImage: `url(${image})`}}>
       <div className='min-h-screen flex flex-col justify-center items-center focus:ring-0'>
            <p className='text-3xl mb-5 text-gray-300 font-extrabold'>Url has sent to your email</p>
        </div>
    </div>
  )
}

export default Checkyouremail