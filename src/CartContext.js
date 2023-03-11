import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  const addToCart = (newItem, quantity) => {
    const isItemAlreadyInCart = itemsInCart.map(item => item.id).includes(newItem.id);
    const updateQuantityOfItemAlreadyInCart = (itemToUpdate, amount) => {
      // get index of the item being added in the current cart
      const indexOfnewItemInCart = itemsInCart.map(item => item.id).indexOf(itemToUpdate.id);

      // console.log(itemsInCart[indexOfnewItemInCart].hasOwnProperty('quantity'));

      // Create a new object that has the updated `quantity` key-value pair.
      const updatedObjectQuanitity = {
        ...itemsInCart[indexOfnewItemInCart],  // copy all the key-value pairs from the original object
        quantity: itemsInCart[indexOfnewItemInCart].hasOwnProperty('quantity') ?
          parseInt(itemsInCart[indexOfnewItemInCart].quantity) + parseInt(amount) : parseInt(amount) + 1 // update the `quantity` key-value pair
      };

      // Create a new array that contains all the objects from the old state array.
      const itemsInCartCopy = [...itemsInCart];
      
      // Replace the old object at that index with the new object.
      itemsInCartCopy[indexOfnewItemInCart] = updatedObjectQuanitity;
      //
      setItemsInCart(itemsInCartCopy);
    };

    if (isItemAlreadyInCart) {
      updateQuantityOfItemAlreadyInCart(newItem, quantity);
    } else {
      if (quantity > 1) {
        // Create a new object that has the updated `quantity` key-value pair.
        const itemWithAddedQuanityProp = {
          ...newItem,  // copy all the key-value pairs from the original object
          quantity: parseInt(quantity) // update the `quantity` key-value pair
        };
        setItemsInCart([...itemsInCart, itemWithAddedQuanityProp]);

      } else {
        setItemsInCart([...itemsInCart, newItem]);
      }

    }

  };

  return (
    <CartContext.Provider value={{ itemsInCart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};