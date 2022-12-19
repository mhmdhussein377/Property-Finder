import React from 'react'

const Property = ({cover, name, total}) => {
    return (
        <div className="flex flex-col text-center p-8 shadow-lg rounded cursor-pointer">
            <div className='text-center mx-auto mb-2'>
                <img className="h-16 w-16 object-cover" src={cover} alt={name}/>
            </div>
            <h4 className='text-lg font-semibold pt-2'>{name}</h4>
            <p className='text-sm text-gray-500'>{total}</p>
        </div>
    );
}

export default Property