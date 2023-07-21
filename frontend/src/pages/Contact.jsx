import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
 const Contact = () => {
  return (
   <>
   <Navbar/>
    <div className="flex justify-center items-center h-screen">
      <div className="bg-black text-white p-8 rounded shadow w-1/2 sm:w-1/3 md:w-1/4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <form>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white  text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white  text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white  leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your message"
              rows="5"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
    </> 
  );
};
 export default Contact;