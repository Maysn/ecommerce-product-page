import React from "react";
import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";
function Quantity({ quantity, setQuantity }) {
  const decrease = (curr) => {
    if (curr === 0) {
      return;
    }
    return setQuantity(curr - 1);
  };

  const increase = (curr) => {
    return setQuantity(curr + 1);
  };

  return (
    <div>
      <span onClick={() => decrease(quantity)}>
        <img src={minus} alt="remove one piece" />
      </span>
      <span>{quantity}</span>
      <span onClick={() => increase(quantity)}>
        <img src={plus} alt="add one more piece" />
      </span>
    </div>
  );
}

export default Quantity;
