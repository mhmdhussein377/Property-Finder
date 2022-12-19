import React from 'react'
import {list} from './data/Data'
import List from './List'

const Lists = () => {
    return (
        <div className="bg-white">
            <div className="max-w-[90%] mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2d3954]">
                    Recent Property Listed
                </h1>
                <p
                    className="pt-2 mb-7 md:mb-10 font-medium text-sm sm:text-md sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mx-auto text-[#808080]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <div className="grid mx-auto md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {list.map((item, index) => (<List key={index} {...item}/>))}
                </div>
            </div>
        </div>
    );
}

export default Lists