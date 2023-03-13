import { BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from './CartContext';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/shopping_cart">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Shop" element={<ShopPage/>}/>
          <Route path="/Cart" element={<ShoppingCart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
