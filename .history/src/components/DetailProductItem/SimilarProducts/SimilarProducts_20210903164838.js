import React from "react";

import Title from "../../Body/Title/Title";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProductItem from "../../CardProductItem/CardProductItem";

const SimilarProducts = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <section className="section sec_tab">
      <div className="container card py-2">
        <div className="title_module section heading-bar d-flex justify-content-between align-items-center">
          <Title href="#" title="Sản phẩm cùng loại" />
        </div>
        <div className="section_prd_feature">
          <div className="section products product_related slick-product slickrelated row slick-initialized slick-slider">
            <Slider {...settings}>
              <CardProductItem />
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;
