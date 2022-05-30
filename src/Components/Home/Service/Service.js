import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useService from '../../../Hooks/useService';
import SingleService from '../singleService/SingleService';

const Service = () => {
    const [services] = useService()
    // console.log(services,'serv')
    return (
        <div>
             <div className='mt-28'>
            {/* <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Soultion for moving better and felling a healthier..</h1> */}
            <h1 className='text-3xl sp-style text-green-700 font-medium text-center py-4'> Our packages</h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
                {
                    services.slice(3,11).map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
                </div>
                <div className="  mt-10 mb-10 text-right mr-10">
            <button><a href="#"> <FontAwesomeIcon
               style={{borderRadius:"10px"}}
                className='text-6xl bg-cyan-900 text-white p-5 ' icon={faArrowUp} /></a></button>
           </div>
        </div>
        </div>
    );
};

export default Service;