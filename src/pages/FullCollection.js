import React from "react";
import { useProductsData } from "../context/ProductsDataContext";
import Collection from "../components/Collection";

function FullCollection() {
  const productsData = useProductsData();
  console.log(productsData);

  return productsData ? <Collection list={productsData} /> : "";
}

export default FullCollection;
