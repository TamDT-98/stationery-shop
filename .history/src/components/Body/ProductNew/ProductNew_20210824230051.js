import React from "react";
import SeenAll from "../Button/SeenAll";
import Title from "../Title/Title";
import SliderProductNew from "./SliderProductNew/SliderProductNew";

const ProductNew = () => {
  return (
    <section className="section awe-section-5">
      <section className="section_product_new section">
        <div className="container py-2 card border-0">
          <Title href="#" title="SẢN PHẨM MỚI - Thiên Long Flexoffice.com" />
          <SliderProductNew />
          <SeenAll />
        </div>
      </section>
    </section>
  );
};

export default ProductNew;
