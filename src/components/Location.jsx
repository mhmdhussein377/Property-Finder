import React from 'react'

const Location = ({cover, name, Villas, Offices, Apartments}) => {
    return (
        <div className="rounded overflow-hidden relative">
            <img src={cover} alt={name} className="object-cover"/>
            <div
                className="absolute rounded text-white top-0 left-0 w-[90%] h-[90%] my-[3.75%] mx-[5%] bg-black/25 z-10 flex flex-col items-center justify-center">
                <h4 className="text-lg">{name}</h4>
                <div className="flex gap-4 text-sm text-white/90">
                    <p>{Villas}</p>
                    <p>{Offices}</p>
                    <p>{Apartments}</p>
                </div>
            </div>
        </div>
    );
}

export default Location