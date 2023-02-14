import React, { useEffect, useState } from "react";
import "../styles/carousel.css";
import p1 from "../assets/image-product-1.jpg";
import p2 from "../assets/image-product-2.jpg";
import p3 from "../assets/image-product-3.jpg";
import p4 from "../assets/image-product-4.jpg";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";
function Carousel(props) {
  const productImgs = [p1, p2, p3, p4];
  const [currImg, setCurrImg] = useState(0);

  const imgAutoSwitch = () =>
    setTimeout(() => setCurrImg((curr) => (curr === 3 ? 0 : curr + 1)), 2000);

  useEffect(() => {
    imgAutoSwitch();
  }, [currImg]);

  const showNext = (current) => {
    if (current === 3) {
      return setCurrImg(0);
    }
    return setCurrImg(current + 1);
  };

  const showPrevious = (current) => {
    if (current === 0) {
      return setCurrImg(3);
    }
    return setCurrImg(current - 1);
  };
  return (
    <div className="product-preview">
      <img src={productImgs[currImg]} alt="product preview" />
      <span className="next" onClick={() => showNext(currImg)}>
        <img src={next} alt="next image" />
      </span>
      <span className="previous" onClick={() => showPrevious(currImg)}>
        <img src={previous} alt="previous image" />
      </span>
    </div>
  );
}

export default Carousel;
