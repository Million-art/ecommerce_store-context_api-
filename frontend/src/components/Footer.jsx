 
import React from 'react';
 const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        <div className="text-sm mb-4 lg:mb-0">© 2022 Your Ecommerce Store. All rights reserved.</div>
        <div className="flex flex-wrap space-y-2 lg:space-y-0 lg:space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
 export default Footer;