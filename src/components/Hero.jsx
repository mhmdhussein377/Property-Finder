import React from 'react'
import HeroImg from "./../../public/images/banner.png"
import {AiOutlineSearch} from "react-icons/ai"

const Hero = () => {

    return (
        <div className="relative w-full h-screen">
            <img src={HeroImg} alt="hero" className="w-full h-full object-cover"/>
            <div
                className="absolute text-white top-[20%] md:top-[40%] px-4 text-center w-full flex flex-col gap-6">
                <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl selection:no-underline">Search Your Next Home</h1>
                <p className="text-lg text-gray-300 font-medium">
                    Find new & featured property located in your local city.
                </p>
                <form
                    className="grid md:grid-cols-2 lg:grid-cols-4  bg-white max-w-[90%] mx-auto w-full rounded overflow-hidden">
                    <div className="p-2.5 lg:p-4 text-left border-r-2">
                        <p className="text-gray-400 mb-1">City/Street</p>
                        <input
                            type="text"
                            placeholder="Location"
                            className="w-[90%] rounded text-black outline-none p-1.5 placeholder:text-black text-lg border"/>
                    </div>
                    <div className="p-2.5 lg:p-4 text-left border-r-2">
                        <p className="text-gray-400 mb-1">Property Type</p>
                        <input
                            type="text"
                            placeholder="Property Type"
                            className="w-[90%] rounded text-black outline-none p-1.5 placeholder:text-black text-lg border"/>
                    </div>
                    <div className="p-2.5 lg:p-4 text-left border-r-2">
                        <p className="text-gray-400 mb-1">Price Range</p>
                        <input
                            type="text"
                            placeholder="Price Range"
                            className="w-[90%] rounded text-black outline-none p-1.5 placeholder:text-black text-lg border"/>
                    </div>
                    <div className='p-2.5 lg:p-4 text-left flex items-center justify-between'>
                        <div className='text-black text-lg font-semibold'>Advance Filter</div>
                        <div className='text-white rounded px-4 py-3 flex items-center justify-center bg-[#27ae60]'>
                            <AiOutlineSearch size={25}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Hero