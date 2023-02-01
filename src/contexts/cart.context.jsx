// import { createContext, useReducer } from 'react';
// import { createAction } from '../Utils/reducer/reducer.utills';



// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// export const CartContext = createContext({
//   setIscartOpen: () => {},
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
// });


// export const CartProvider = ({ children }) => {
//   const [{ cartItems, isCartOpen, cartCount, cartTotal }, dispatch] =
//     useReducer(cartReducer, INITIAL_STATE);


//   const updateCartItemsReducer = (cartItems) => {
   

//     dispatch(
//       createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//         cartItems: cartItems,
//         cartTotal: newCartTotal,
//         cartCount: newCartCount,
//       })
//     );
//   };

 
//   const setIsCartOpen = (bool) => {
//     dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemToCart,
//     clearItemFromCart,
//     cartItems,
//     cartCount,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
