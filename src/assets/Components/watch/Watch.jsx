import React from 'react';

const Watch = ({watch}) => {
    const {name, price} = watch;
    return (
        <div className='border m-1'>
            <h1 className='text-2xl text-black'>Name: {name}</h1>
            <h1 className='text-gray-500'>Price: {price}</h1>
        </div>
    );
};

export default Watch;