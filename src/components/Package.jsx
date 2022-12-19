import React from 'react'

const Package = ({plan, price, ptext, list, best}) => {
    return (
        <div className="flex flex-col justify-center shadow-md rounded-lg px-7 py-10">
            {best && <span className='text-white bg-[#FF6922] p-3 m-auto mb-6 rounded-full w-1/2 lg:w-1/3'>Best Value</span>}
            <h2 className="font-bold text-2xl">{plan}</h2>
            <div className="text-6xl font-bold my-4">
                <sub className="text-3xl">$</sub>
                {price}
            </div>
            <p className="text-md mb-8">{ptext}</p>
            <ul className="flex flex-col gap-6">
                {list.map((item, index) => (
                    <li className="flex items-center gap-6" key={index}>
                        <span
                            className={`w-[30px] h-[30px] flex items-center justify-center text-[#25B579] text-sm bg-[#25b5791A] rounded-full font-bold ${item.change && "bg-[#DC35451F]"}`}>
                            {item.icon}
                        </span>{" "} {item.text}
                    </li>
                ))}
            </ul>
            <button
                className={`${best
                ? "bg-[#27ae60] text-white"
                : "bg-white text-[#27ae60] border-[#e5f5ec] border-4"} mt-6 p-4 font-semibold rounded-full text-lg`}>
                Start {plan}
            </button>
        </div>
    );
}

export default Package