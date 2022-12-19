import React from 'react'

const Header2 = ({img, title, text}) => {
    return (
        <div className='relative'>
            <div className=''>
                <img className='max-h-[400px] w-full object-cover' src={img} alt={title}/>
            </div>
            <div className='text-white max-w-[90%] mx-auto absolute top-[50%] left-[5%] px-4 w-full'>
                <p className='text-lg mb-4'>{title}</p>
                <h2 className='text-4xl font-semibold'>{text}</h2>
            </div>
        </div>
    );
}

export default Header2