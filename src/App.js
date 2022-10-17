
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Service from './Components/Home/Service/Service';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound.js/NotFound';
import CheckOut from './Components/CheckOut/CheckOut';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import FAQ from './Components/FAQ/FAQ';
import Menu from './Components/Home/Menu';
import Photography from './Components/Home/Photography';
import AllUser from "./Components/DashBoard/Admin/AllUser";
import { ToastContainer } from "react-toastify";
import Welcome from './Components/DashBoard/Welcome';
import DashBoard from './Components/DashBoard/DashBoard';
import MyProfile from './Components/MyProfile/MyProfile';
import RequireAdmin from './Components/RequireAuth/RequireAdmin';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader/Loader'
import AddReview from './Components/DashBoard/User/AddReview';
import MyOrder from './Components/DashBoard/User/MyOrder'
import ManageOrder from './Components/DashBoard/Admin/ManageOrder';
import Discount from './Components/DashBoard/Admin/Discount';
import Payment from './Components/DashBoard/User/Payment';
import Chat from './Components/Home/Chat';

import AllClient from './Components/DashBoard/Admin/AllClient';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false)
    }, 1500);

  }, []);


  return (
    <>
      {
        isLoading === true ? <Loader /> :
          <div >
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/services' element={<Service />}></Route>

              <Route path='/about' element={<About />}></Route>
              <Route path='/signin' element={<Login />}></Route>
              <Route path="/signup" element={<Register />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/faq' element={<FAQ />}></Route>
              <Route path='/menu' element={<Menu />}></Route>

              <Route path='/photography' element={<Photography />}></Route>

              <Route path='/dashboard' element={
                <RequireAuth>
                  <DashBoard />
                </RequireAuth>

              }>
                <Route index element={<Welcome />}></Route>
                <Route path="user" element={
                  <RequireAdmin><AllUser /></RequireAdmin>

                }></Route>
                <Route path="payment/:id" element={<Payment />}></Route>
                <Route path="profile" element={<MyProfile />}></Route>
                <Route path="review" element={<AddReview />}></Route>
                <Route path="myorder" element={<MyOrder />}></Route>
                <Route path="allClient" element={
                  <RequireAdmin>  <AllClient /></RequireAdmin>
                }></Route>
             
                <Route path="manageOrder" element={
                  <RequireAdmin> <ManageOrder /></RequireAdmin>

                }></Route>
                <Route path="discount" element={
                  <RequireAdmin> <Discount /></RequireAdmin>
                }>
                </Route>
                {/* 
           
          
            <Route path="payment/:id" element={<Payment/>}></Route>
            <Route path="my-profile/edit-profile/:id" element={<UpdateProfile/>}></Route> */}

                {/* 
           
  
              
           */}
                {/* <Route path="add" element={
                <RequireAdmin> <AddTools /></RequireAdmin>
             
            }></Route>
            <Route path='updateTool/:id' element={
                <RequireAdmin> <UpdateTool/></RequireAdmin>
             
            }></Route>
            <Route path="manageTools" element={
                <RequireAdmin> <ManageTools /></RequireAdmin>
             
            }></Route> */}

              </Route>
              <Route path='/checkout/:id' element={

                <RequireAuth>
                  <CheckOut />
                </RequireAuth>

              }></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>

            <Footer />
            <ToastContainer
              position="top-center" />
          </div>

      }
    </>

  );
}

export default App;
