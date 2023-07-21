import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useContext } from 'react';
import { cartContext } from '../context/Context';
import ProductList from '../components/ProductList';
import { toast } from 'react-toastify';
import '../style/style.css'
 const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState('option1'); // Default filter option
   const fetchAPI = async () => {
    try {
      const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json');
      const shuffledData = response.data.sort(() => Math.random() - 0.5);
 
       // Filter products based on selected filter option
      let selectedItems = shuffledData;
      if (selectedFilter === 'option1') {
        // Filter logic for 'powder'
        selectedItems = shuffledData.filter(product => product.category='powder');

      }
       else if (selectedFilter === 'option2') {
        // Filter logic for 'pencil'
        selectedItems = shuffledData.filter(product => product.category='pencil');
      } else if (selectedFilter === 'option3') {
        // Filter logic for 'all'
        selectedItems = shuffledData.filter(product => product.price > 0 && price !==null);
      } else if (selectedFilter === 'option4') {
        // Filter logic for 'liuis'
        selectedItems = shuffledData.filter(product => product.category='liquid');
      } 
      else if (selectedFilter === 'option5') {
        // Filter logic for 'cream'
        selectedItems = shuffledData.filter(product => product.category='cream');
      } 
       selectedItems = selectedItems.slice(0, 20); // Limit the number of selected items
       return selectedItems;
    } catch (error) {
      throw new Error('Failed to fetch products');
    }
  };
   const { data, error, isLoading } = useQuery(['data', selectedFilter], fetchAPI); // Include selectedFilter as a dependency
   const { addToCart, cartItems } = useContext(cartContext);
   const handleAdd = (product) => {
    if (!cartItems.includes(product)) {
      addToCart(product);
      toast.info('New item added successfully', {
        position: 'bottom-right',
      });
    }
  };
   const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };
   if (isLoading) {
    return <div className="spinner"> </div>; // show the spinner when loading
  }
   if (error) {
    return <p>Error: {error.message}</p>;
  }
   return (
    <>
      <h1 className="text-center text-4xl mt-20 text-blue-500 font-serif font-bold underline">Available Products</h1>
      <div className="flex flex-row justify-between mt-20">
        <div className="flex flex-row flex-wrap w-3/4">
          {data && data.length > 0 ? (
            data.map((product) => (
              <ProductList
                key={product.id}
                product={product}
                handleAdd={handleAdd}
                disabled={cartItems.includes(product)}
              />
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
        <div className="pr-5 w-1/4 text-center text-2xl">
          <h3>Filter by category</h3>
          <select className="border-2 border-gray-300 rounded-lg p-2 mt-2" id='filter' onChange={handleFilterChange}>
            <option value="option3">All</option>
            <option value="option1">powder</option>
            <option value="option2">pencil</option>
            <option value="option4">liquid</option>
            <option value="option5">cream</option>
             <option value="option6">Cheap Price</option>
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