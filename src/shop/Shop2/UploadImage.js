import React from 'react'
import { useAuth } from '../../context/AuthContext'
import { useState } from 'react'
function UploadImage() {
    let {create_product} = useAuth()
    const [data , setdata] = useState("")
    console.log(data);
    // const onSubmited = (e)=>{
    //     create_product(data)
    // }
  return (
    <div>
        <form onSubmit={create_product}>
            <input type='file' name = 'img' onChange={(e)=>setdata(e.target.files[0])}/>
            <button type='submit'>submit</button>
        </form>

    </div>
  )
}

export default UploadImage