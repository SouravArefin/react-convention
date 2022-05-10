import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../yalantis-interactive-404.gif'
const NotFound = () => {
    return (
        <>
             
              <div className='not'>
           
           <img className="mt-10 h-50 w-full"src={error} alt=''/>
        </div>
        </>
      
    );
};

export default NotFound;