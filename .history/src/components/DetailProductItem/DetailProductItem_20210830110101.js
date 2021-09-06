import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import NavigationWrapper from "../Navigation/NavigationWrapper/NavigationWrapper";
import "./DetailProductItem.css";

const ProductItem = () => {
  const handleMouseEnter = (e) => {
    console.log(e);
  };
  return (
    <div>
      <Header onMouseEnter={handleMouseEnter} />
      <div className="container p-0">
        <NavigationWrapper />
      </div>
      <h1>I i'm product</h1>
      <Footer />
    </div>
  );
};

export default ProductItem;
