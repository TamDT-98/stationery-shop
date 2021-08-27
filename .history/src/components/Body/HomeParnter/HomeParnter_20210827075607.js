import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./HomeParnter.css";

const HomeParnter = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="home-parnter clearfix">
      <div className="container clearfix">
        <Slider {...settings}>
          <div className="item-partner slick-slide slick-current slick-active">
            <a href="#">
              <img
                src="https://theme.hstatic.net/1000230347/1000729967/14/home_partner_1.png?v=974"
                alt="avatar"
                className="img-responsive"
              />
            </a>
          </div>
          <div className="item-partner slick-slide slick-current slick-active">
            <a href="#">
              <img
                src="https://theme.hstatic.net/1000230347/1000729967/14/home_partner_2.png?v=974"
                alt="avatar"
                className="img-responsive"
              />
            </a>
          </div>
          <div className="item-partner slick-slide slick-current slick-active">
            <a href="#">
              <img
                src="https://theme.hstatic.net/1000230347/1000729967/14/home_partner_3.png?v=974"
                alt="avatar"
                className="img-responsive"
              />
            </a>
          </div>
          <div className="item-partner slick-slide slick-current slick-active">
            <a href="#">
              <img
                src="https://theme.hstatic.net/1000230347/1000729967/14/home_partner_4.png?v=974"
                alt="avatar"
                className="img-responsive"
              />
            </a>
          </div>
          <div className="item-partner slick-slide slick-current slick-active">
            <a href="#">
              <img
                src="https://theme.hstatic.net/1000230347/1000729967/14/home_partner_5.png?v=974"
                alt="avatar"
                className="img-responsive"
              />
            </a>
          </div>
          <div className="item-partner slick-slide slick-current slick-active">
            <a href="#">
              <img
                src="https://theme.hstatic.net/1000230347/1000729967/14/home_partner_6.png?v=974"
                alt="avatar"
                className="img-responsive"
              />
            </a>
          </div>
          <div className="item-partner slick-slide slick-current slick-active">
            <a href="#">
              <img
                src="https://theme.hstatic.net/1000230347/1000729967/14/home_partner_7.png?v=974"
                alt="avatar"
                className="img-responsive"
              />
            </a>
          </div>
          <div className="item-partner slick-slide slick-current slick-active">
            <a href="#">
              <img
                src="https://theme.hstatic.net/1000230347/1000729967/14/home_partner_8.png?v=974"
                alt="avatar"
                className="img-responsive"
              />
            </a>
          </div>
          <div className="item-partner slick-slide slick-current slick-active">
            <a href="#">
              <img
                src="https://theme.hstatic.net/1000230347/1000729967/14/home_partner_9.png?v=974"
                alt="avatar"
                className="img-responsive"
              />
            </a>
          </div>
          <div className="item-partner slick-slide slick-current slick-active">
            <a href="#">
              <img
                src="https://theme.hstatic.net/1000230347/1000729967/14/home_partner_10.png?v=974"
                alt="avatar"
                className="img-responsive"
              />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomeParnter;
