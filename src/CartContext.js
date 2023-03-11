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

      //start here
      /**
       * work implementing a total price
       * need to update when object isn't already in the
       * cart below
       * 
       * also see why total price isn't updating after the first update?
       * 
       * need to update shopping cart to display
       * number of items not based on the number of items in the array
       * but based on the total quanity of the items in the cart.
       * 
       * update the cart page to display a total and a checkout or
       * payment section then move onto steps 7, 8, 9, 10.
       * 
       * could just leave the total price for the cart page
       * and just display the quanity as is here or for each object
       * in cart
       * 
       * the calculation would only need to take place their and
       * require less messing with the code here.
       * 
       * todo clean up change below and move on to new solution.
       * 
       */

      const updatedTotalPriceObject = {
        ...updatedObjectQuanitity, // copy all the key-value pairs from the original object
        totalPrice: amount > 1 ?
         parseFloat(updatedObjectQuanitity.price) * parseInt(updatedObjectQuanitity.quantity) :
         parseFloat(updatedObjectQuanitity.price) + parseFloat(updatedObjectQuanitity.price) ,
      }


      // Create a new array that contains all the objects from the old state array.
      const itemsInCartCopy = [...itemsInCart];
      
      // Replace the old object at that index with the new object.
      itemsInCartCopy[indexOfnewItemInCart] = updatedTotalPriceObject;
      //
      setItemsInCart(itemsInCartCopy);
    };

    if (isItemAlreadyInCart) {
      updateQuantityOfItemAlreadyInCart(newItem, quantity);
    } else {
        // Create a new object that has the updated `quantity` key-value pair.
        const itemWithAddedQuanityProp = {
          ...newItem,  // copy all the key-value pairs from the original object
          quantity: parseInt(quantity) // update the `quantity` key-value pair
        };
        setItemsInCart([...itemsInCart, itemWithAddedQuanityProp]);
    }

  };

  return (
    <CartContext.Provider value={{ itemsInCart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};