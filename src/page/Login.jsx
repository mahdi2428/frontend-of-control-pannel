import React,{useState} from 'react'
import { useAuth } from '../context/AuthContext'
import './login.css'
import { Link } from 'react-router-dom'
import image  from '../static/images/2.jpg'
import { useNavigate } from 'react-router-dom'

let k1 = 0
let k = 0
export default function Login() {
  let {loading} = useAuth()
  let {LoginUser} = useAuth()
  let{token} = useAuth()

  const navigate = useNavigate()
  const [namechanger , setNamechanger]= useState(false)
  const [placeholder ,setPlaceholder ] = useState(false)
  const [putplaceholder , setPutplaceholer] = useState('Enter your name')
  const [putplaceholder1 , setPutplaceholer1] = useState('Enter your password')
  const [putplaceholder2 , setPutplaceholer2] = useState('Log in')
  const [putplaceholder3 , setPutplaceholer3] = useState('Forgot your password?')
  const [putplaceholder4 , setPutplaceholer4] = useState('if you have not register yet:')
  const [putplaceholder5 , setPutplaceholer5] = useState('Register Now')
  const [putplaceholder6 , setPutplaceholer6] = useState('Log in')
  const [justifyContent, setJustifyContent] = useState('flex');
  


  const placeholderchanger = () =>{
      let i = 0
      setPlaceholder(!placeholder);
      setPutplaceholer(placeholder ? 'Enter your name' : 'اسم خود را وارد کنید')
      setPutplaceholer1(placeholder ? 'Enter your password' : 'رمز خود را وارد کنید')
      setPutplaceholer2(placeholder ? 'Log in ' : 'وارد شوید')
      setPutplaceholer3(placeholder ? 'Forgot your passworld? ' : ' رمز خود را فراموش کردید؟')
      setPutplaceholer4(placeholder ? 'if you have not register yet:' : 'اگر ثبت نام نکردید')
      setPutplaceholer5(placeholder ? 'Register Now' : 'ثبت نام کنید')
      setPutplaceholer6(placeholder ? 'Log in ' : 'وارد شوید')
      setNamechanger(!namechanger);
  
      if(k==0){
      for( i=0; i<2 ; i++){
          document.querySelectorAll(".input")[i].style.textAlign='right'
      }}
      if(k==1){
          for( i=0; i<2 ; i++){
              document.querySelectorAll(".input")[i].style.textAlign='left'
              }
          }
          
        k++
      if(k==2){
          k=0
        }
        if (k === 0) {
          setJustifyContent({justifyContent :'flex-start'});
        } else if (k === 1) {
          setJustifyContent({justifyContent :'flex-start'});
        }


  }
  return (
    <div style={{backgroundImage: `url(${image})`}}>
      <div className='flex'>
      {/* <button className=' border-violet-200 m-3 py-1 px-2 bg-gray-200 rounded-xl shadow-xl 
        hover:bg-blue-600 hover:text-white hover:shadow-lg transition ease-in-out  bg-blue-500 hover:-translate-y-1  duration-300 font-medium' onClick={placeholderchanger}>{namechanger ? 'English':'فارسی'}</button> */}
      </div>
    <div className='min-h-screen flex flex-col justify-center items-center focus:ring-0'>
      <p className='text-3xl mb-5 text-gray-300 font-extrabold'>{putplaceholder2}</p>
        {loading ? <p className='text-center text-3xl text-white'>Loading...</p> : 
         <form className='w-full lg:w-1/3 xl:w-1/4 flex flex-col justify-center	 border border-violet-200 p-4 shadow bg-gray-100 rounded-xl bg-transparent h-80 focus:ring-0 backdrop-blur-md ' onSubmit={LoginUser}>

            <i className="bi bi-person text-xl text-gray-300 "></i>
            
            <input className='input hover:-translate-y-1 h-7 duration-300 mb-3 ease-in-out rounded' type='text'  name='username' placeholder= {putplaceholder}/>
            
            <i className="bi bi-key text-xl text-gray-300 pt-2"></i>
            
            <input className='input hover:-translate-y-1 h-7 duration-300 ease-in-out rounded mt-1' type='password' name='password' placeholder={putplaceholder1}/>
           
            <div className='my-2'>
              <div >
                <p onClick={()=>navigate('/password_reset' , {replace : true}) } style={{ setJustifyContent }} className='mt-3 flex font-bold text-gray-300  transition ease-in-out hover:text-white hover:underline hover:-translate-y-1  duration-300 changer' ><Link >{putplaceholder3}</Link></p> 
              </div>
              <p  className='mt-1 text-sm text-gray-300 flex justify-start  transition ease-in-out ' >{putplaceholder4} </p>
              <div className='text-gray-300 hover:text-white underline hover:-translate-y-1 duration-300  font-semibold ' onClick={()=>{navigate('/register')}}>
                <Link  >{putplaceholder5}</Link>
              </div>
              <button className='font-thin rounded-2xl w-full mt-5 py-1 shadow border-gray-400 bg-white hover:bg-blue-600 hover:text-white hover:shadow-lg transition ease-in-out  bg-blue-500 hover:-translate-y-1  duration-300 font-medium	'  type='submit' >{putplaceholder6}</button>
            </div>
        </form>
        }
       
    </div>
    </div>
  )
}
