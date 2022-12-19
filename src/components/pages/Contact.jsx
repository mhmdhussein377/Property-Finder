import React from 'react'
import Header2 from '../Header2'
import Img from "./../../../public/images/banner.png"

const Contact = () => {

    let handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Header2 img={Img} title="Contact Us" text="Get Helps & Friendly Support"/>
            <div className="max-w-[90%] mx-auto py-16 px-4">
                <div className="shadow-lg px-6 py-8 shadow-[#e5f5ec] rounded">
                    <h6 className="mb-4 text-md font-semibold">Fillup The Form</h6>
                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="flex-1 outline-none border rounded p-2 placeholder:text-slate-500"/>
                            <input
                                type="Email"
                                placeholder="Email"
                                className="flex-1 outline-none placeholder:text-slate-500 border rounded p-2"/>
                        </div>
                        <div className="my-6">
                            <input
                                type="text"
                                placeholder="Subject"
                                className="rounded outline-none border p-2 w-full placeholder:text-slate-500"/>
                        </div>
                        <div>
                            <textarea
                                cols="30"
                                rows="10"
                                placeholder="Enter a Message"
                                className="rounded outline-none border p-2 w-full placeholder:text-slate-500"></textarea>
                        </div>
                        <button className='px-5 font-bold py-2 text-white bg-[#27ae60] text-lg rounded mt-4'>Submit Request</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact