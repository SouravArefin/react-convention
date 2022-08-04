import React from 'react';
import upperArrow from '../../upper_arrow_512x512.png'
import message from '../../messenger.png'
const Arrow = () => {
    return (
        <div className="z-50   mt-10 mb-10 mr-10  text-right">
        
            {/* <button>
                <a href="https://www.facebook.com/One-Million-101069885894174" target='_blank' > */}
            {/* <FontAwesomeIcon
               style={{borderRadius:"50px"}}
            className='text-4xl bg-cyan-900 text-white p-5 ' icon={faArrowUp} /> */}
        {/* <img src={message} alt="arrow" className="w-44 "/>
            </a></button> */}

            <button><a href="#">
            {/* <FontAwesomeIcon
               style={{borderRadius:"50px"}}
            className='text-4xl bg-cyan-900 text-white p-5 ' icon={faArrowUp} /> */}
        <img src={upperArrow} alt="arrow" className="w-10 h-10 "/>
            </a></button>
     
            

           </div>
    );
};

export default Arrow;