import {Link} from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../CartContext';

export default function NavigationBar(){
    const { itemsInCart } = useContext(CartContext);
    return(
        <nav className='NavigationBar'>
            <ul className='NavigationItems'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Shop">Shop</Link>
                </li>
                <li>
                    <Link to="/Cart">Cart ({itemsInCart.length})</Link>
                </li>
            </ul>
        </nav>
    );
}