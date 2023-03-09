/**
 * let user navigate between the pages
 * shown on both the homepage and the ShopPage components
 */

import {Link} from 'react-router-dom';

export default function NavigationBar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Shop">Shop</Link>
                </li>
            </ul>
        </nav>
    );
}