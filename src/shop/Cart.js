import React from 'react'
import { useAuth } from '../context/AuthContext'
import { PRODUCTS } from './Product'

export default function Cart() {
    let {count} = useAuth()
    let {DataShop} = useAuth()
  return (
    <div>
        Cart page 
        
        {DataShop && DataShop.map((product)=>{
          if (count[product.id]>0){
            
            return <div>{product.name} , {product.description} , {count[product.id]}</div>
          }
        })}
    </div>
  )
}
