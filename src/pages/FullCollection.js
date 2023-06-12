import React from "react";
import { useProductsData } from "../context/ProductsDataContext";
import Collection from "../components/Collection";

function FullCollection(props) {
  const productsData = useProductsData();
  console.log(productsData);

  return <Collection list={productsData} />;
}

export default FullCollection;
