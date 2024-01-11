import { common } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Jsonplaceholder() {
    const [id , setid] = useState('')
    
    const [loading , setloading] = useState(false)
    
    useEffect(()=>{
        console.log("useEffect start");
        setloading(true)
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(data => { 
            setid(data.data)
            setloading(false)
            })
        .catch(error => console.log(error))
    },[])

  return (
    <>
        <div>
            {loading && <h2>Loading...</h2>}
            {id &&
                id.map((comment)=>(
                    <div key={comment.id}>
                        {comment.name}
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Jsonplaceholder