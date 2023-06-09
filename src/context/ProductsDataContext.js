import { useContext, useState, useEffect, createContext } from "react";

const ProductsDataContext = createContext();

export function useProductsData() {
  return useContext(ProductsDataContext);
}

export function ProductsDataProvider({ children }) {
  const [productsData, setProductsData] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProductsData(data.products));
  }, []);

  return (
    <ProductsDataContext.Provider value={productsData}>
      {children}
    </ProductsDataContext.Provider>
  );
}
