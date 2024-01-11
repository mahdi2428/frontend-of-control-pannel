import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../../context/AuthContext'
function SearchBase({data}) {
    // let {detail_product} = useAuth()
    let {loading} = useAuth()
    let {result} = useAuth()
    let {search_product} = useAuth()
    const navigate = useNavigate()
    const open1 =[]
    const [open , setopen] = useState({})
    const [search , setsearch] = useState('')
    const [test , settest] = useState(false)
    const [searchopen , setsearchopen] = useState(false)
    // if (data){
    //     data.map((product)=>{
    //         var name = product.name
    //         open1.push(name = true)
    //     })
    // }
    const handleopen_one = (name)=>{
        setopen(name)
        
    }

    const searching = (e)=>{
        e.preventDefault();
        setsearchopen(true)
        search_product(search)
    }
  return (
    <div className='flex items-center relative bg-white justify-center '>
        <div className='border-2 w-full border-slate-800 rounded-lg  h-96 overflow-auto scrollbar-none'>
            <div className='p-2 flex'>
                <input onChange={(e)=>{setsearch(e.target.value)}} className='w-full text-xl p-2 h-11 rounded-lg font-medium border-2 ' type='search' placeholder='Write AnyThing . . .'/>
                <button onClick={(e)=>{
                    e.preventDefault();
                    searching(e)
                    // window.location.reload(false)
                }} 
                className='text-xl mb-1 font-medium bg-slate-700 py-2 px-3 rounded-lg bg text-white duration-300 hover:bg-black'>Search</button>
            </div >
            
            <div  className={searchopen ? 'p-4 cursor-pointer pt-1 pb-3 relative duration-500 w-full ' : 'cursor-pointer p-4 pt-1 pb-3 w-3/12 absolute duration-500  opacity-0'}>
                {result && 
                    // <button  className='bg-gray-100  h-3 w-3'>*</button>
                    <i onClick={()=>{
                        setsearchopen(false)
                        
                    }} class="bi absolute top-0 bi-x"></i>
                }
                
                {loading ? <p className='text-center text-xl'>Loading</p> :
                
                    <>
                    {result && result.name ? 
                        <div>
                    <div className='shadow-xl'>
                        <div onClick={()=>{
                            handleopen_one(result && result.name)
                          
                            }} className='flex p-2 items-center border-red-900 rounded-lg  border-2 justify-between h-13 '>
                            <p className='text-xl  font-medium'>{result && result.name}</p>
                            <p className='text-xl  font-medium'>{result && result.price}</p>
                            <p className='text-xl  font-medium'>{result && result.ram_amount}</p>
                        </div> 
                    </div>
                    <div className={result && result.name == open ? "h-16 relative duration-300 opacity-100" : 'duration-300 opacity-0 h-0'}>
                            {result && result.name == open && <div className='p-2 pt-0'>
                                <p>Do you want to change this data? </p>
                                <div className='text-right'>
                                    <button onClick={()=>{
                                        navigate(`/control_panel/change_page/${result && result.id} `)
                                        window.location.reload()
                                        // detail_product(product.id)
                                        }} className=' mt-1 bg-slate-700 py-1 px-3 rounded bg text-white duration-300 hover:bg-black'>Change</button>
                                </div>
                                </div>
                            }</div>
                        </div>
                    :<div className='text-xl h-7 text-center overflow-auto'>data not found</div>}
                    
                    </>
                }
                
            </div>
            
            {data ? 
            data.map((product)=>(
                <div id='product_field' key={product.id} className={searchopen ? 'p-4 pt-1 pb-1 relative duration-700 top-7' : 'relative p-4 pt-1 pb-1 duration-700 top-0'}>
                <div  className={product.name == open ? 'border-2 cursor-pointer rounded-lg border-red-200 group border-t-0':'group cursor-pointer hover:scale-105 duration-300'}>
                    <div onClick={()=>handleopen_one(product.name)} className='flex p-2 items-center border-red-400 rounded-lg  border-2 justify-between h-10 '>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>{product.ram_amount}</p>
                    </div>
                    <div className={product.name == open ? "h-16 duration-300 opacity-100" : 'duration-300 opacity-0 h-0'}>
                    {product.name == open && <div className='p-2 pt-0'>
                        <p>Do you want to change this data? </p>
                        <div className='text-right'>
                            <button onClick={()=>{
                                navigate(`/control_panel/change_page/${product.id} `)
                                window.location.reload()
                                // detail_product(product.id)
                                }} className=' mt-1 bg-slate-700 py-1 px-3 rounded bg text-white duration-300 hover:bg-black'>Change</button>
                        </div>
                        </div>
                     }</div>
                </div>
                </div>  

            ))
            :<>Loading ... </>}
            
            {/* <div className='p-4'>
                <div  className={open ? 'border-2 rounded-lg border-red-200 group border-t-0':'group'}>
                    <div onClick={handleopen_one} className='flex p-2 items-center border-red-400 rounded-lg  border-2 justify-between h-10 '>
                        <p>name</p>
                        <p>price</p>
                        <p>ram_amount</p>
                    </div>
                    <div className={open ? "h-16 duration-300 opacity-100" : 'duration-300 opacity-0 h-0'}>
                    {open && <div className='p-2 pt-0'>
                        <p>Do you want to change this data? </p>
                        <div className='text-right'>
                            <button onClick={()=>navigate('change_page/' )} className=' mt-1 bg-slate-700 py-1 px-3 rounded bg text-white duration-300 hover:bg-black'>Change</button>
                        </div>
                        </div>
                     }</div>
                </div> */}
                
                {/* <div className='flex mt-2 h-10 p-2 items-center rounded-lg justify-between border-2 border-red-400'>
                    <p>name</p>
                    <p>price</p>
                    <p>ram_amount</p>
                </div>
                <div className='flex mt-2 h-10 p-2 items-center rounded-lg justify-between border-2 border-red-400'>
                    <p>name</p>
                    <p>price</p>
                    <p>ram_amount</p>
                </div>
                <div className='flex mt-2 h-10 p-2 items-center rounded-lg justify-between border-2 border-red-400'>
                    <p>name</p>
                    <p>price</p>
                    <p>ram_amount</p>
                </div>
                <div className='flex mt-2 h-10 p-2 items-center rounded-lg justify-between border-2 border-red-400'>
                    <p>name</p>
                    <p>price</p>
                    <p>ram_amount</p>
                </div>
                <div className='flex mt-2 h-10 p-2 items-center rounded-lg justify-between border-2 border-red-400'>
                    <p>name</p>
                    <p>price</p>
                    <p>ram_amount</p>
                </div>
                <div className='flex mt-2 h-10 p-2 items-center rounded-lg justify-between border-2 border-red-400'>
                    <p>name</p>
                    <p>price</p>
                    <p>ram_amount</p>
                </div> */}
            {/* </div> */}
        </div>
    </div>
  )
}

export default SearchBase