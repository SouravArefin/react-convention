import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image from '../../images/Thinking.png'
import Arrow from '../Home/Arrow';
import Accordion from './Compo/Accordion'
const FAQ = () => {
    return (
        <div className=" ">
           
            <div className='m-20 grid grid-cols-1 gap-10  md:grid-cols-2  justify-items-center'>

      <div>
        <Accordion title=" Which type of event this convention center does organise ?" content="We organize all type of event. Specially Marriage, Birthday, Meeting, Award program and any Reunion program." />
        <Accordion
          title="How early do we need to start planning an event"
          content="It is very important to plan everything before the event starts. We need to plan atleast 15days earlier before the event."
        />
        <Accordion
          title="Why you will choose us ?"
          content=" <p>Because we are well experienced, more than 10 years event handeling experience we have. So You will find always best experience from us.</p>
         "
        />
      </div>
            
            <div>
<img className='w-1/2  md:mx-0 mx-auto 'src={image} alt=''/>
            </div>
            <div className=' ml-20 grid justify-items-center'>
            <marquee className='text-red-700' width="100%" direction="left" height="100px">
    For More Information Contact Us
</marquee>
        </div>
        {/* <div className="  mt-10 mb-5 ml-60  text-right ">
            <button><a href="#"> <FontAwesomeIcon
               style={{borderRadius:"10px"}}
                className='text-6xl bg-cyan-900 text-white p-5 ' icon={faArrowUp} /></a></button>
           </div> */}
          
        </div>
        <Arrow/>
        </div>
    );
};

export default FAQ;