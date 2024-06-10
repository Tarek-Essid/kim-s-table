import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Error from './Pages/Error/Error';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Profile from './Pages/Profile/Profile';
import { useDispatch } from 'react-redux';
import { current } from './Redux/Actions/user';
import FoodProduct from './Pages/FoodProduct/FoodProduct';
import Add from './Pages/Add/Add';
import Edit from './Pages/Edit/Edit';
import HideNavBar from './Components/HideNavBar/HideNavBar';
import HideFooter from './Components/HideFooter/HideFooter';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Uploads from './Pages/uploads/Uploads';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(current());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <HideNavBar>
        <NavBar />
      </HideNavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Menu" element={<FoodProduct />} />
        <Route path="/Add-Product" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/*" element={<Error />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/uploads" element={<Uploads />} />
      </Routes>
      <HideFooter>
        <Footer />
      </HideFooter>
    </div>
  );
}

export default App;
