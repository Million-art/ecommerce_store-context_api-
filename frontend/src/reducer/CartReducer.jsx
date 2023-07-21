export const initialState = {
  cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): [],
  total: 0,

};
 export const reducer = (state, action) => {
   
  switch (action.type) {
    case 'add':
      return {
        ...state,
        cartItems: action.payload
      };
    case 'remove':
      return {
        ...state,
        cartItems: action.payload
      };
    case 'update price':
      return {
        ...state,
        total: action.payload
      };
    case 'increase_quantity':
      const increasedItems = state.cartItems.map(item => {
        // add an attribute called quantity to the item
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
            price: item.price * (item.quantity + 1) 
            
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: increasedItems
      };
    case 'decrease_quantity':
      const decreasedItems = state.cartItems.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
            price: item.price * (item.quantity - 1)  

          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: decreasedItems
      };
    default:
      return state;
  }
};