import React, { useEffect } from 'react';
import { cardsData } from '../Provider/CardProvider';
import { useRef } from 'react';

const Card = () => {
    const elementref = useRef(null)
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         let element = document.querySelectorAll('#hidden')
    //     },600)
    // } , [])
  return (
    <div id='hidden' className='mx-auto flex container  flex-col md:flex-row'> 
        {cardsData.map((data)=>(
            <div className="w-full md:w-1/3 p-4">
                <div className="group dark:bg-pink-950 bg-white rounded-lg shadow-lg hover:shadow-xl">
                    <div className='relative'>
                        <div className='relative group-hover:bottom-4 w-full h-80 bottom-0'  ></div>
                        <div className='bg-cover absolute group-hover:bottom-4 z-20 bg-center w-full h-80 duration-500 rounded-lg bottom-0' style={{backgroundImage : `url(${require('../static/images/' +data.imageUrl +'.jpg')})` }}  alt={data.title} ></div>
                        <div className='absolute z-10  border-current group-hover:bottom-2 border group-hover:rotate-3 duration-300 rounded-lg bg-pink-900 w-full h-80 bottom-0 '></div>
                        <div className='absolute z-0  border-current group-hover:bottom-0 border group-hover:rotate-6 duration-300 rounded-lg bg-rose-950 w-full h-80 bottom-0 '></div>
                    </div>
                    <div className="p-4 dark:bg-pink-950 dark:text-white">
                        <h2 className="text-lg font-semibold">{data.title}</h2>
                        <p className="mt-2 dark:text-white text-gray-700">{data.description}</p>
                        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 hover:scale-105 transition-transform">
                            {data.buttonText}
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
};

export default Card;
