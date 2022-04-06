import { Routes, Route } from "react-router-dom";
import Navbar from "components/NavBar";
import Footer from "components/Footer";
import Homepage from "pages/Homepage";
import Products from "pages/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
