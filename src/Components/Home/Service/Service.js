import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import useService from '../../../Hooks/useService';
import Arrow from '../Arrow';
import Chat from '../Chat';
import SingleService from '../singleService/SingleService';

const Service = () => {
    const [services] = useService()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // console.log(services,'serv')
    useEffect(() => {
        var alert_del = document.querySelectorAll('.alert-del');
        alert_del.forEach((x) =>
          x.addEventListener('click', function () {
            x.parentElement.classList.add('hidden');
          })
        );
    }, [])
    useEffect(() => {
        var alert_del = document.querySelectorAll('.alert-del');
        alert_del.forEach((x) =>
          x.addEventListener('click', function () {
            x.parentElement.classList.add('hidden');
          })
        );
    }, [])
    return (
        <div>
             <div className='mt-28'>
            {/* <h1 className='serv-head text-3xl text-gray-500 font-medium text-center py-4'>Soultion for moving better and felling a healthier..</h1> */}
            <h1 className='text-3xl sp-style text-green-700 font-medium text-center py-4'> Our packages</h1>
            <div className='grid md:grid-cols-3  grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
                {
                    services.slice(3,11).map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
                </div>
                {/* <div className="  mt-10 mb-10 text-right mr-10">
            <button><a href="#"> <FontAwesomeIcon
               style={{borderRadius:"10px"}}
                className='text-6xl bg-cyan-900 text-white p-5 ' icon={faArrowUp} /></a></button>
           </div> */}
                <Arrow />
                <Chat/>
                     {/* toast start */}
            {/* <div className='ml-auto mb-5'>
            <div
                className="bg-red-900  w-72 mt-10 flex justify-between text-white shadow-xl rounded p-3 "
            >
                <p className="self-center">
               To need any help,Message us or call us
                </p>
                <strong className="text-2xl mt-2 ml-5 align-center cursor-pointer alert-del"
                >&times;</strong
                >
            </div>
            </div> */}
            
            {/* toast end */}
            </div>
          
        </div>
    );
};

export default Service;