import React, { createContext, useReducer } from "react";

import { CartReducer } from "./cartReducer";

export const CartContext = createContext();//hadi li ghan hozzoha men useCintexte, hada howa value

const Storage =  sessionStorage.getItem('cart') ? JSON.parse(sessionStorage.getItem('cart')) : []; // parse nhawloh l JSON

const initialState = { cartItems: Storage} // initial storage kan hozzo m session 

const CartContextProvider = ({ children }) => {//bash nqedro nstakhdmoha bin different components, children ghaykon App, ghanzidoha f return
  const [state, dispatch] = useReducer(CartReducer, initialState); //dispatch howa action, ghaymshi l CartReducer function w ela hsab param li f dispatch ghay eml function, initiale State howa kif kikon page f lowel qbl dispatch, hnaya initiale state howa lija m session, la emlna refresh ghayban li f session, sinon refresh w makanchi session ghay khtafi kolshi

  const addProduct = payload => { 
    dispatch({ type: 'ADD', payload });
    return state.cartItems;
  }

  const removeProduct = payload =>
  {
    dispatch({ type: 'REMOVE', payload });
    return state.cartItems; // bash neemloha f setCart
  }

  const increaseQuantity = payload => 
  {
    dispatch({ type: 'INCQTY', payload });
    return state.cartItems;
  }

  const decreaseQuantity = payload => 
  {
    dispatch({ type: 'DECQTY', payload });
    return state.cartItems;
  }

  const clearBasket = () => {
    dispatch({ type: 'CLEAR', payload: undefined });
    return state.cartItems;
  }

  const getCartItems = () => {
    return state.cartItems;
  }

  const contextValues = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearBasket,
    getCartItems, // ha elsh context
    ...state
  }

  return (
    <CartContext.Provider value={contextValues} >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;