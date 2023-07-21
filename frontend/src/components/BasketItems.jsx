import { useContext, useState } from "react";
import { cartContext } from "../context/Context";
 const BasketItems = ({ handleRemove, item }) => {
  const { state, dispatch } = useContext(cartContext);
  const [quantity, setQuantity] = useState(1);
   const handleIncreaseQuantity = (itemId) => {
    dispatch({ type: 'increase quantity', payload: itemId });
    setQuantity((prevQuantity) => prevQuantity + 1);

  };
   const handleDecreaseQuantity = (itemId) => {
    dispatch({ type: 'decrease quantity', payload: itemId });
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
   return (
    <div key={item.id} className="bg-white rounded-lg shadow-md">
      <img
        src={item.image_link}
        alt={item.brand}
        className="w-80 h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{item.brand}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <p className="text-gray-800 font-bold mb-2">${item.price}</p>
        <div className="flex items-center text-gray-800 font-bold mb-2">
          <span className="mr-2">Quantity</span>
          {quantity > 1 && (
            <button
              className="border border-gray-400 rounded px-2 py-1"
              onClick={() => handleDecreaseQuantity(item.id)}
            >
              -
            </button>
          )}
          <span className="mx-2">{quantity}</span>
          <button
            className="border border-gray-400 rounded px-2 py-1"
            onClick={() => handleIncreaseQuantity(item.id)}
          >
            +
          </button>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => handleRemove(item)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
 export default BasketItems;