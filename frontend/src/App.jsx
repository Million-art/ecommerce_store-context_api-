import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Basket from './pages/Basket';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Context from './context/Context'
import { ToastContainer } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css'
 export default function App() {
  return (
    <Context>
       <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
        </Routes>
      </Router>
    </Context>
   );
}