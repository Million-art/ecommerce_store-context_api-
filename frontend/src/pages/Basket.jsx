import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { cartContext } from '../context/Context';
import BasketItems from '../components/BasketItems';
import Payment from '../components/Payment';

const Basket = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [checkout, setCheckout] = useState(false);
  const { removeFromCart, total, cartItems } = useContext(cartContext);

  const handleRemove = (item) => {
    removeFromCart(item);
  };

  const handleClearCart = () => {
    cartItems.forEach((item) => removeFromCart(item));
  };

  const handleCheckout = () => {
    setCheckout(true);
  };

  return (
    <div>
      <Navbar />
      <div className="container pt-20 mt-10 mx-auto py-10">
        <h2 className="text-4xl font-bold mb-5">Your Cart ({cartItems.length})</h2>
        <div className="flex items-center">
          <div className="w-3/4">
            {cartItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cartItems.map((item) => (
                  <BasketItems handleRemove={handleRemove} item={item} key={item.id} />
                ))}
              </div>
            ) : (
              <p className="text-xl">Your cart is empty.</p>
            )}
          </div>
          <div className="w-1/3 fixed top-1/2 right-0 transform -translate-y-1/2">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold mb-2">Cart Summary</h3>
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between mb-2">
                      <p>{item.brand}</p>
                      <p>${item.price}</p>
                    </div>
                  ))}
                  <hr className="my-4" />
                  <div className="flex justify-between">
                    <p className="font-bold">Total: {total}</p>
                  </div>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 mr-10"
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </button>
                </>
              ) : (
                <p>Your cart is empty.</p>
              )}
              {cartItems.length > 0 && (
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              )}
            {checkout && (
             <div id="checkout" className="w-72 h-96 flex flex-col mt-4 bg-black p-6 rounded-lg">
              <div className="flex flex-col mb-4">
               <label htmlFor="fname" className="text-white font-bold mb-2">First Name</label>
               <input
                 className="bg-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                 onChange={(e) => setFname(e.target.value)}
                 type="text"
                 id="fname"
                 placeholder="Enter your first name"
               />
             </div>
             <div className="flex flex-col mb-4">
               <label htmlFor="lname" className="text-white font-bold mb-2">Last Name</label>
               <input
                 className="bg-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                 onChange={(e) => setLname(e.target.value)}
                 type="text"
                 id="lname"
                 placeholder="Enter your last name"
               />
             </div>
             <div className="flex flex-col mb-4">
               <label htmlFor="email" className="text-white font-bold mb-2">Email</label>
               <input
                 className="bg-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                 onChange={(e) => setEmail(e.target.value)}
                 type="email"
                 id="email"
                 placeholder="Enter your email"
               />
             </div>
             <div className="flex flex-col mb-4">
               <label htmlFor="amount" className="text-white font-bold mb-2">Amount</label>
               <input
                 className="bg-white rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                 onChange={(e) => setAmount(e.target.value)}
                 type="number"
                 id="amount"
                 placeholder="Enter the amount"
               />
             <Payment />
             </div>
           </div>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;