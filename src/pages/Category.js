import React from "react";
import { useProductsData } from "../context/ProductsDataContext";
import Collection from "../components/Collection";

function Category({ requiredCategory }) {
  const PRODUCTS_DATA = useProductsData();
  const ITEMS_ARRAY = PRODUCTS_DATA?.reduce((Arr, item) => {
    if (item.category === requiredCategory) Arr.push(item);
    return Arr;
  }, []);

  return <Collection list={ITEMS_ARRAY} />;
}

export default Category;
