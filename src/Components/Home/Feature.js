import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const Feature = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2  '>
            <div className=" feature">
            <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]'icon={faCheck} /> <span className='ml-2'>Accommodates 400 Guests</span> </li>
                <li style={{listStyle:'none'}}> <FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Pillarless Banquet Hall</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">2 Spacious Halls: 3500sft each</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Customizable Stage Size</span></li>
            </div>
            <div className=" feature">
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Custom Seating Arrangement</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">LED Projector & Screens</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Spacious Parking Facility</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Fully Air Conditioned</span></li>
            </div>
            <div className=" feature">
                <li style={{listStyle:'none'}}> <FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Local & International Menu</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">Superior Tabletop Décor</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2">High-Speed Wi-Fi</span></li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]'icon={faCheck} /> <span className="ml-2">Easy Convention Center Location</span></li>
            </div>
            <div className=" feature">
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2"></span>24-Hour Security</li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2"></span>Built-In Audio Visual System</li>
                <li style={{listStyle:'none'}}>
                <FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /><span className="ml-2"></span> Event Planning Assistance</li>
                <li style={{listStyle:'none'}}><FontAwesomeIcon className='text-[#3b069e]' icon={faCheck} /> <span className="ml-2"></span>Dual Lift Facility</li>
            </div>
        </div>
    );
};

export default Feature;