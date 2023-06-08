import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import NoPage from "./pages/NoPage";

function App() {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // console.log(products);

  const [cart, setCart] = useState({
    visible: false,
    items: [],
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout cart={cart} setCart={setCart} />}>
          <Route element={<Home cart={cart} setCart={setCart} />} />
          <Route index element={<Collection cart={cart} setCart={setCart} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
