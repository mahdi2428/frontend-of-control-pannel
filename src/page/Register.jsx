import React,{useState} from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import image from '../static/images/2.jpg'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

let k = 0
export default function Register() {
  

  let {Register} = useAuth()
  let {loading} = useAuth()

  const [namechanger , setNamechanger]= useState(false)
  const [placeholder ,setPlaceholder ] = useState(false)
  const [putplaceholder , setPutplaceholer] = useState('Enter your username')
  const [putplaceholder1 , setPutplaceholer1] = useState('Enter your email')
  const [putplaceholder2 , setPutplaceholer2] = useState('Enter frist name')
  const [putplaceholder3 , setPutplaceholer3] = useState('Forgot your lastname')
  const [putplaceholder4 , setPutplaceholer4] = useState('Enter your password')
  const [putplaceholder5 , setPutplaceholer5] = useState('Confrim your password')
  const [putplaceholder6 , setPutplaceholer6] = useState('sign up ')
  const [putplaceholder7 , setPutplaceholer7] = useState('Register')
  const [putplaceholder8 , setPutplaceholer8] = useState('Welcome')

  const placeholderchanger1=()=>{
  let i = 0
  setPlaceholder(!placeholder);
  setPutplaceholer(placeholder ? 'Enter your username' : 'نام کاربری خود را وارد کنید')
  setPutplaceholer1(placeholder ? 'Enter your email' : 'ایمیل خود را وارد کنید')
  setPutplaceholer2(placeholder ? 'Enter frist name ' : 'اسم خود را وارد کنید ')
  setPutplaceholer3(placeholder ? 'Forgot your lastname ' : 'فامیل خود را وارد کنید')
  setPutplaceholer4(placeholder ? 'Enter your password' : 'رمز خودرا وارد کنید')
  setPutplaceholer5(placeholder ? 'Confrim your password' : 'رمز خود را تایید کنید')
  setPutplaceholer6(placeholder ? 'sign up ' : 'عضو شوید')
  setPutplaceholer7(placeholder ? 'Rigister' : 'ثبت نام')
  setPutplaceholer8(placeholder ? 'Welcome' : 'خوش امدید') 
  setNamechanger(!namechanger);

  if(k==0){
  for( i=0; i<6 ; i++){
      document.querySelectorAll('.input1')[i].style.textAlign='right'
  }}
  if(k==1){
      for( i=0; i<6 ; i++){
        document.querySelectorAll('.input1')[i].style.textAlign='left'
          }
      }
      
    k++
  if(k==2){
      k=0
    }
  }
  return (
    <>
    <div style={{backgroundImage:`url(${image})`}}>

    <div className='flex'>
        {/* <button className=' border-violet-200 m-3 py-1 px-2 bg-gray-200 rounded-xl shadow-xl 
        hover:bg-blue-600 hover:text-white hover:shadow-lg transition ease-in-out  bg-blue-500 hover:-translate-y-1  duration-300 font-medium' onClick={placeholderchanger1}>{namechanger ? 'English':'فارسی'}</button> */}
    </div>

    <div className='min-h-screen flex flex-col justify-center items-center focus:ring-0'>
     <p className='text-3xl mb-4 text-gray-300 font-extrabold'>{putplaceholder7}</p>
      {loading ? <h1 className='text-3xl'>Loading ... </h1> :
      
          <form className=' w-11/12 flex flex-col items-center border border-violet-200 py-8 p-4 shadow bg-gray-100 rounded-xl bg-transparent  focus:ring-0 backdrop-blur-md  lg:w-1/3' onSubmit={Register}>
            
            <p className='flex justify-center mb-4 text-gray-300 font-bold text-2xl'>{putplaceholder8}</p>
            
            <input className='h-8 rounded w-80' type='text'  name='username' placeholder={putplaceholder}/>
                    
            <input className='h-8 mt-6 w-80 rounded' type='email' name='email' placeholder={putplaceholder1}/>

            <input className='w-80 h-8 mt-6 rounded' type='password' name='password' placeholder={putplaceholder4}/>

            <input className='w-80 h-8 mt-6 rounded' type='password' name='re_password' placeholder={putplaceholder5}/>

            <div className='flex justify-center mb-4 '>
              <button className='justify-center font-thin rounded-2xl mt-14 py-1 shadow border-gray-400 bg-white hover:bg-blue-600 hover:text-white hover:shadow-lg transition ease-in-out  bg-blue-500 hover:-translate-y-1  duration-300 font-medium	w-40'  type='submit' >{putplaceholder6}</button>
            </div>

        </form>
      }
        

    </div>
    </div>
    </>
  )
}
