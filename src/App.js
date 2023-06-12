import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import { ProductsDataProvider } from "./context/ProductsDataContext";
import FullCollection from "./pages/FullCollection";
import Category from "./pages/Category";
import Header from "./components/Header";

function App() {
  return (
    <ProductsDataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collection" element={<FullCollection />} />
        <Route
          path="fragrances"
          element={<Category requiredCategory={"fragrances"} />}
        />
        <Route
          path="groceries"
          element={<Category requiredCategory={"groceries"} />}
        />
        <Route
          path="home-decoration"
          element={<Category requiredCategory={"home-decoration"} />}
        />
        <Route
          path="laptops"
          element={<Category requiredCategory={"laptops"} />}
        />
        <Route
          path="skincare"
          element={<Category requiredCategory={"skincare"} />}
        />
        <Route
          path="smartphones"
          element={<Category requiredCategory={"smartphones"} />}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </ProductsDataProvider>
  );
}

export default App;
