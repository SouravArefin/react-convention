import React from 'react';
import sourav from '../../sourav.jpeg'
import promi from '../../promi.jpg'
import rahat from '../../rahat.jpg'
import asraf from '../../asraf.jpg'
import sanjid from '../../sanjd.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import AutoType from './AboutType'
const About = () => {
    return (
        <div>
                 <div style={{margin:"10%"}}className="about-card  custom-shadow ">
            
            <h1 className='about-text text-6xl pt-10 sp-style  mt-5 ml-10' >Weave Dreams Into Reality
             </h1>

                <p className='m-10  text-black  text-2xl p-20'>`Infuse your celebration with the warmth and luxury of Royal ~ Convention Hall, a perfect venue for weddings, social programs, gaye holud, birthday parties or intimate gatherings. The modern & elegant design of our banquet & convention hall makes for a perfect upscale fiesta.`
                 
                    <li className="mt-5"style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Pillarless & stylish interior decoration</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Dining capacity of 300+ guests</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Several menu with option for customization</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Affordable price compared to convention centers</span></li>
                </p>
               
                
            </div>
            <h1 className='text-center text-3xl sp-style mt-20'><AutoType/></h1>
        <div className='grid grid-cols-1 md:grid-cols-3'>
          
      
                <div data-aos="fade-right" style={{ margin: "20%" }} className="custom-shadow
        profile
        ">
           <div className='pt-2'>
           <img className="w-20 about-image mt-5 h-20 rounded-full  "src={sourav} alt=''/>
            <h1 className='text-2xl sp-style text-center mt-5 pt-5' > <span className='text-3xl'>Sourav</span> Arefin
             </h1>

        <p className='text-blue-500 font-bold p-10 text-center sp-style text-2xl'>Web Developer</p>
               </div>
            </div>
            

            <div data-aos="fade-right" style={{ margin: "20%" }} className="custom-shadow">
           <div className='pt-2'>
           <img className="w-20 about-image mt-5 h-20 rounded-full  "src={promi} alt=''/>
            <h1 className='text-2xl sp-style text-center mt-5 pt-5' > <span className='text-3xl'>Promi</span> Chowdhury
             </h1>

        <p className='text-blue-500 font-bold p-10 text-center sp-style text-2xl'>Web Designer</p>
               </div>
            </div>
            
            <div data-aos="fade-down-left" style={{ margin: "20%" }} className="custom-shadow">
                
       <div className='pt-2'>
       <img className="w-20 h-20 about-image rounded-full  "src={rahat} alt=''/>
            <h1 className='text-2xl sp-style text-center mt-5 pt-5' > <span className='text-3xl'>M.A.T</span> Rahat
             </h1>

        <p className='text-blue-500 font-bold p-10 text-center sp-style text-2xl pt-5'> Instructor</p>
           </div>
            </div>
            
            <div data-aos="fade-down-right" style={{ margin: "20%" }} className="custom-shadow">
                

     <div  className='pt-2'>
     <img className="w-20 about-image h-20 rounded-full  "src={sanjid} alt=''/>
            <h1 className='text-2xl sp-style text-center mt-5 pt-5' >Samsul <span className='text-3xl'></span> Anwar
             </h1>

        <p className='text-blue-500 font-bold p-10 text-center sp-style text-2xl'> Organizer</p>
         </div>
        </div>
      
            <div data-aos="fade-down-left" style={{ margin: "20%" }} className="custom-shadow">
                
                <div className='pt-2'>
                <img className="w-20 about-image h-20 rounded-full  "src={asraf} alt=''/>
            <h1 className='text-2xl sp-style text-center mt-5 pt-5' ><span className='text-3xl '>Asraful</span> Hossain
             </h1>

        <p className='text-blue-500 font-bold p-10 text-center sp-style text-2xl'>Website Manager</p>
                </div>
        </div>
     
            </div>
            </div>

    );
};

export default About;