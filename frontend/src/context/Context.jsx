import { createContext, useReducer } from 'react';
import { reducer, initialState } from '../reducer/CartReducer';
 export const cartContext = createContext();
 const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
   const addToCart = (product) => {
    const updatedCart = [...state.cartItems, product];
    dispatch({ type: 'add', payload: updatedCart });
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };
   const removeFromCart = (item) => {
    const updatedCartItems = state.cartItems.filter(
      (product) => product.id !== item.id
    );
    dispatch({ type: 'remove', payload: updatedCartItems });
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

  };
   const calculateTotal = () => {
    let total = 0;
    state.cartItems.forEach((item) => {
      total += parseFloat(item.price);
    });
    return total.toFixed(2); // Format total to 2 decimal places
  };
   const value = {
    cartItems: state.cartItems,
    total: calculateTotal(),
    addToCart,
    removeFromCart,
    calculateTotal,
    dispatch
  };
   return (
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>
  );
};
 export default Context;