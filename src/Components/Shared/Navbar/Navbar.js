import React, { useState } from 'react';
import { Link, useNavigate,NavLink } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { IoMdMenu } from 'react-icons/io'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import image from '../../../no-image.png'
//import NavLink from '../../NavLink/NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faSignOut } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../images/logo-6.png'
import './Navbar.css'
const Navbar = () => {
    const [user] = useAuthState(auth)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
    };
    console.log(user)


    const avater = image
    const userImg = user?.photoURL ? user?.photoURL : avater;


    return (
        <div style={{height:"40px"}} className=' items-center flex  justify-between parent'>
            <div className='items-center logo-div  container px-4 flex mt-5'>
                <img className='w-10 h-10 rounded-full mr-2 ' src={logo} alt='' />
                <h1 className='' onClick={() => navigate('/')}>Royal ~ Convention Hall</h1>
            </div>
         
            
            <nav className="link-div text-black z-10 py-4 md:py-1   absolute top-0 z-50 bg-black shadow-lg bg-clip-padding bg-opacity-10 w-full">
                <div onClick={() => setOpen(!open)} className="h-6 w-6 text-white md:hidden cursor-pointer" >

                    {open ? <ImCross className="h-4 w-4 ml-2 text-black  "></ImCross> : <IoMdMenu className="text-black ml-2  right h-6 w-6 "></IoMdMenu>}
                </div>


                <div className='flex items-center'>

                    <ul className={` w-full md:w-2/3 text-lg py-2 md:flex items-center md:justify-between absolute md:static duration-500 ease-in-out container mx-auto ${open ? "top-10" : "top-[-250px]"}`}>
                        <div className="logo hidden md:block">
                            {/* <div className='flex items-center justify-items-center'>
                        <img className='w-10 h-10 rounded-full 'src={logo} alt=''/>
                 <h1 className='cursor-pointer -mt-5 sp-style' onClick={() => navigate('/')}>Royal ~ Convention Hall</h1>   
                        </div>   */}
                        </div>
                        <div className="items md:flex mr-5">
                            <li className='pr-4 sm:py-2 md:mx-2 li-style text-black font-medium'><NavLink  to="/">Home</NavLink></li>
                            {/* <li className='p-2 md:mx-2 li-style text-black font-medium'><NavLink to="/blog">Blog</NavLink></li> */}
                            <li className='pr-4 sm:py-2 md:mx-2 li-style text-black  font-medium'><NavLink  to="/services">Packages</NavLink></li>
                            {/* <li className='p-2 md:mx-2 li-style text-black  font-medium'><NavLink style={ {borderBottom:"2px solid red"}}to="/about">About</NavLink></li> */}
                            <li className='pr-4 sm:py-2 md:mx-2 li-style text-black  font-medium'><NavLink  to="/contact">Contact Us</NavLink></li>
                            <li className='pr-4 sm:py-2 md:mx-2 li-style text-black  font-medium'><NavLink  to="/about">About</NavLink></li>

                            {/* {
                                user ?
                                    <li style={{ cursor: 'pointer' }} className=' p-2  md:mx-2 text-red-500 font-medium' onClick={logout}>Sign Out <FontAwesomeIcon icon={faSignOut} /></li>

                                    : <li style={{ cursor: 'pointer' }} className='p-2  md:mx-2 text-blue-700 font-medium'><Link to="/login">Sign In <FontAwesomeIcon icon={faSignIn} /></Link></li>
                            } */}

                        </div>
                    </ul>



                </div>


            </nav>
            </div>
          
        

    );
};

export default Navbar;