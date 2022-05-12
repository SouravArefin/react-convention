import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { auth } from '../../firebase.init';
import useService from '../../Hooks/useService';
import Type from '../Contact/Type';

const CheckOut = () => {
    const { id } = useParams()
    // const [services] = useService()
    console.log(id);
    const [services, setServices] = useState([])
   console.log(services)
    
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
        .then(data=> setServices(data))
    }, [])
   

   const found= services.filter(service => 
        service.id == id
       )
    console.log(found[0]);
     
    const [user] = useAuthState(auth)
   
   

    const confirmOrder = e => {
        e.preventDefault();
        toast.success('We received your order.We will contact you soon.')
    }
    return (
        <div style={{ margin: "10%" }}>
           <h1 className='text-center text-3xl sp-style mt-20'><Type/></h1>
            <form onSubmit={confirmOrder} className='mt-5'>
                <div className="mb-6">
                    <label>Email:</label>
                    <input value={user?.email} type="email" id="text" name='email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>

                <div className="mb-6">
                    <label> Name:</label>
                    <input type="text" id="text" name='itemName' placeholder="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>


                <div className="mb-6">
                    <label htmlFor="phone">Your Phone</label>
                    <input type="tel" id="phone" name="visitor_phone" placeholder="Enter Your Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label>Package Name:</label>
                    <input value={ found[0]?.name} type="text" id="text" name='itemImage' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label>Price:</label>
                    <input type="number" value={ found[0]?.price} id="text" name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="adult">Adults</label>
                    <input type="number" id="adult" name="total_adults" placeholder="Quantity of Adults" min="1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="child">Children</label>
                    <input type="number" id="child" name="total_children" placeholder="Quantity of Children" min="0"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div className="mb-6">
                    <label htmlFor="checkin-date">Check-in Date</label>
                    <input type="date" id="checkin-date" name="checkin"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="mb-6">
          <label htmlFor="checkout-date">Starting Time</label>
                    <input type="time" id="checkout-date" name="checkout"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"required />
        </div>
                <div className="mb-6">
                    <label>Anything Else??</label>
                    <textarea rows="10" cols="80" type="text" id="text" name='description' placeholder="Tell us" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className='text-center'>
                    <input type="submit" className="text-white bg-[#445e05]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w-1/5 w-1/2 px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800" value='Confirm' />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;