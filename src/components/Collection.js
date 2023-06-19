import React, { useState } from "react";
import "../styles/Collection.css";
import StoreItem from "./StoreItem";

function Collection({ list }) {
  return list ? (
    <div className="collection">
      {list?.map((item) => (
        <StoreItem key={item.id} {...item} />
      ))}
    </div>
  ) : (
    ""
  );
}

export default Collection;
