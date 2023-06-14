import React, { useMemo } from "react";
import "../styles/Categories.css";
import { useProductsData } from "../context/ProductsDataContext";
import CategoriesItem from "./CategoriesItem";

function Categories() {
  const PRODUCTS_DATA = useProductsData();
  const CATEGORIES_ARRAY = useMemo(() => {
    return PRODUCTS_DATA?.reduce((categoriesArr, item) => {
      if (!categoriesArr.includes(item.category))
        categoriesArr.push(item.category);
      return categoriesArr;
    }, []);
  }, [PRODUCTS_DATA]);
  return (
    <div className="categories-list">
      {CATEGORIES_ARRAY?.map((item) => (
        <CategoriesItem key={item} item={item} />
      ))}
    </div>
  );
}

export default Categories;
