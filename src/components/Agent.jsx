import React from 'react'
import { MdOutlineEmail } from "react-icons/md"
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoIosCall } from "react-icons/io"
import { MdVerified } from "react-icons/md"

const Agent = ({list, cover, address, name, icon}) => {
    return (
        <div className="border rounded p-10 bg-white">
            <div className="text-left">
                <span className="px-4 py-3 rounded-full bg-[#ff6922] text-white ">
                    {list} Listings
                </span>
            </div>
            <div className="my-6">
                <div className="rounded-full p-3 border-4 w-fit mx-auto relative">
                    <img
                        src={cover}
                        alt="person"
                        className="w-[80px] h-[80px] object-cover rounded-full mx-auto"/>
                    <div className='absolute top-[40%] right-1  z-20'>
                        <MdVerified size={20} className="text-[#108be7]"/>
                    </div>
                </div>
                <div className="mt-1 flex items-center justify-center gap-1"><HiOutlineMapPin size={20}/> {address}</div>
                <h4 className="font-bold mt-2 mb-4">{name}</h4>
                <div className="flex items-center justify-center gap-2">
                    {icon.map((icon, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 w-[40px] h-[40px] text-gray-500 rounded-full flex items-center justify-center cursor-pointer">
                            {icon}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <button className='bg-[#27ae60] text-white px-4 py-2 rounded flex items-center gap-1'><MdOutlineEmail size={20}/> Message</button>
                <button className='text-white bg-black px-4 py-3 flex items-center justify-center rounded'><IoIosCall size={20}/></button>
            </div>
        </div>
    );
}

export default Agent