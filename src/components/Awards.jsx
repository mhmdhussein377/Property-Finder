import React from 'react'
import {awards} from './data/Data'

const Awards = () => {
    return (
        <div className="bg-[#122947]">
            <div className="max-w-[90%] mx-auto px-4 py-16">
                <div className="text-center w-full md:max-w-[55%] lg:max-w-[50%] mx-auto mb-8 md:mb-12">
                    <h6 className="text-[#67ae60] mb-1">Our Awards</h6>
                    <h1 className="text-white text-2xl sm:text-3xl">
                        Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services
                    </h1>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {awards.map((item, index) => (
                        <div className="flex flex-col text-center" key={index}>
                            <div className="bg-[#2a3f5a] flex items-center justify-center w-[100px] h-[100px] rounded-tr-[50%] rounded-bl-[50%] mx-auto">
                                {item.icon}
                            </div>
                            <h1 className="text-white font-bold text-5xl py-3">{item.num}</h1>
                            <p className="text-[#808080]">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Awards