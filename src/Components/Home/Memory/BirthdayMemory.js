import React from 'react';
import wed1 from './bi-1.jpeg'
import wed2 from './bi-2.jpeg'
import wed3 from './bi-3.jpeg'
const BirthdayMemory = () => {
    return (
        <div className='grid grid-cols-3 gap-5 mt-10 mb-10 mr-10 ml-10'>
            <img src={wed1} alt=""/>
            <img src={wed2} alt=""/>
            <img src={wed3} alt=""/>
        </div>
    );
};

export default BirthdayMemory;