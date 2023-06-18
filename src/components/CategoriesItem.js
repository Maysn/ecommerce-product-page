import React, { useMemo } from "react";
import "../styles/Categories.css";
import { CAPITALIZE_WORDS } from "../utilities/capitalizeWords";
import { Link } from "react-router-dom";

function CategoriesItem({ item }) {
  const CATEGORY_ITEM = useMemo(() => {
    return CAPITALIZE_WORDS(item);
  }, [CAPITALIZE_WORDS]);
  return (
    <Link to={`${item}`} className="categories-item">
      <span>{CATEGORY_ITEM}</span>
    </Link>
  );
}

export default CategoriesItem;
