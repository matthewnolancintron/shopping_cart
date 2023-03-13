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


    const totalPrice = 
    ((
        //add up each items total price,
        //which is the quantity of each item 
        //multiplied by it's price 
        itemsInCart.reduce((accumulator,item) =>
        accumulator + (item.quantity*item.price) ,0)
    ));


    return(
        <section>
        <NavigationBar/>
        <h1>cart</h1>
        <ul>
        {itemsInCart.length == 0 ? <h1>you have no items in your cart</h1> : itemsInCartComponentList
        } 
        </ul>
        <br></br>
        <p> Your total ${totalPrice.toFixed(2)}</p>
        </section>
    );
}