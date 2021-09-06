import React from "react";

import FrameImg from "../../../../assets/carosel/frame_1.png";
import Slider from "react-slick";
import { data } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailsMainLeft = () => {
  return (
    <div className="product-detail-left product-images col-xs-12 col-sm-12 col-md-8 mx-auto col-lg-4">
      <div className=" pb-3 pt-0  col_large_default large-image">
        <Slider dots initialSlide={2} infinite customPaging>
          {data.map((item) => (
            <div>
              <img src={item} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DetailsMainLeft;
