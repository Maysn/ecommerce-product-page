import React, { useEffect, useState, useMemo } from "react";
import "../styles/Carousel.css";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";
import { useProductsData } from "../context/ProductsDataContext";

const CAROUSEL_TICKER = 5000;

export function Carousel(props) {
  const productsData = useProductsData();
  const carouselData = useMemo(() => {
    const data = productsData?.reduce((dataArray, product) => {
      dataArray = [
        ...dataArray,
        {
          title: product.title,
          description: product.description,
          img: product.images[0],
        },
      ];
      return dataArray;
    }, []);
    return data;
  }, [productsData]);
  const [currItem, setCurrItem] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrItem((curr) => (curr === 29 ? 0 : curr + 1));
    }, CAROUSEL_TICKER);

    return () => {
      clearTimeout(interval);
    };
  }, [currItem]);
  const showNext = (current) => {
    if (current === 29) {
      return setCurrItem(0);
    }
    return setCurrItem(current + 1);
  };
  const showPrevious = (current) => {
    if (current === 0) {
      return setCurrItem(29);
    }
    return setCurrItem(current - 1);
  };
  return (
    <div className="home-page-carousel">
      <div className="product-preview">
        <img src={carouselData?.[currItem].img} alt="product preview" />
        <span className="next" onClick={() => showNext(currItem)}>
          <img src={next} alt="next image" />
        </span>
        <span className="previous" onClick={() => showPrevious(currItem)}>
          <img src={previous} alt="previous image" />
        </span>
      </div>
    </div>

    // <div className="product-preview">
    //   <img src={productImgs[currImg]} alt="product preview" />
    //   <span className="next" onClick={() => showNext(currImg)}>
    //     <img src={next} alt="next image" />
    //   </span>
    //   <span className="previous" onClick={() => showPrevious(currImg)}>
    //     <img src={previous} alt="previous image" />
    //   </span>
    // </div>
  );
}
