import { useContext } from 'react';
import Navbar from '../components/Navbar';
import { cartContext } from '../context/Context';
import BasketItems from '../components/BasketItems';
 const Basket = () => {
  const { removeFromCart, total, cartItems } = useContext(cartContext);
  
  const handleRemove = (item) => {
    removeFromCart(item);
  };
  
  const handleClearCart = () => {
    cartItems.forEach((item) => removeFromCart(item));
     
  };
   return (
    <div>
      <Navbar />
      <div className="container pt-20 mt-10 mx-auto py-10">
        <h2 className="text-4xl font-bold mb-5">Your Cart({cartItems.length})</h2>
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
          <div className="w-1/4 fixed top-1/2 right-0 transform -translate-y-1/2">
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
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 export default Basket;