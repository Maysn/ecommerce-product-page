import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import NoPage from "./pages/NoPage";

function App() {
  const [cart, setCart] = useState({
    visible: false,
    items: [],
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout cart={cart} setCart={setCart} />}>
            <Route index element={<Home cart={cart} setCart={setCart} />} />
            <Route path="collection" element={<Collection />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
