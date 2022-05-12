import React from 'react';
import sourav from '../../sourav.jpeg'
import promi from '../../promi.jpg'
import rahat from '../../rahat.jpg'
import asraf from '../../asraf.jpg'
import sanjid from '../../sanjd.jpg'
import Type from '../Contact/Type';
const About = () => {
    return (
    <div>
   
            <div data-aos="fade-up-left" style={{
                marginTop: "10%", marginLeft: '20%',
                marginRight: '20%',
            
            }} className="custom-shadow">
                <div className='pt-2'>
                <img className="about-image w-20 mt-5 h-20 rounded-full  "src={sourav} alt=''/>
            <h1 className='text-2xl sp-style text-center mt-5 pt-5' >Sourav <span className='text-3xl'></span> Arefin.
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
            
            <div data-aos="fade-down-right" style={{ margin: "20%" }} className="custom-shadow">
                
       <div className='pt-2'>
       <img className="w-20 h-20 about-image rounded-full  "src={rahat} alt=''/>
            <h1 className='text-2xl sp-style text-center mt-5 pt-5' > <span className='text-3xl'>M.A.T</span> Rahat.
             </h1>

        <p className='text-blue-500 font-bold p-10 text-center sp-style text-2xl pt-5'> Instructor</p>
           </div>
            </div>
            
            <div data-aos="fade-down-left" style={{ margin: "20%" }} className="custom-shadow">
                

     <div  className='pt-2'>
     <img className="w-20 about-image h-20 rounded-full  "src={sanjid} alt=''/>
            <h1 className='text-2xl sp-style text-center mt-5 pt-5' >Samsul <span className='text-3xl'></span> Anwar
             </h1>

        <p className='text-blue-500 font-bold p-10 text-center sp-style text-2xl'> Organizer</p>
         </div>
        </div>
      
            <div data-aos="flip-down" style={{ margin: "20%" }} className="custom-shadow">
                
                <div className='pt-2'>
                <img className="w-20 about-image h-20 rounded-full  "src={asraf} alt=''/>
            <h1 className='text-2xl sp-style text-center mt-5 pt-5' ><span className='text-3xl '>Asraful</span> Hossain
             </h1>

        <p className='text-blue-500 font-bold p-10 text-center sp-style text-2xl'>Website Manager</p>
                </div>
        </div>
     
        </div>

    );
};

export default About;