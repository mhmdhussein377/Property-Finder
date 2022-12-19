import React from 'react'
import { featured } from '../data/Data';
import Header2 from '../Header2'
import Property from '../Property';
import Img from "./../../../public/images/banner.png"

const Services = () => {
    return (
        <div>
            <Header2 img={Img} title="Services" text="Services - All Services" />
            <div className="bg-[#f7f9fc]">
                <div className="max-w-[90%] mx-auto px-4 py-20 text-center">
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {featured.map((item, index) => (<Property {...item} key={index}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services