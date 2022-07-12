import React from 'react';
import { useNavigate } from 'react-router-dom';
import useService from '../../Hooks/useService';
import BestProject from '../BestProject/BestProject';
import Happy from '../Happy/Happy';
import Why from '../Why/Why';
import Feature from './Feature';
import ReviewSlider from '../Review/ReviewSlider'
import { BiWorld } from 'react-icons/bi';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineComputer } from 'react-icons/md';
import wave from '../../waves.svg'
import hand from '../../hand.jpg'
import world from '../../world.jpg'
import project from '../../project.jpg'
import Service from './Service/Service';
import SingleService from './singleService/SingleService';
import Slider from './Slider/Slider';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../Spinner/Spinner';
import Arrow from './Arrow';

const Home = () => {
    const [services] = useService()
    const navigate = useNavigate()
    return (
        // <>
        
       
        //     {
        //         services.length === 0 ?
        //             <Spinner />
        //             :
                    <div>
                    <Slider />
                    
                    <h1 className="tracking-widest mt-10 best-moment text-center text-3xl">Some Of Our Best Memories</h1>
                    <BestProject></BestProject>
                    <h1 className=" font-bold text-purple-900 mt-10 sp-style text-center text-3xl">
                    Features & Facilities
                    </h1>
                    <Feature/>
                    <div className='mt-28'>
                    
                        <h1 className='text-3xl sp-style text-green-700 font-medium text-center py-4'>
                        
                        Our Best Packages
                        </h1>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-10 container mx-auto my-10 px-8 md:px-0'>
                        {
                            services.slice(0,3).map(service => <SingleService key={service._id} service={service}></SingleService>)
                        }
                    </div>
                    </div>
                   
                    <button style={{marginLeft:'45%'}} className=" text-center cursor:pointer happy bg-[#3005ee] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white" onClick={() => navigate('/services')}>
                                        See More
                    </button>
                    
                    {/* <Review /> */}
                    <h1 className="md:text-5xl text-2xl sp-style text-center mb-10 text-amber-900 mt-10 ">What Our Client's Says</h1>
                    <div className='container mx-auto  mb-10'>
                        <ReviewSlider/>
                    </div>
                  <Arrow/>
                    <div className='bg-[#04193A] mt-10'>
        
                                <div className="custom-shape-divider-top-1653206227">
                            <img src={wave} alt="" />
                        </div>
                                <h1 className='text-uppercase sp-style text-center text-white text-4xl md:text-5xl '>We Always Try To Give Our Best</h1>
                                
                                    <div className="business-summery mt-10 pb-10 grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto">
                                        <BusinessSummary
                                            icon={<BiWorld></BiWorld>}
                                            end={1}
                                            title="Country"
                                            image={world}
                                        />
                                        <BusinessSummary
                                            icon={<BsPeopleFill></BsPeopleFill>}
                                            end={500}
                                            title="Happy Clients"
                                            image={hand}
                                        />
                                        <BusinessSummary
                                            icon={<MdOutlineComputer></MdOutlineComputer>}
                                            end={900}
                                            title="Successful Projects"
                                            image={project}
                                        />
                                    </div>
                    </div>
                  
                </div>
        //     } 
           
  
         
    
        // </>
    );
};

export default Home;