import { Routes, Route } from "react-router-dom";
import Navbar from "components/NavBar";
import Footer from "components/Footer";
import Homepage from "pages/Homepage";
import Products from "pages/Products";
import Wishlist from "pages/WishList";
import Cart from "pages/Cart";
import Login from "pages/Login";
import SignUp from "pages/SignUp";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
