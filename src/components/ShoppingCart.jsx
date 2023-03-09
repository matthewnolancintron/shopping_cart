/**
 *  a user should see a sticky bar 
 * (it can be just a top section as well),
 *  which displays the number of items currently in the cart.
 *  You should also have a button next to it 
 * where you can go to the cart to checkout and pay 
 * (however we are not going to implement this logic here).
 */

import NavigationBar from "./NavigationBar";

export default function ShoppingCart(){
    return(
        <section>
        <NavigationBar/>
        <h1>cart</h1>
    </section>
    );
}