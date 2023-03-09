/**
 * todo: when finished deploy to github pages
 * instructions for depolying react app with client-side routing:
 * https://create-react-app.dev/docs/deployment/#github-pages
 * 
 * Be aware that the page will stay blank, 
 * unless you provide a basename to the <BrowserRouter />.
 * For a more detailed description, read this part of the:
 * https://reactrouter.com/en/main/router-components/router
 */

import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/Shop" element={<ShopPage/>} />
        <Route path="/Cart" element={<ShoppingCart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
