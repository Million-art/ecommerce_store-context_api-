
import { NavLink } from 'react-router-dom';
 const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        <div className="text-sm mb-4 lg:mb-0">© 2023 million Ecommerce Store. All rights reserved.</div>
        <div className="flex flex-wrap space-y-2 lg:space-y-0 lg:space-x-4">
          <NavLink to="/about" className="text-gray-300 hover:text-white">
            About
          </NavLink>
          <NavLink to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </NavLink>
          <NavLink to="/terms" className="text-gray-300 hover:text-white">
            Terms of Service
          </NavLink>
          <NavLink to="/privacy" className="text-gray-300 hover:text-white">
            Privacy Policy
          </NavLink>
        </div>
      </div>
    </footer>
  );
};
 export default Footer;