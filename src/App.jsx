import { Routes, Route } from "react-router-dom";
import Navbar from "components/NavBar";
import Footer from "components/Footer";
import Homepage from "pages/Homepage";
import Products from "pages/Products";
import Wishlist from "pages/WishList";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
