import { Routes, Route } from "react-router-dom";
import Navbar from "components/NavBar";

const Demo = () => {
  return <h1>home</h1>;
};

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
