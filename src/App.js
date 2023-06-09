import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import { ProductsDataProvider } from "./context/ProductsDataContext";

function App() {
  return (
    <ProductsDataProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collection" element={<Collection />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </ProductsDataProvider>
  );
}

export default App;
