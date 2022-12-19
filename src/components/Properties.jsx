import React from 'react'
import {featured} from './data/Data';
import Property from './Property';

const Properties = () => {
    return (
        <div className="bg-[#f7f9fc]">
            <div className="max-w-[90%] mx-auto px-4 py-20 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#2d3954]">
                    Featured Property Types
                </h1>
                <p className="pt-2 mb-7 mb:mb-10 text-gray-600 font-medium text-md">
                    Find All Types of Property.
                </p>
                <div
                    className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {featured.map((item, index) => (<Property {...item} key={index}/>))}
                </div>
            </div>
        </div>
    );
}

export default Properties