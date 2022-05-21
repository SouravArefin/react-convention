import React from 'react';
import { useNavigate } from 'react-router-dom';
import useService from '../../Hooks/useService';
import BestProject from '../BestProject/BestProject';
import Happy from '../Happy/Happy';
import Why from '../Why/Why';
import Feature from './Feature';
import Review from './Review/Review';


import Service from './Service/Service';
import SingleService from './singleService/SingleService';
import Slider from './Slider/Slider';

const Home = () => {
    const [services] = useService()
    const navigate = useNavigate()
    return (
        <div>
            <Slider />
            
            <h1 className="tracking-widest mt-10 best-moment text-center text-3xl">Some Of Our Best Memories</h1>
            <BestProject></BestProject>
            <h1 className="tracking-widest font-bold text-[#D69900] mt-10 sp-style text-center text-3xl">
            Features & Facilities
            </h1>
            <Feature/>
            <div className='mt-28'>
            
                <h1 className='text-3xl sp-style text-green-700 font-medium text-center py-4'>
                
                Our Best Packages
                </h1>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
                {
                    services.slice(0,3).map(service => <SingleService key={service.id} service={service}></SingleService>)
                }
            </div>
            </div>
           
            <button style={{marginLeft:'45%'}} className=" text-center cursor:pointer happy bg-[#3005ee] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white" onClick={() => navigate('/services')}>
                                See More
            </button>
            
            <Review />
            
        </div>
    );
};

export default Home;