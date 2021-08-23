import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://theme.hstatic.net/1000230347/1000729967/14/slider_1.jpg?v=967"
            alt="First slide"
          />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://theme.hstatic.net/1000230347/1000729967/14/slider_5.jpg?v=967"
            alt="Second slide"
          />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://theme.hstatic.net/1000230347/1000729967/14/slider_6.jpg?v=967"
            alt="Third slide"
          />
          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
