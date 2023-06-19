import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import {
  ShoppingCartProvider,
  useShoppingCart,
} from "./context/ShoppingCartContext";
import { ProductsDataProvider } from "./context/ProductsDataContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import FullCollection from "./pages/FullCollection";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import NoPage from "./pages/NoPage";

function App() {
  const { cart } = useShoppingCart();
  console.log(cart);
  return (
    <ProductsDataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collection" element={<FullCollection />} />
        <Route
          path="checkout"
          element={
            cart.length > 0 ? (
              <Checkout />
            ) : (
              <Navigate replace to={"/collection"} />
            )
          }
        />
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
          path="smartphones"
          element={<Category requiredCategory={"smartphones"} />}
        />
        <Route
          path="skincare"
          element={<Category requiredCategory={"skincare"} />}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </ProductsDataProvider>
  );
}

export default App;
