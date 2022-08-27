import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { auth } from '../../firebase.init';
import useService from '../../Hooks/useService';
import Type from '../Contact/Type';

const CheckOut = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    // const [services] = useService()
    //  console.log(id);
    const [services, setServices] = useState([])
    const [photoGraphyPackage, setPhotoPackage] = useState([])
    const [storePrice, setStorePrice] = useState(0)
    console.log(storePrice, 'setStorePrice');
    const [blurPhoto, setBlurPhoto] = useState({})
    console.log(blurPhoto,'blurPhoto');
    //console.log(photoGraphyPackage,"photo-pck");
    //console.log(services)


    const found = services.filter(service =>
        service._id == id
    )
    useEffect(() => {
        fetch('https://hidden-brushlands-28019.herokuapp.com/package')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    useEffect(() => {
        fetch('/photography.json')
            .then(response => response.json())
            .then(data => setPhotoPackage(data))
    }, [])


 
   
        console.log(found,'takePrice')
    useEffect(() => {
        const takePrice = found[0]?.price
             setStorePrice( takePrice)
    }, [found[0]?._id])

   
  
    //console.log(found[0]);

    const [user] = useAuthState(auth)



    const confirmOrder = e => {
        e.preventDefault();
        console.log(e, "chck e")
      
        let photoPacakage;
      console.log(e.target?.photography?.value);  
        if (e.target?.photography?.value == 'choose') {
    photoPacakage = 'own PhotoGraphy'
        } else {
            photoPacakage=e.target?.photography?.value
        }
        const foundPhoto = photoGraphyPackage.filter(photoGraphyPack =>
            photoGraphyPack.name === e.target?.photography?.value
        )
        
        console.log(foundPhoto, 'found photol');
        console.log(foundPhoto[0], 'found photo');
        let totalPrice;
   
        if (foundPhoto[0]?.price) {
            totalPrice = found[0]?.price + parseInt(foundPhoto[0].price)
            setStorePrice(totalPrice)
           
            toast.info(`You choose our photography package.That's why your updated price is ${totalPrice}`)
        }
        else {
            totalPrice = found[0]?.price
            setStorePrice( totalPrice)
       }
        console.log(totalPrice,'totalPrice')
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const sendPackage = found[0]?.name;
        const sendPrice = totalPrice;
        const image = found[0]?.img;
        const adults = e.target.adults.value;
        //const child = e.target.children.value;
        const Address = e.target.address.value;
        const checkin = e.target.checkin.value;
        const startTime = e.target.time.value;
        const description = e.target.description.value;
        const Photography= photoPacakage
        console.log(name,Photography,email, phone, sendPackage, sendPrice, adults,  checkin, startTime, description);
        const sendOrder = { name, email, phone, sendPackage, sendPrice, adults,  checkin, startTime, description, image, Address,Photography }
        fetch(`https://hidden-brushlands-28019.herokuapp.com/order`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(sendOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success(`Dear ${name}, We received your order.We will contact you soon.`)
                    e.target.reset()
                }
                else {
                    toast.error('Sorry!!There is a problem.Try again')
                }
            })

    }

    return (
        <div>
        
            <div style={{ margin: "10%" }}>
                <h1 className='text-center text-3xl sp-style mt-20'><Type /></h1>
                <form onSubmit={confirmOrder} className='mt-5 add-cover'>
                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl'>Email :</label>
                        <input type="email" id="text" name='email' placeholder='Enter your email' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>

                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl'> Name :</label>
                        <input type="text" id="text" name='name' placeholder="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>


                    <div className="mb-6">
                        <label htmlFor="phone" className='form-font font-bold text-2xl'>Your Phone :</label>
                        <input type="tel" id="phone" name="phone" placeholder="Enter Your Number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="phone" className='form-font font-bold text-2xl'>Address :</label>
                        <input type="text" id="address" name="adress" placeholder="Enter Your address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl'>Package Name :</label>
                        <input value={found[0]?.name} type="text" id="text" name='itemImage' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl'>Price :</label>
                        <input type="number" value={ storePrice } id="text" name='price' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl' htmlFor="adult">Limits of Guests :</label>
                        <input type="number" id="adult" name="adults" placeholder="Range of guests" min="1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  <p className="text-gray-900">**Must provide your guests list to the Authority</p>
                    </div>
            
                    <div className="mb-6">
                    <label className='form-font font-bold text-2xl'>PhotoGraphy(optional) :</label><br/>
                        <select name='photography' className="select select-bordered w-full max-w-xs" >
                            <option >choose</option>
                            <option>package-1</option>
                            <option>package-2</option>
                            <option>package-3</option>
                            <option>package-4</option>
                            <option>package-5</option>
                            <option>package-6</option>
                            <option>Own PhotoGraphy</option>
                            
                        </select>
                        <p className="text-gray-900">**If you want to take our photography service,choose your suitable package. 
                        OtherWise,choose your own Photography
                        
                        </p>
                    </div>
                    <div className="mb-6">
                    <label className='form-font font-bold text-2xl'>Food Menu(optional) :</label><br/>
                        <select name='menu' className="select select-bordered w-full max-w-xs" >
                            <option >choose</option>
                            <option>package-1</option>
                            <option>package-2</option>
                            <option>package-3</option>
                            <option>package-4</option>
                            <option>package-5</option>
                            <option>package-6</option>
                            <option>Own Food Menu</option>
                            
                        </select>
                        <p className="text-gray-900">**If you want to take our Food Menu service,choose your suitable package. 
                        OtherWise,choose your own Food Menu
                        
                        </p>
                    </div>

                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl' htmlFor="checkin-date">Check-in Date :</label>
                        <input type="date" id="checkin-date" name="checkin"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl' htmlFor="checkout-date">Starting Time :</label>
                        <input type="time" id="time" name="time"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className="mb-6">
                        <label className='form-font font-bold text-2xl'>Anything Else??</label>
                        <textarea rows="10" cols="80" type="text" id="text" name='description' placeholder="Tell us" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>
                    <div className='text-center'>
                        <input type="submit" className="text-white bg-[#00112B]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:w-1/5 w-1/2 px-5 py-2.5 text-center dark:bg-blue-600  dark:focus:ring-blue-800" value='Confirm' />
                    </div>
                </form>

            </div>
        </div>

    );
};

export default CheckOut;