import React from 'react';
import image from '../../images/Thinking.png'
const FAQ = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center ">
           
            <div className='m-20'>

            <div className="accordion" id="accordionExample5">
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingOne5">
      <button className="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
        aria-controls="collapseOne5">
         Which type of event this convention center does organise ?
      </button>
    </h2>
    <div id="collapseOne5" className="accordion-collapse collapse show" aria-labelledby="headingOne5">
      <div className="accordion-body py-4 px-5">
        <p> We organize all type of event. Specially Marriage, Birthday, Meeting, Award program and any Reunion program.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingTwo5">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo5" aria-expanded="false"
        aria-controls="collapseTwo5">
      How early do we need to start planning an event
      </button>
    </h2>
    <div id="collapseTwo5" className="accordion-collapse collapse" aria-labelledby="headingTwo5">
      <div className="accordion-body py-4 px-5">
        <p>It is very important to plan everything before the event starts. We need to plan atleast 15days earlier before the event.</p>
      
      </div>
    </div>
  </div>
  <div className="accordion-item bg-white border border-gray-200">
    <h2 className="accordion-header mb-0" id="headingThree5">
      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree5" aria-expanded="false"
        aria-controls="collapseThree5">
        Why you will choose us ?
      </button>
    </h2>
    <div id="collapseThree5" className="accordion-collapse collapse" aria-labelledby="headingThree5">
      <div className="accordion-body py-4 px-5">
      <p >
                  Because we are well experienced, more than 10 years event handeling experience we have. So You will find always best experience from us.
                </p>
      </div>
    </div>
  </div>
 
</div>
            </div>
            <div>
<img className='w-1/2 mt-10 md:mx-0 mx-auto 'src={image} alt=''/>
            </div>
            <div className=' m-20 grid justify-items-center'>
            <marquee className='text-red-700' width="100%" direction="left" height="100px">
    For More Information Contact Us
</marquee>
          </div>
        </div>
    );
};

export default FAQ;