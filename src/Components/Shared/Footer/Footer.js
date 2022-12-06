import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div >

            <footer className="bg-[#04193a]">
                
                <div className="py-6 px-4 bg-[#00112B] md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-300 sm:text-center">© 2022 <Link to="https://www.facebook.com/profile.php?id=100013452185380">All Rights Reserved <span className='text-2xl sp-style text-yellow-500'>Team</span> <span className='text-2xl text-yellow-500'>D</span><span className='text-yellow-500'>ebugger</span></Link>. 
                    </span>
                   
                </div>
            </footer>

        </div>
    );
};

export default Footer;