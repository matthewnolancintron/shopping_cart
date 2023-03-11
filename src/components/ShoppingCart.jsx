/**
 * have items the were added to cart show on this page.
 * and a payment option too.
 */

import React from 'react'; 
import { CartContext } from '../CartContext';
import NavigationBar from "./NavigationBar";
import ItemInCartCard from "./ItemInCartCard";


export default function ShoppingCart(){
    const { itemsInCart } = React.useContext(CartContext);
    const itemsInCartComponentList = itemsInCart.map((item)=>(
        <li key={item.id}>
            <ItemInCartCard productInCart={item}/>
        </li>
    ));

    return(
        <section>
        <NavigationBar/>
        <h1>cart</h1>
        <ul>
        {itemsInCart.length == 0 ? <h1>you have no items in your cart</h1> : itemsInCartComponentList
        } 
        </ul>
        </section>
    );
}