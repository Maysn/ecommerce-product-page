import React, { useState } from "react";
import "../styles/collection.css";
import { useProductsData } from "../context/ProductsDataContext";
import StoreItem from "../components/StoreItem";

function Collection({}) {
  const productsData = useProductsData();
  console.log(productsData);
  return (
    <div
      className="collection"
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "0 1rem",
        flexWrap: "wrap",
      }}
    >
      {productsData?.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Collection;
