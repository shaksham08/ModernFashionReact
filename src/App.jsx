import styles from "./App.module.less";
import { Routes, Route } from "react-router-dom";

const Demo = () => {
  return <h1>Demo Component</h1>;
};

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Demo />} />
      </Routes>
    </div>
  );
}

export default App;
