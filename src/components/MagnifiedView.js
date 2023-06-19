import React from "react";
import previous from "../assets/icon-previous.svg";

function MagnifiedView({
  currImg,
  CAROUSEL_DATA,
  switchPreview,
  setShowMagnifiedView,
}) {
  return (
    <div className="main_view magnified_view">
      <div
        className="close_magnified_view"
        onClick={() => setShowMagnifiedView((curr) => !curr)}
      >
        X
      </div>
      <img
        src={CAROUSEL_DATA.images[currImg]}
        alt="product preview"
        className="magnified_img"
      />
      {CAROUSEL_DATA.images[1] ? (
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
              src={CAROUSEL_DATA.images[0]}
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
              src={CAROUSEL_DATA.images[1]}
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
              src={CAROUSEL_DATA.images[2]}
              alt="product preview"
              className={currImg === 2 ? "img_focus" : ""}
            />
          </span>
        </div>
      ) : (
        <div className="margin_top"></div>
      )}
    </div>
  );
}

export default MagnifiedView;
