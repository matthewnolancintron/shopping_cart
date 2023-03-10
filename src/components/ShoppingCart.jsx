/**
 * have items the were added to cart show on this page.
 * and a payment option too.
 */

import React from 'react'; 
import { CartContext } from '../CartContext';
import NavigationBar from "./NavigationBar";

export default function ShoppingCart(){
    const { itemsInCart } = React.useContext(CartContext);
    return(
        <section>
        <NavigationBar/>
        <h1>cart</h1>
        {itemsInCart.map((item)=>{
            /**todo create itemInCartProductCard component */
        })}
        </section>
    );
}