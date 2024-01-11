import React from "react";
import image from '../image/laptop2.jpg'
import './Test.css'


{/* <div className="relative w-full h-auto md:w-[700px] duration-300 back-img"></div>
<div className="absolute z-20 right-12 shadow-xl group-hover:rotate-6 shadow-img bg-gray-200 duration-300"></div>
<div className="absolute top-[43px] hover:top-[35px] z-10 right-12 border-4 shadow-xl group-hover:rotate-12 shadow-img bg-gray-200 duration-300"></div> */}
// top-[30px] hover:top-[35px] z-30 right-12
export default function Test(){
    return(
        <>
            <div className="container mx-auto p-4">
                <div className=" flex flex-wrap back-image flex-row-reverse content-center">
                    
                    <div className="w-full md:w-1/2 xl:h-5/6 lg:h-4/6 md:h-3/5 h-80">
                        <div className=" duration-300 back-img h-full bg-cover bg-center" style={{ backgroundImage: 'url(../image/laptop3.jpg)' }}>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center w-full md:w-1/2 ">
                        <div className="">
                            <h1 className="text-3xl font-bold">Welcom To ProHome</h1>
                            <br/>
                            <p className="mt-2">
                                Home of programers , Home of Professional
                            </p>
                            <br/>
                            <p>You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:w-full to apply the w-full utility at only medium screen sizes and above</p> 
                        </div>
                        <div>
                            <p>Tesla was incorporated in July 2003 by Martin Eberhard and Marc Tarpenning as Tesla Motors. The company's name is a tribute to inventor and electrical engineer Nikola Tesla. </p>
                        </div>
                        <div className="text-center mt-10">
                            <button className="w-5/6 bg-yellow-500 rounded-full bg-yellow-500 border text-xl">next</button>
                        </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}