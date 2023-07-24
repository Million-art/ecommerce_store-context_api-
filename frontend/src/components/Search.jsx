 
import React from 'react';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { cartContext } from '../context/Context';
 const Search = ({ disabled, searchResult }) => {
  const { addToCart, cartItems } = useContext(cartContext);
   const handleAdd = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      toast.warning('Item is already in the cart', {
        position: 'bottom-right',
      });
    } else {
      addToCart(product);
      toast.info('New item added successfully', {
        position: 'bottom-right',
      });
    }
  };
   return (
    <div className="h-full">
      {typeof searchResult === 'string' && searchResult.toLowerCase().includes('no result') ? (
        <h1 className="text-4xl mt-10 bg-white p-5">No result</h1>
      ) : (
        <div className="product-container flex flex-col px-4 py-6 m-4 w-[230px] bg-white border-gray-300 rounded-lg">
          <h1>Your search result</h1>
          <div className="img">
            <img
              src={searchResult.image_link}
              className="object-cover w-full h-[150]"
              alt={searchResult.brand}
            />
            <p>Name: {searchResult.brand}</p>
            <p>Category: {searchResult.category}</p>
          </div>
          <p className="mt-4 text-red-900">{searchResult.price}$</p>
          {searchResult && (
            <button
              onClick={() => handleAdd(searchResult)}
              disabled={disabled}
              className="text-center text-white text-2xl rounded-lg bg-green-500 hover:bg-green-700"
            >
              Buy
            </button>
          )}
        </div>
      )}
    </div>
  );
};
 export default Search;