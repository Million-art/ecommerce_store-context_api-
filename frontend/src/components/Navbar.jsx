import './style.css';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { cartContext } from '../context/Context';
import { useContext } from 'react';
 const Navbar = () => {
  const { cartItems } = useContext(cartContext);
  const handleSearch=()=>{

  }
   return (
    <div className="fixed top-0 left-0 right-0 h-20 flex flex-col px-4 bg-white shadow">
      <div className="hidden md:flex flex-row justify-between gap-6 mt-2 pt-4 text-lg font-medium">
        <div>
          <NavLink className="ml-4 hover:text-green-500 active:text-green-500 active:text-2xl"  to="/">
            Home
          </NavLink>
          <NavLink className="ml-4 hover:text-green-500 active:text-green-500" to="/about">
            About
          </NavLink>
          <NavLink className="ml-4 hover:text-green-500 active:text-green-500" to="/contact">
            Contact
          </NavLink>
        </div>
        <span className="flex items-center">
          <input
            type="text"
            name="search"
            placeholder='search here...'
            className=" w-64 px-4 py-2 rounded-md bg-gray-100 shadow-inner  focus:outline-none   mr-5"
          />
          <FaSearch className="mr-2 text-2xl cursor-pointer text-gray-500  text-blue-600 hover:text-blue-700" onClick={()=>handleSearch()} />
        </span>
        <div className="flex flex-row justify-between gap-6">
          {cartItems.length >= 1 && (
            <span className="flex flex-row justify-between gap-5">
              <NavLink className="ml-4 hover:text-green-500 flex flex-row justify-between" to="/basket">
                <FaShoppingCart />
                <sup>{cartItems.length}</sup>
              </NavLink>
            </span>
          )}
          <NavLink
            className="hidden md:block mr-0 p-3 px-6 text-white text-sm bg-blue-500 hover:bg-blue-700 font-bold cursor-pointer rounded-full ml-4 shadow-md"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};
 export default Navbar;