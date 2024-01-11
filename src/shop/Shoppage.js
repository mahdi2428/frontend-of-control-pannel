import React from 'react'
import image1 from '../static/images/2.jpg'
import { useAuth } from '../context/AuthContext'
import { PRODUCTS } from './Product'

export const Shoppage = () => {
    let {Addtocard} = useAuth()
    let {DataShop} = useAuth()
  return (
    
    <div className='flex '>
        {DataShop && DataShop.map((product)=>{
            {return <div>
                <div className='item-1 mr-2'>
                    <div>
                        <img src={image1} className='rounded' alt=''/>  
                        <h2 className='text-xl'>{product.name}</h2>
                        <p> {product.descriptions}</p>
                        <p>{product.price}</p>
                        <button  onClick={()=>Addtocard(product.id)} className='button-shop text-indigo-100 rounded bg-neutral-500 w-full duration-300 hover:scale-105'>Add</button>
                    </div>
                </div>
            </div>
            }   
        })}
        
    </div>
  )
}
