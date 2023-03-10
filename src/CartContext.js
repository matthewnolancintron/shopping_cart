import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  const addToCart = (newItem,quantity) => {
    if(quantity > 1){
      const ItemsBeingAdded = Array.from({ length: quantity }, () => Object.assign({}, newItem));
      setItemsInCart([...itemsInCart, ...ItemsBeingAdded]);
    } else {
      setItemsInCart([...itemsInCart, newItem]);
    }
  };

  return (
    <CartContext.Provider value={{ itemsInCart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};
