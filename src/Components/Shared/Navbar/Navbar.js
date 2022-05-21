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
import { Transition } from '@headlessui/react';
const Navbar = () => {
    const [user] = useAuthState(auth)
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
    };
    console.log(user)


    const avater = image
    const userImg = user?.photoURL ? user?.photoURL : avater;


    return (
        // <div style={{height:"40px"}} className=' items-center flex  justify-between parent'>
        //     <div className='items-center logo-div  container px-4 flex mt-5'>
        //         <img className='w-10 h-10 rounded-full mr-2 ' src={logo} alt='' />
        //         <h1 className='' onClick={() => navigate('/')}>Royal ~ Convention Hall</h1>
        //     </div>
         
            
        //     <nav className="link-div text-black z-10 py-4 md:py-1   absolute top-0 z-50 bg-black shadow-lg bg-clip-padding bg-opacity-10 w-full">
        //         <div onClick={() => setOpen(!open)} className="h-6 w-6 text-white md:hidden cursor-pointer" >

        //             {open ? <ImCross className="h-4 w-4 ml-2 text-black  "></ImCross> : <IoMdMenu className="text-black ml-2  right h-6 w-6 "></IoMdMenu>}
        //         </div>


        //         <div className='flex items-center'>

        //             <ul className={` w-full md:w-2/3 text-lg py-2 md:flex items-center md:justify-between absolute md:static duration-500 ease-in-out container mx-auto ${open ? "top-10" : "top-[-250px]"}`}>
        //                 <div className="logo hidden md:block">
        //                     {/* <div className='flex items-center justify-items-center'>
        //                 <img className='w-10 h-10 rounded-full 'src={logo} alt=''/>
        //          <h1 className='cursor-pointer -mt-5 sp-style' onClick={() => navigate('/')}>Royal ~ Convention Hall</h1>   
        //                 </div>   */}
        //                 </div>
        //                 <div className="items md:flex mr-5">
        //                     <li className='pr-4 sm:py-2 md:mx-2 li-style text-black font-medium'><NavLink  to="/">Home</NavLink></li>
        //                     {/* <li className='p-2 md:mx-2 li-style text-black font-medium'><NavLink to="/blog">Blog</NavLink></li> */}
        //                     <li className='pr-4 sm:py-2 md:mx-2 li-style text-black  font-medium'><NavLink  to="/services">Packages</NavLink></li>
        //                     {/* <li className='p-2 md:mx-2 li-style text-black  font-medium'><NavLink style={ {borderBottom:"2px solid red"}}to="/about">About</NavLink></li> */}
        //                     <li className='pr-4 sm:py-2 md:mx-2 li-style text-black  font-medium'><NavLink  to="/contact">Contact Us</NavLink></li>
        //                     <li className='pr-4 sm:py-2 md:mx-2 li-style text-black  font-medium'><NavLink  to="/about">About</NavLink></li>

        //                     {/* {
        //                         user ?
        //                             <li style={{ cursor: 'pointer' }} className=' p-2  md:mx-2 text-red-500 font-medium' onClick={logout}>Sign Out <FontAwesomeIcon icon={faSignOut} /></li>

        //                             : <li style={{ cursor: 'pointer' }} className='p-2  md:mx-2 text-blue-700 font-medium'><Link to="/login">Sign In <FontAwesomeIcon icon={faSignIn} /></Link></li>
        //                     } */}

        //                 </div>
        //             </ul>



        //         </div>


        //     </nav>
        //     </div>
          
        
        <div className=' sticky top-0 z-50 shadow-sm'>
       

        <nav className="bg-[#ffffff] py-4 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between md:block">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <div className="flex justify-center items-center">
                           <img
                                className='w-10 h-10 rounded-full mr-3'
                                src={logo}
                                    alt="Workflow"
                            /> 
                            <h1 style={{color:"#00112B"}} className='font-bold sp-style '>Royal ~ Convention Hall</h1>
                               </div>
                        </div>
                        <div className="hidden md:flex justify-between md:ml-auto">
                            <div className="nav-item ml-10 flex items-baseline space-x-4 text-lg">
                                <NavLink
                                    to="/"
                                    className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/services"
                                    className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                >
                                  Package
                                </NavLink>
                                <NavLink
                                    to="/menu"
                                    className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                >
                                  Menu
                                </NavLink>
                                <NavLink
                                    to="/photography"
                                    className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                >
                                  PhotoGraphy
                                </NavLink>
                                {/* <NavLink
                                    to="/blog"
                                    className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Blog
                                </NavLink> */}

                             

                             
                                <NavLink
                                    to='/contact'
                                    className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Contact
                                </NavLink>
                                <NavLink
                                    to='/faq'
                                    className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    FAQ
                                </NavLink>
                                <NavLink
                                    to='/about'
                                    className="nav-btn px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    About
                                </NavLink>

                                {/* {
                                    user &&
                                    <>

                                        <NavLink className="nav-btn px-3 py-2 rounded-md text-sm font-medium" to="/manageItem">Manage Inventories</NavLink>
                                        <NavLink className="nav-btn px-3 py-2 rounded-md text-sm font-medium"to="/addItems">Add Items</NavLink>
                                        <NavLink className="nav-btn px-3 py-2 rounded-md text-sm font-medium"to="/account">My Items</NavLink>

                                    </>


                                } */}
                            </div>
                            {/* {
                                user ?
                                    <button onClick={logout} className='md:ml-24 text-red-700 bg-[#161615] border-2 border-transparent  font-medium hover:font-medium px-5 py-1 rounded-md'>Sign Out <FontAwesomeIcon icon={faSignOut} /></button>
                                    :
                                    <button  className='md:ml-24 text-sky-400 bg-[#161615] border-2 border-transparent  :150ms font-medium hover:font-medium px-5 py-1 rounded-md'><Link to="/signin">Sign In <FontAwesomeIcon icon={faSignIn} /></Link> </button>
                                    
                            }
                            */}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                    {/* {
                                user ?
                                    <button onClick={logout} className='md:ml-24 text-red-700 bg-[#0d0e0d] border-2 border-transparent font-medium hover:font-medium px-5 py-1 rounded-md'>Sign Out <FontAwesomeIcon icon={faSignOut} /></button>
                                    :
                                    <button  className='md:ml-24 text-sky-400 bg-[#141414] border-2 border-transparent font-medium hover:font-medium px-5 py-1 rounded-md'><Link to="/signin">Sign In <FontAwesomeIcon icon={faSignIn} /></Link> </button>
                                    
                            } */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-gray-900 ml-5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-400 transform"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="mobile-nav px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <NavLink
                                to="/"
                                className="hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/services"
                                className="hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Package
                            </NavLink>
                            <NavLink
                                to="/menu"
                                className="hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Menu
                            </NavLink>
                            <NavLink
                                to="/photography"
                                className="hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium"
                            >
                               PhotoGraphy
                            </NavLink>
                            <NavLink
                                to="/faq"
                                className="hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium"
                            >
                                FAQ
                            </NavLink>

                       

                            {/* <NavLink
                                to="/blog"
                                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Blog
                            </NavLink> */}

                         

                           
                            {/* {
                                user && 
                                <>
                                    <NavLink  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/manageItem">Manage Inventories</NavLink>
                                        <NavLink to='/addItems' className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Add Items</NavLink>
                                        <NavLink  className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"to="/account">My Items</NavLink>
                                </>
                             
                                
                            } */}
                            <NavLink
                                to="/contact"
                                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Contact
                            </NavLink>
                            <NavLink
                                to="/about"
                                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                About
                            </NavLink>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    </div>
    );
};

export default Navbar;