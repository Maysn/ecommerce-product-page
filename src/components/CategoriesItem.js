import React, { useMemo } from "react";
import "../styles/Categories.css";
import { CAPITALIZE_WORDS } from "../utilities/capitalizeWords";
import { Link } from "react-router-dom";

function CategoriesItem({ item }) {
  const CATEGORY_ITEM = useMemo(() => {
    return CAPITALIZE_WORDS(item);
  }, [CAPITALIZE_WORDS]);
  return (
    <span className="categories-item">
      <Link to={`${item}`}>{CATEGORY_ITEM}</Link>
    </span>
  );
}

export default CategoriesItem;
