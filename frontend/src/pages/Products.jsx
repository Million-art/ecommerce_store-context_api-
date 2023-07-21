import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useContext } from 'react';
import { cartContext } from '../context/Context';
import ProductList from '../components/ProductList';
import {toast } from 'react-toastify';
 const Products = () => {

  const fetchAPI = async () => {
    try {
      const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');
      const shuffledData = response.data.sort(() => Math.random() - 0.5) 
      const selectedItems = shuffledData.slice(0, 20);
      return selectedItems;
    } catch (error) {
      throw new Error('Failed to fetch products');
    }
  };
  const { data, error, isLoading } = useQuery('data', fetchAPI);
  const { addToCart, cartItems } = useContext(cartContext);
   const handleAdd = (product) => {
    if (!cartItems.includes(product)) {
      addToCart(product);
      toast.info('new item added successfully',{
        position:'bottom-right'
      })
    }
  };
   if (isLoading) {
    return <p>Loading...</p>;
  }
   if (error) {
    return <p>Error: {error.message}</p>;
  }
   return (
    <>
      <h1 className="text-center text-4xl mt-20 text-blue-500 font-serif font-bold underline">Available Products</h1>
      <div className="flex flex-row justify-between mt-20">
        <div className="flex flex-row flex-wrap w-3/4">
          {data && data.map((product) => (
           
            <ProductList
              key={product.id}
              product={product}
              handleAdd={handleAdd}
              disabled={cartItems.includes(product)}
            />
            
          ))}
        </div>
        <div className="pr-5 w-1/4 text-center text-2xl">
          <h3>Filter By</h3>
          <select className="border-2 border-gray-300 rounded-lg p-2 mt-2">
            <option value="option1">New Coming</option>
            <option value="option2">Top Rated</option>
            <option value="option3">Top Discount</option>
            <option value="option3">Cheap Price</option>
          </select>
          <div>
            <h2 className="text-red-400 mt-10">Ad's Here</h2>
          </div>
        </div>
      </div>
    </>
  );
};
 export default Products;