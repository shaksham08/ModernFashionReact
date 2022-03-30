import { Routes, Route } from "react-router-dom";
import Navbar from "components/NavBar";
import Footer from "components/Footer";
import Homepage from "pages/Homepage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
