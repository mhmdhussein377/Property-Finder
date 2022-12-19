import React from 'react'
import { price } from '../data/Data';
import Header2 from '../Header2'
import Package from '../Package';
import Img from "./../../../public/images/banner.png"

const Pricing = () => {
    return (
        <div>
            <Header2
                img={Img}
                title="30 days money back guarantee"
                text="No Extra Fees. Friendly Support"/>
            <div className="bg-white">
                <div className="max-w-[90%] mx-auto px-4 py-20 text-center">
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:items-center gap-12">
                        {price.map((item, index) => (<Package key={index} {...item}/>))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing