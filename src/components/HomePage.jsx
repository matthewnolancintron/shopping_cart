/**
 * todo: add navigation component to home page
 * add imgs or just some basic info doesn't matter
 * 
 * main goal of the project is to focus
 * on setting up the shopping cart.
 * 
 * The homepage is there to practice routing 
 * using react-router-dom.
 */

import NavigationBar from "./NavigationBar";

export default function HomePage(){
    return(
        <section>
            <NavigationBar/>
            <h1>home page</h1>
        </section>
    );
}