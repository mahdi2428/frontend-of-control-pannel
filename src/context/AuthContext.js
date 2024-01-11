import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from 'jwt-decode'
import { json, useNavigate } from 'react-router-dom'
import { PRODUCTS } from "../shop/Product";
import Cart from "../shop/Cart";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useLocalStorage("user", null);
  // const navigate = useNavigate();
  const [DataShop , setDataShop] = useState()
  const [token , settoken] = useState(null)
  const [user , setuser] = useState(localStorage.getItem('token')? jwt_decode(localStorage.getItem('token')) : null )
  const navigate = useNavigate()
  const [nav , opennav] = useState(true)
  const [loading , setloading] = useState(false)
  const [search , setsearch] = useState()
  const [detaildata , setdetaildata] = useState()
  const [ data1 , setdata1] = useState()
  const [ error , seterror] = useState()
  const [recent , setrecent] = useState()
  const [alluser , setalluser] = useState()
  const [news , setnews] = useState()
  const Monitor = ()=>{
    let cart = {}
    for (let i = 1 ; i<=PRODUCTS.length ; i++){
      cart[i] = 0
    }
    return cart;
  }
  const [count , setcount] = useState(Monitor())

  const address = 'http://127.0.0.1:8000/app/'

  async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    setDataShop(data)
    
}

  useEffect(()=>{
    // getapi(address)
    // let response = fetch('http://127.0.0.1:8000/app/').then((req)=>{
    //   console.log(req.json().then((req)=>{console.log(req);}));
    // })
  }, [ ])

  const Addtocard = (itemid)=>{
    setcount((prev)=>( 
      {...prev ,  [itemid] : prev[itemid] +1 }
    ))
  }


  const Removecard = ()=>{
    setcount(count-1)
  }





  const LoginUser = async (data) => {
    data.preventDefault()
    setloading(true)
    let response =await fetch('http://127.0.0.1:8000/api/token/' , {
      method : 'POST' , 
      headers : {
        'Content-Type' : 'application/json' , 
      } , 
      body:JSON.stringify({'username' : data.target.username.value , 'password' : data.target.password.value})
    })
    let data1 = await response.json()
    console.log(response.status);
    if (response.status === 200){
      setloading(false)
      settoken(data1)
      setuser(jwt_decode(data1.access))
      localStorage.setItem('token' , [JSON.stringify(data1)])
      localStorage.setItem('tokenaccess' , [JSON.stringify(data1.access)])
      navigate('/')
      console.log(token); 
    }
    else {
      setloading(false)
      alert('somthing went wrong')
    }
  };
  
  
  const logout = () => {
    setuser(localStorage.removeItem('token'));
    setuser(localStorage.removeItem('tokenaccess'));
    settoken(null)
    navigate("/", { replace: true });
    opennav(false)
  };


  const Register = async(data)=>{
    data.preventDefault()
    setloading(true)
    console.log(data.target.email.value);
    console.log(data.target.username.value);
    console.log(data.target.password.value);
    console.log(data.target.re_password.value);
    let response = await fetch('http://127.0.0.1:8000/api/authon/users/' , {
      method : 'POST' , 
      headers : {
        'Content-Type' : 'application/json'
      } , 
      body:JSON.stringify({'email' : data.target.email.value , 'username' : data.target.username.value ,  'password' : data.target.password.value , 're_password' : data.target.re_password.value})
    })
    console.log(response.status);
    if (response.status == 201 ){
      setloading(false)
      navigate('/checkyouremail' ,{replace:true})
    }else {
      console.log(response);
      setloading(false)
      alert('your pasword must be atleast 8 character')
    }
  }
  
  const Registerconfirm = async(uid , token)=>{
    setloading(true)
    
    let response = await fetch('http://127.0.0.1:8000/api/authon/users/activation/' , {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json'
      } , 
      body : JSON.stringify({'uid' : uid , 'token' : token})
    })
    console.log(response.status);
    if (response.status == 204 ){
      setloading(false)
      navigate('/login' ,{replace:true})
    }else {
      alert('There is problem with your register')
    }
  }

  const Reset_password = async(data)=>{
    data.preventDefault()
    console.log('hello');
    setloading(true)
    let response = await fetch('http://127.0.0.1:8000/api/authon/users/reset_password/' , {
      method : 'POST' , 
      headers : {
        'Content-Type' : 'application/json'
      } , 
      body : JSON.stringify({'email' : data.target.email.value})
    })
    console.log(response.status);
    
    console.log('hello-2');
    if (response.status == 204 ){
      setloading(false)
      alert('Email sent successfully')
      navigate('/login' ,{replace:true})
    }else {
      setloading(false)
      alert('There is problem with your register')
    }
  }

  const Reset_password_confirm = async(uid , token ,new_password , re_new_password)=>{

    setloading(true)
    let response = await fetch('http://127.0.0.1:8000/api/authon/users/reset_password_confirm/' , {
      method : 'POST' , 
      headers : {
        'Content-Type' : 'application/json'
      } , 
      body : JSON.stringify({'uid' : uid , 'token' : token , 'new_password' : new_password , 're_new_password' : re_new_password})
    })
    
    if (response.status == 204 ){
      setloading(false)
      alert('Password Changed successfully')
      navigate('/login' ,{replace:true})
    }else {
      setloading(false)
      alert('There is problem for this process')
    }
  }




  const create_product = async(data)=>{
    const formdata = new FormData()
    if (data.image){
      formdata.append('image' , data.image , data.image.name ) 
    }
    formdata.append('name' , data.name ) 
    formdata.append('price' , data.price ) 
    formdata.append('color' , data.color ) 
    formdata.append('description' , data.description ) 
    formdata.append('ram_amount' , data.ram_amount ) 
    formdata.append('simcard_support' , data.simcard_support ) 
    formdata.append('os' , data.os ) 
    formdata.append('with_phone' , data.with_phone ) 
    formdata.append('model' , data.model ) 
   
  
    const response = await fetch('http://127.0.0.1:8000/shop/' , {
      method : 'post' , 
      body : formdata
    })
    
    if (response.status == 201 ){
      alert('object created successfully')
    }else {
      alert('There is problem for this process')
    }
  }

 

  const get_product = async()=>{
  
    const response = await fetch(`http://127.0.0.1:8000/listshop/`)
    const data =await response.json()
    if (response.status == 200) {
      // setdetaildata(1)
      // setdata1(1)
      setDataShop(data)
      // console.log(data1);  
      // console.log(DataShop);
    } 
  }


  const search_product = async(result)=>{
    setloading(true)
    const response = await fetch('http://127.0.0.1:8000/search/' , {
      method : 'POST' , 
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({result})
    })
    const data =await response.json()
    // console.log(data);
    if (response.status == 200) {
      setsearch(data)
      setloading(false)
      // console.log(data);
    }
  } 

  
  const product_detail = async(id) => {
    setloading(true)
    const auth_token = localStorage.getItem('tokenaccess')
    const response = await fetch(`http://127.0.0.1:8000/listshop/${id}` , {
      headers : {
        'Authorization' : "Bearer  " + JSON.parse(auth_token)
      }
    })
    const data = await response.json()
    if (response.status == 200 ) {
      setdetaildata(data)
      setloading(false)
      // console.log(data);
    }
    if (response.status == 400) {
      alert('bad request')
    }
    if (response.status == 401) { 
      alert('login required error , make sure you logged in first !!!')
    }
    if (response.status == 403) { 
      alert('you don\'t have permission to change this data !!!')
    }
  } 
  

  const updata_product = async(id , updated_data)=>{
    setrecent(pre => pre , id)
    const auth_token = localStorage.getItem('tokenaccess')
    const response = await fetch(`http://127.0.0.1:8000/listshop/${id}/update` , {
      method : 'PUT',
      headers : {
        'Content-Type' : 'application/json' , 
        'Authorization' : "Bearer  " + JSON.parse(auth_token)
      },
      
      body:JSON.stringify(updated_data),
    })
    const data = await response.json()
    if (response.ok){
      alert('your change successfully submited')
    }else{
      alert('there is problem with changing this item')
    }

  }


  const delete_product = async(id)=>{
    const auth_token = localStorage.getItem('tokenaccess')
    const response = await fetch(`http://127.0.0.1:8000/listshop/${id}/delete` , {
      method : 'DELETE',
      headers : {
        'Authorization' : "Bearer  " + JSON.parse(auth_token)
      }
    })
    if (response.status == 204){
      alert('your change successfully submited')
    }else{
      alert('there is problem with changing this item')
    }
  }


  const do_RecentActivity = async(update , delete_ , create , id)=>{
    const auth_token = localStorage.getItem('tokenaccess')
    const response = await fetch(`http://127.0.0.1:8000/shop/recen_activity` , {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json' , 
        'Authorization' : "Bearer  " + JSON.parse(auth_token)
      },
      body : JSON.stringify({update , 'delete' : delete_ , create , 'user' : id })
    })
  }



  const get_RecentActivity = async(update , delete_ , create , username)=>{
    const auth_token = localStorage.getItem('tokenaccess')
    const response = await fetch(`http://127.0.0.1:8000/shop/recen_activity` , {
      headers : {
        'Authorization' : "Bearer  " + JSON.parse(auth_token)
      }
    })
    const response_data = await response.json()
    if( response.status == 200) {
      setrecent(response_data)
    }
    if(response.status == 403){
      navigate('/nopermission')
    }
  }



  const get_user = async()=>{
    const auth_token = localStorage.getItem('tokenaccess')
    const response = await fetch(`http://127.0.0.1:8000/shop/user` , {
      headers : {
        'Authorization' : "Bearer  " + JSON.parse(auth_token)
      }
    })
    const response_data = await response.json()
    console.log(response.status);
    if(response.status == 200) {
      setalluser(response_data)
    }
  }
  

  const create_news = async(title , description , receiver  , sender) =>{
    const auth_token = localStorage.getItem('tokenaccess')
    // const receiver_ = parseInt(receiver)
    const response = await fetch(`http://127.0.0.1:8000/shop/news` , {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json' ,
        'Authorization' : "Bearer  " + JSON.parse(auth_token) 
      } , 
      body : JSON.stringify({title , description ,receiver , sender })
    })
    const response_data = await response.json()
    console.log(response.status);
    if(response.status == 200) {
      alert('news created')
    }
  }


  const get_news = async() =>{
    const auth_token = localStorage.getItem('tokenaccess')
    // const receiver_ = parseInt(receiver)
    const response = await fetch(`http://127.0.0.1:8000/shop/news` , {
      headers : {
        'Authorization' : "Bearer  " + JSON.parse(auth_token) 
      } , 
    })
    const response_data = await response.json()
    console.log(response.status);
    if(response.status == 200) {
      setnews(response_data)
    }
  }

  const value = {
    get_news:get_news , 
    news , news , 
    create_news:create_news , 
    get_user : get_user , 
    alluser : alluser , 
    get_RecentActivity:get_RecentActivity,
    do_RecentActivity:do_RecentActivity,
    recent : recent , 
    result:search,
    delete_product:delete_product,
    updata_product:updata_product,
    detail_product:product_detail,
    search_product:search_product , 
    get_product : get_product , 
    create_product : create_product ,
    Registerconfirm : Registerconfirm , 
    Reset_password_confirm : Reset_password_confirm , 
    Reset_password : Reset_password , 
    DataShop : DataShop , 
    Addtocard : Addtocard , 
    Removecard : Removecard,
    detail : detaildata,
    count : count , 
    Register : Register , 
    user : user , 
    loading : loading , 
    token : token , 
    LoginUser : LoginUser , 
    logout : logout,
    nav : nav
  }
  return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};