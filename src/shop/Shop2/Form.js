// Import React and useState hook
import React, { useState } from "react";
import Navbar from "./navbar";
import { AuthProvider, useAuth } from "../../context/AuthContext";
import { useNavigate, useParams } from 'react-router-dom';
// Define a custom component for the form
function Form() {
  let{recent} = useAuth()
  let {create_product} = useAuth()
  // Define the initial state of the form fields
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [color , setColor] = useState("")
  const [description , setdescription] = useState("")
  const [ram_amount , setram_amount] = useState("")
  const [simcard_support , setsimcard_support] = useState("")
  const [os , setos] = useState("")
  const [with_phone , setwith_phone] =useState("")
  const [model , setModel] =useState("")
  let{do_RecentActivity} = useAuth()
  let {user} = useAuth()
  const params = useParams()

  


  const handleSubmit = (e) => {



    
  create_product({
    name , 
    image , 
    price , 
    color , 
    description , 
    ram_amount , 
    simcard_support , 
    os , 
    with_phone , 
    model , 
  })
  console.log({
    name , 
    image , 
    price , 
    color , 
    description , 
    ram_amount , 
    simcard_support , 
    os , 
    with_phone , 
    model , 
  });
  
};

  return (
    <>
    <AuthProvider>
      <Navbar/>
    </AuthProvider>
      
      <form onSubmit={handleSubmit} className="w-full mt-6 max-w-md mx-auto">
        <div className="flex flex-wrap -mx-72 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
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
              // value={image} 
              onChange={(e) => {
                setImage(e.target.files[0])
              console.log(e);}}
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-72 mb-6">
          <div className="w-1/2 px-3">
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
          <div className="w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="cars">Choose a color:</label>
            <select onChange={(e)=>setColor(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="cars" name="cars">
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
        </div>

        <div className="flex flex-wrap -mx-72 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="phone"
            >
              description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="description"
              name="description"
              type="text"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
              required
            />
          </div>
        </div>
          <div className="flex flex-wrap -mx-72 mb-6">
            <div className="w-1/2 px-3">
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
            <div className="w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phone"
              >
                model
              </label>
              <select onChange={(e)=>setModel(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" name="phone">
                <option>select</option>
                <option value='2'>Iphone</option>
                <option value='3'>Samsung</option>
                <option value='4'>Xiami</option>
              </select>
            </div>
          </div>

        <div className="flex flex-wrap -mx-72 mb-6">
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
        </div>
        <div className="flex flex-wrap -mx-72 mb-6">
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
        </div>
        <div className="flex flex-wrap -mx-72 mb-6">
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
        <div className="flex justify-center">
          <button
          onClick={()=>{do_RecentActivity( null, null , params.id , user.user_id)}}
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

// Export the component
export default Form;
