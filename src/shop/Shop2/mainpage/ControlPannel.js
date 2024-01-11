import React, { useEffect, useState } from 'react'
import Navbar from '../navbar'
import { AuthProvider } from '../../../context/AuthContext'
import { useAuth } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

function ControlPannel() {
    const navigate = useNavigate()
    let {recent} = useAuth()
    let {get_RecentActivity} = useAuth()
    let {detail_product} = useAuth()
    let {get_user} = useAuth()
    let {alluser} = useAuth()
    let {detail} = useAuth()
    let {user} = useAuth()
    let {create_news} = useAuth()
    const [handler , sethandler] = useState(false)
    const [specific_user , setspecific_user] = useState('')
    const [receiver_user , setreceiver_user] = useState()
    const [news_title , setnews_title] = useState()
    const [news_description , setnews_description] = useState()

    const NewsSender_specific= ()=>{
        create_news(news_title , news_description , parseInt(receiver_user) , user.user_id)
    }
    const NewsSender_all = ()=>{
        create_news(news_title , news_description ,specific_user , user.user_id)
    }

    const button_functions = ()=>{
        if (specific_user == 'specific user'){
            NewsSender_specific()
        }else {
        NewsSender_all()
        }
    }
    useEffect(()=>{
        try {
            get_RecentActivity()
            sethandler(true)
        }
        catch{
            alert('Recent Activity not available')
        }
        
    } , [])
    // console.log(alluser);
  return (
    <>
        <AuthProvider>
            <Navbar/>
        </AuthProvider>
        <div>
            <p className='text-3xl mt-5 mb-1 text-center'> Hi {user && user.username}</p>
            <div className='text-3xl  text-center '>Welcome to your ControlPanel</div>
        </div>
        <div className='flex justify-around	mt-8'>

            <div className='bg-blue-100	w-1/3 h-fit flex flex-col-reverse rounded-xl' id='RecentActivity'>
               
                {recent && recent.map((change)=>(
                    <div>
                        <div className='p-1'>
                            <div className='bg-amber-50 border-2 border-red-400	w-full  h-[40px] flex items-center justify-center rounded-xl'>
                                {change.update && 
                                <div className='flex p-2 '>
                                    <p>Last Activity : i </p>
                                    <p className='underline'>tem<button onClick={()=>{navigate(`change_page/${change.update}`)}} className='underline'> {change.update}</button> updated  </p>
                                </div>
                                }
                                {change.delete && 
                                <div className='flex p-2 '>
                                    <p>Last Activity :  i</p>
                                    <p><button >tem {change.delete}</button> deleted   </p>
                                </div>
                                }
                                {change.create==null && change.update==null && change.delete==null && 
                                <div className='flex p-2 '>
                                    <p>New item added</p>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                ))}
                <p className='text-2xl text-center mt-3 mb-2'>Recent Activity</p>
            </div>
            {user.user_id == 1 && 
            
            
            
            <div className='flex flex-col w-1/3 '>
                <div>
                    <div className='bg-white w-full h-fit p-3 border-2 rounded-xl border-red-400'>
                        <p className='text-3xl underline mb-5'>
                            send massage to member
                        </p>
                        <div>
                            <label
                            className="block  tracking-wide text-gray-700 text-lg  mb-2"
                            htmlFor="phone"
                            >
                            title : 
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="with_phone"
                                name="with_phone"
                                onChange={(e)=>{
                                    setnews_title(e.target.value)
                                }}
                                type="text"
                                required
                                />

                        </div>

                        <div className='flex flex-col items-center'>
                            <label
                            className="block tracking-wide text-gray-700 text-lg  mb-2"
                            htmlFor="phone"
                            >
                            select who receive this massage : 
                            </label>
                            <select onChange={(e)=>{
                                    get_user()
                                    setspecific_user(e.target.value)
                                }} className="appearance-none block uppercase w-1/2 bg-gray-200 text-center text-gray-700 ps-0 border border-gray-200 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" name="phone">
                                <option>select</option>
                                <option value='all'>all</option>
                                <option value='specific user' >specific user</option>
                            </select>
                        </div>
                        {specific_user == 'specific user' && 
                            <div className='flex flex-col items-center'>
                                <label
                                className="block tracking-wide text-gray-700 text-center text-lg  mb-2"
                                htmlFor="phone"
                                >
                                select user : 
                                </label>
                                <select onClick={(e)=>{
                                    setreceiver_user(e.target.value)
                                }} className="appearance-none  block uppercase w-1/2 bg-gray-200 text-center text-gray-700 ps-0 border border-gray-200 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone" name="phone">
                                    <option>select</option>
                                    {alluser && 
                                    alluser.map((user)=>(
                                        <option value={user.id}>{user.username}</option>
                                    ))
                                    }
                                    
                                    {/* <option value='4'>Xiami</option> */}
                                </select>
                            </div>
                        }
                        
                        <div>
                            <label
                            className="block  tracking-wide text-gray-700 text-lg  mb-2"
                            htmlFor="phone"
                            >
                            description : 
                            </label>
                            <textarea
                                className="appearance-none box-border h-20  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="description"
                                name="description"
                                type="text"
                                required
                                onChange={(e)=>{
                                    setnews_description(e.target.value)
                                }}
                                />
                         </div>
                         <div onClick={()=>{
                            button_functions() 

                            
                         }} className='flex justify-end'>
                            <button className='uppercase mt-1 bg-slate-700 py-2 px-4 rounded bg text-white duration-300 hover:bg-black'> send</button>
                         </div>
                    </div>
                </div>
            </div>
    }
        </div>
    </>
  )
}

export default ControlPannel