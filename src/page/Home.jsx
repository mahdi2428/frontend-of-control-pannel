import React from 'react'
import TemporaryDrawer from '../component/TemproryComponent'
import { Navbar } from '../component/Navbar'
import { AuthProvider } from '../context/AuthContext'
import Header from '../component/Header'
import { Shoppage } from '../shop/Shoppage'
import Slider from '../component/Slider'
import Card from '../component/Card'

export default function Home() {
  return (
    <div >
      <AuthProvider>
        <Navbar/>
      </AuthProvider>
      <div>
        <Slider/>
      </div>
      <div className='xl:mx-14 '>
        <Header/>
      </div>
      <div>
        <Shoppage/>
      </div>
      <div className='xl:mx-14'>
        <Card/>
      </div>
    </div>
  )
}
