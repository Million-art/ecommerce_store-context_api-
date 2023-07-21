import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
 const Register = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-10 h-screen">
        <div className="p-8 bg-white text-black p-8 rounded-lg shadow-2xl w-1/2 sm:w-1/3 md:w-1/4">
          <h2 className="text-3xl text-gray-800 font-bold mb-6 text-center">Register</h2>
          <form>
            <div className="mb-6">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="name">
                Name*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="email">
                Email*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="phone">
                Phone Number*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="password">
                Password*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="confirmPassword">
                Confirm Password*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gray-200"
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              <p className="text-gray-800">Already have an account? </p>
              <Link to="/login" className="text-blue-500 hover:text-blue-700 ml-2">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
 export default Register;