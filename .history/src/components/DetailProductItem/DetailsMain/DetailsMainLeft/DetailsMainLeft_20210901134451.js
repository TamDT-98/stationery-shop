import React from "react";

import FrameImg from "../../../../assets/carosel/frame_1.png";
import Slider from "react-slick";
import { data } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DetailsMainLeft.css";

const DetailsMainLeft = () => {
  return (
    <div className="product-detail-left product-images col-xs-12 col-sm-12 col-md-8 mx-auto col-lg-4">
      <div className=" pb-3 pt-0  col_large_default large-image">
        <Slider
          dots
          initialSlide={0}
          infinite
          customPaging={(i) => {
            return (
              <div className="item slick-slide">
                <img
                  className="lazyload img-fluid loaded"
                  src={data[i]}
                  alt=""
                />
              </div>
            );
          }}
          dotsClass="slick-dots custom-indicator"
        >
          {data.map((item) => (
            <div>
              <a className="d-block  pos-relative embed-responsive embed-responsive-1by1">
                <img
                  className="product-frame lazyload loaded"
                  src={FrameImg}
                  alt=""
                />
                <img src={item} alt="" />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DetailsMainLeft;
