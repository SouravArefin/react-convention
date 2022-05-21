
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
//import RequireAuth from './Components/RequireAuth/RequireAuth';
import FAQ from './Components/FAQ/FAQ';
import Menu from './Components/Home/Menu';
import Photography from './Components/Home/Photography';



function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path = '/services' element={<Service/>}></Route>
        <Route path = '/blog' element={<Blog/>}></Route>
        <Route path = '/about' element={<About/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route> 
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/faq' element={<FAQ />}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/photography' element={<Photography/>}></Route>
        
        <Route path='/checkout/:id' element={
          
      //     <RequireAuth>
      //     
      //  </RequireAuth>
      <CheckOut />
        }></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
