import React, { useState } from "react";
import "../styles/Collection.css";
import { useProductsData } from "../context/ProductsDataContext";
import StoreItem from "../components/StoreItem";

function Collection({}) {
  const productsData = useProductsData();
  console.log(productsData);
  return (
    <div className="collection">
      {productsData?.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Collection;
