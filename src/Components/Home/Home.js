import React from 'react';
import Happy from '../Happy/Happy';
import Why from '../Why/Why';
import Review from './Review/Review';


import Service from './Service/Service';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider />
            {/* <Happy/> */}
            <Service />
            <Review />
            
        </div>
    );
};

export default Home;