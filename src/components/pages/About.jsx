import React from 'react'
import Header2 from '../Header2'
import Img from "./../../../public/images/banner.png"

const About = () => {
    return (
        <div>
            <Header2 img={Img} title="About Us" text="About Us - Who We Are?"/>
            <div className=''>
                <div className="max-w-[90%] mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center">
                    <div className="left flex-1 h-full">
                        <h2 className='font-bold text-4xl mb-3'>Our Agency Story</h2>
                        <p className='text-gray-400'>Check out our company story and work process</p>
                        <p className='my-7 leading-8'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className='leading-8'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                        <button className='text-white mt-6 text-lg font-semibold bg-[#27ae60] px-6 py-3 rounded-full'>More About Us</button>
                    </div>
                    <div className="flex-1">
                        <img src="./../../../public/immio.jpg" className='' alt="family" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About