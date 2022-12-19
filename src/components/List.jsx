import React from 'react'
import {AiFillHeart} from "react-icons/ai"
import {HiOutlineMapPin} from "react-icons/hi2"

const List = ({
    cover,
    name,
    location,
    category,
    price,
    type
}) => {
    return (
        <div className="shadow-lg">
            <div>
                <img src={cover} alt={name} className="object-cover"/>
            </div>
            <div className="p-8 border-b">
                <div className="flex items-center justify-between">
                    {category === "For Sale"
                        ? (
                            <div className="px-2 py-1 text-[#25B579] text-sm bg-[#25b5791A] font-semibold">
                                {category}
                            </div>
                        )
                        : (
                            <div className="px-2 py-1 text-[#FF9800] text-sm bg-[#FF98001A] font-semibold">
                                {category}
                            </div>
                        )}
                    <div className="text-[#bec7d8]">
                        <AiFillHeart size={25}/>
                    </div>
                </div>
                <h4 className="text-left text-lg font-semibold mt-2">{name}</h4>
                <p className="flex text-md items-center gap-1 text-[#72809D]">
                    <HiOutlineMapPin size={20}/> {location}
                </p>
            </div>
            <div className="px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 font-medium">
                    <span
                        className="px-5 py-1 sm:px-7 sm:py-2 flex items-center justify-center text-white bg-[#27ae60] text-xl font-bold rounded-full">
                        {price}</span>/sqft
                </div>
                <div>{type}</div>
            </div>
        </div>
    );
}

export default List