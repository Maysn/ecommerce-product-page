import React, { useEffect, useState, useMemo } from "react";
import "../styles/Carousel.css";
import next from "../assets/icon-next.svg";
import previous from "../assets/icon-previous.svg";
import { useProductsData } from "../context/ProductsDataContext";

const CAROUSEL_TICKER = 5000;

export function Carousel() {
  const productsData = useProductsData();
  const carouselData = useMemo(() => {
    const data = productsData?.reduce((dataArray, product) => {
      dataArray = [
        ...dataArray,
        {
          brand: product.brand,
          title: product.title,
          description: product.description,
          images: [product.images[0], product.images[1], product.images[2]],
        },
      ];
      return dataArray;
    }, []);
    return data;
  }, [productsData]);
  const [currItem, setCurrItem] = useState(1);
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrImg(0);
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
  const switchPreview = (num) => {
    return setCurrImg(num);
  };
  return (
    <div className="product_preview">
      <div className="main_view">
        <span className="previous" onClick={() => showPrevious(currItem)}>
          <img src={previous} alt="previous image" />
        </span>
        <img
          src={carouselData?.[currItem].images[currImg]}
          alt="product preview"
        />
        <span className="next" onClick={() => showNext(currItem)}>
          <img src={next} alt="next image" />
        </span>
      </div>
      {carouselData?.[currItem].images[1] ? (
        <div className="other_images">
          <span
            className={`mini_preview ${
              currImg === 0 ? "mini_preview_focus" : ""
            }`}
            onClick={() => {
              switchPreview(0);
            }}
          >
            <img
              src={carouselData?.[currItem].images[0]}
              alt="product preview"
              className={currImg === 0 ? "img_focus" : ""}
            />
          </span>
          <span
            className={`mini_preview ${
              currImg === 1 ? "mini_preview_focus" : ""
            }`}
            onClick={() => {
              switchPreview(1);
            }}
          >
            <img
              src={carouselData?.[currItem].images[1]}
              alt="product preview"
              className={currImg === 1 ? "img_focus" : ""}
            />
          </span>
          <span
            className={`mini_preview ${
              currImg === 2 ? "mini_preview_focus" : ""
            }`}
            onClick={() => {
              switchPreview(2);
            }}
          >
            <img
              src={carouselData?.[currItem].images[2]}
              alt="product preview"
              className={currImg === 2 ? "img_focus" : ""}
            />
          </span>
        </div>
      ) : (
        ""
      )}
      <div className="item_">
        <p className="item_brand">{carouselData?.[currItem].brand}</p>
        <h3 className="item_title">{carouselData?.[currItem].title}</h3>
        <p className="item_description">
          {carouselData?.[currItem].description}
        </p>
      </div>
    </div>

    // <div className="home-page-carousel">
    //   <div className="product-preview">
    //     <img src={carouselData?.[currItem].images[0]} alt="product preview" />
    //     <span className="next" onClick={() => showNext(currItem)}>
    //       <img src={next} alt="next image" />
    //     </span>
    //     <span className="previous" onClick={() => showPrevious(currItem)}>
    //       <img src={previous} alt="previous image" />
    //     </span>
    //   </div>
    // </div>
  );
}
