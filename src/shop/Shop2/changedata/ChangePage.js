import React, { useEffect } from 'react'
import { useState } from 'react';
import Navbar from '../navbar';
import { AuthProvider, useAuth } from '../../../context/AuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Action } from '../redux/Action';


function ChangePage(props) {
  const params = useParams()
  const navigate = useNavigate()
  let {loading} = useAuth()
  let{delete_product}= useAuth()
  let{updata_product} = useAuth()
  let{do_RecentActivity} = useAuth()
  let {detail} = useAuth()

  let{detail_product} = useAuth()
  let {user} = useAuth()
  let{token} = useAuth()
  let{recent} = useAuth()
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(props);
    
    updata_product(params.id , {
      name , 
      price , 
      color , 
      description , 
      ram_amount , 
      simcard_support , 
      os , 
      with_phone , 
      model , 
    })
  } 

  const [name, setName] = useState();
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(""); 
  const [color , setColor] = useState("")
  const [description , setdescription] = useState("")
  const [ram_amount , setram_amount] = useState("")
  const [simcard_support , setsimcard_support] = useState("")
  const [os , setos] = useState("")
  const [with_phone , setwith_phone] =useState("")
  const [model , setModel] =useState("")

  useEffect(()=>{
    setName(detail && detail.name)
    setPrice(detail && detail.price)
    setColor(detail && detail.color)
    setdescription(detail && detail.description)
    setram_amount(detail && detail.ram_amount)
    setsimcard_support(detail && detail.simcard_support)
    setos(detail && detail.os)
    setwith_phone(detail && detail.with_phone)
    setModel(detail && detail.model)
  },[loading])

  // console.log(price);

  useEffect(()=>{

    try{
      
      // recent.push(params.id)
      detail_product(params.id)
      
    }catch(error){
      alert("rooro")
      
    }
      
  }, [])
  // console.log(detail);
  // console.log(name);
  
  return (
    <div>
      {loading ? <p className='text-center text-3xl'>Loading . . .</p> :
  <div>
    <AuthProvider>
      <Navbar/>
    </AuthProvider>
    {/* <div>{props.update}</div> */}
      <p className='mt-10 text-2xl text-center'><span className='text-red-700'>Note : </span> if you want to change anything just change the current value if you don't, do not change current value </p>
      <form onSubmit={(e)=>handleSubmit(e)} className="w-full mt-6 max-w-md mx-auto">
        <div className="flex flex-wrap -mx-72 mb-6">
          <div className='w-1/2'> 
            <div className="w-full  px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                price
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="price"
                name="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </div>
            <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="cars">Choose a color:</label>
            <select value={color} onChange={(e)=>setColor(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="cars" name="cars">
              <option>select</option>
              <option value="black">black</option>
              <option value="white">white</option>
              <option value="red">red</option>
              <option value="grey">grey</option>
              <option value="gold">gold</option>
            </select>
            {/* <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="phone"
            >
              color
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="color"
              name="color"
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            /> */}
          </div>

          <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                ram_amount
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="ram_amount"
                name="ram_amount"
                type="text"
                value={ram_amount}
                onChange={(e) => setram_amount(e.target.value)}
                required
              />
            </div>

            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                model
              </label>
              <select value={model} onChange={(e)=>setModel(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" name="phone">
                <option>select</option>
                <option value='2'>Iphone</option>
                <option value='3'>Samsung</option>
                <option value='4'>Xiami</option>
              </select>
            </div>

            <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="phone"
            >
              simcard_support
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="simcard_support"
              name="simcard_support"
              type="text"
              value={simcard_support}
              onChange={(e) => setsimcard_support(e.target.value)}
              required
            />
          </div>

          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="phone"
            >
              os
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="os"
              name="os"
              type="text"
              value={os}
              onChange={(e) => setos(e.target.value)}
              required
            />
          </div>

          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="phone"
            >
              with_phone
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="with_phone"
              name="with_phone"
              type="text"
              value={with_phone}
              onChange={(e) => setwith_phone(e.target.value)}
              required
            />
          </div>


          </div>
          <div className="w-full justify-center flex flex-col md:w-1/2 px-3">
            <div className='flex justify-center'>
              <img className='h-80 w-76' src={detail && detail.image} alt='Phone picture'/>
            </div>
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              image
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="image"
              // accept="image/"
              name="image"
              type="file"
              // value={detail && detail.image} 
              onChange={(e) => {
                setImage(e.target.files[0] ? e.target.files[0] : detail.image)
              console.log(e);}}
              
            />
          </div>
        </div>
        

        <div className="flex flex-wrap -mx-72 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="phone"
            >
              description
            </label>
            <textarea
              className="appearance-none box-border h-56  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="description"
              name="description"
              type="text"
              value={detail && detail.description}
              onChange={(e) => setdescription(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='flex  justify-between mb-14 -mx-72'>
          <div className="flex ">
            <button
              onClick={()=>{
                delete_product(detail && detail.id)
                do_RecentActivity(null ,params.id  , null , user.user_id)
                // console.log('enter');
                navigate("delete/" , {replace:true})
              }}
              className="bg-red-600 ms-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              delete
            </button>
          </div>
          <div className="flex ">
            <button
              onClick={()=>{
                do_RecentActivity(params.id , null , null , user.user_id)
              }}
              type="submit"
              className="bg-green-500 me-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Change
            </button>
          </div>
        </div>
      </form>
  </div>
  }
      
    
    </div>
  )
}
const MapStateToProps = state => {
  return{
      update : state.update
  }
}
const MapDispatchToProps = dispatch =>{
  const params = useParams()
  console.log(params);
  return{
      Action : () => dispatch(Action(params.id))
  }
}
export default connect(MapStateToProps , MapDispatchToProps)(ChangePage)
// export default ChangePage