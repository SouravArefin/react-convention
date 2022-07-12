import React from 'react';
import upperArrow from '../../upper_arrow_512x512.png'
const Arrow = () => {
    return (
        <div className="  mt-10 mb-10 text-right mr-10">
        <button><a href="#">
            {/* <FontAwesomeIcon
               style={{borderRadius:"50px"}}
            className='text-4xl bg-cyan-900 text-white p-5 ' icon={faArrowUp} /> */}
        <img src={upperArrow} alt="arrow" className="w-20 h-20"/>
        </a></button>
           </div>
    );
};

export default Arrow;