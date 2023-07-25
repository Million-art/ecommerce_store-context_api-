import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { cartContext } from '../context/Context';
import { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
 const Navbar = () => {
  const { addToCart, cartItems } = useContext(cartContext);
  const [products, setProducts] = useState([]);
  const [searchResult, setSearchResult] = useState('');
  const [search, setSearch] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [mobileSize, setMobileSize] = useState(window.innerWidth < 768);
  const [loading, setLoading] = useState(false); // Add loading state
   const handleSearch = async () => {
    if (!search) return;
     try {
      setLoading(true); // Set loading to true
      const response = await axios.get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?search=${search}`
      );
      const products = response.data;
       setProducts(products);
      const foundProduct = products.find(
        (product) =>
          product.brand &&
          product.brand.toLowerCase() === search.toLowerCase()
      );
       setSearchResult(foundProduct ? foundProduct : 'No result');
      setLoading(false); // Set loading to false after search is complete
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false if there's an error
    }
  };
   useEffect(() => {
    const handleResize = () => {
      setMobileSize(window.innerWidth < 768);
    };
     window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
   const toggleMenu = () => setShowMenu(!showMenu);
   return (
    <div className='fixed top-0 left-0 right-0 h-20 bg-white'>
    <div className=' flex flex-row justify-between'>
      <NavLink to='/'>
        <h1 className='font-serif text-3xl ml-5 mt-2 text-yellow-700  cursor-pointer outline-double px-4'>Mi Cosmotics</h1>
      </NavLink>
    </div>
    <div className=" flex flex-col px-4 bg-white shadow">
      <div className="hidden md:flex flex-row justify-between gap-6 mt-2 pt-4 text-lg font-medium">
        <div>
          <NavLink
            className="ml-4 hover:text-green-500 active:text-green-500 active:text-2xl"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="ml-4 hover:text-green-500 active:text-green-500"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="ml-4 hover:text-green-500 active:text-green-500"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
        <span className="flex items-center">
          <input
            type="text"
            name="search"
            placeholder="search here..."
            className="w-[500px] px-4 py-2 rounded-md bg-gray-100 shadow-inner focus:outline-none mr-5"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch
            className="mr-2 text-2xl cursor-pointer text-gray-700 text-blue-700"
            onClick={handleSearch}
          />
        </span>
        <div className="flex flex-row justify-between gap-6">
          {cartItems.length >= 1 && (
            <span className="flex flex-row justify-between gap-5">
              <NavLink
                className="ml-4 hover:text-green-500 flex flex-row justify-between"
                to="/basket"
              >
                <FaShoppingCart className="mt-2" />
                <sup>{cartItems.length}</sup>
              </NavLink>
            </span>
          )}
          <NavLink
            className="md:block px-5 hover:bg-blue-600 bg-blue-500 text-white rounded-md pt-1 cursor-pointer"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
      {mobileSize && (
        <FaBars
          className="mt-2 w-10 h-5 md:hidden cursor-pointer mt-7"
          onClick={toggleMenu}
        />
      )}
      {/* Mobile menu dropdown */}
      {showMenu && (
        <div className="md:hidden flex flex-col gap-4 mt-2 pt-4 text-lg font-medium ml-10 mt-20 text-white bg-gray-900">
          <FaTimes
            className="ml-[90%] cursor-pointer text-red-700"
            onClick={() => setShowMenu(false)}
          />
          <NavLink
            className="ml-4 hover:text-green-500 active:text-green-500 active:text-2xl"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="ml-4 hover:text-green-500 active:text-green-500"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="ml-4 hover:text-green-500 active:text-green-500"
            to="/contact"
          >
            Contact
          </NavLink>
          {cartItems.length >= 1 && (
            <span className="flex flex-row justify-between gap-5">
              <NavLink
                className="ml-4 hover:text-green-500 flex flex-row justify-between"
                to="/basket"
              >
                <FaShoppingCart className="mt-2" />
                <sup>{cartItems.length}</sup>
              </NavLink>
            </span>
          )}
          <NavLink
            className="md:block px-5 hover:bg-blue-600 bg-blue-500 text-white rounded-md  cursor-pointer ml-3 mb-5 w-[100px]"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      )}
      {loading && <div>Loading...</div>} {/* Render loading animation */}
      {searchResult && 
         (<Search 
        searchResult={searchResult}
         disabled={cartItems.includes(searchResult)} 
    />)
    }
     </div>
    </div>
  );
};
 export default Navbar;