import React from 'react'
import Logo from "./../../public/images/logo-light.png"
import {footer} from "./data/Data"

const Footer = () => {
    return (
        <div className="">
            <div className="upper bg-[#27ae60]">
                <div
                    className="max-w-[90%] mx-auto px-4 py-8 md:py-10 text-white md:flex items-center justify-between">
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                            Do You Have Questions?
                        </h1>
                        <p className="mt-2 md:mt-0">
                            We'll help you to grow your career and growth.
                        </p>
                    </div>
                    <div className="text-center md:text-left mt-8 md:mt-0">
                        <button
                            className="text-2xl font-semibold bg-white text-[#27ae70] px-6 py-3 rounded-full">
                            Contact us Today
                        </button>
                    </div>
                </div>
            </div>
            <div className="middle bg-[#1d2636]">
                <div
                    className="max-w-[90%] mx-auto px-4 py-8 md:py-10 grid grid-cols-2 lg:grid-cols-6 gap-7">
                    <div className="col-span-2 md:col-span-1 lg:col-span-3">
                        <div className="w-40 mb-2">
                            <img src={Logo} className=""/>
                        </div>
                        <h3 className="text-2xl font-semibold text-white">
                            Do You Need Help With Anything?
                        </h3>
                        <p className="text-[#808080] py-5">
                            Receive updates, hot deals, tutorials, discounts sent straignt in your inbox
                            every month
                        </p>
                        <div className="flex">
                            <input
                                className="p-2 w-1/2 flex-1 sm:p-3 rounded-tl rounded-bl text-md sm:text-lg border-none outline-none"
                                type="email"
                                placeholder="Email Address"/>
                            <button
                                className="bg-[#27ae60] p-2 sm:p-3 text-white text-lg rounded-tr rounded-br">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    {footer.map((item, index) => (
                        <div key={index}>
                            <h3 className="text-white mb-6">{item.title}</h3>
                            <ul className="flex flex-col gap-4">
                                {item
                                    .text
                                    .map((text, index) => (
                                        <li key={index} className="text-[#808080]">
                                            {text.list}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className='p-5 bg-[#1d2636] text-center border-t border-t-gray-700'>
                <p className='text-[#808080]'>© 2021 RentUP. Designd By Mhmd Hussein.</p>
            </div>
        </div>
    );
}

export default Footer