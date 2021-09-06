import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import NavigationWrapper from "../Navigation/NavigationWrapper/NavigationWrapper";
import "./DetailProductItem.css";

const ProductItem = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className=" drop-menu active p-0">
          <NavigationWrapper />
        </div>
      </div>
      <h1>I i'm product</h1>
      <Footer />
    </>
  );
};

export default ProductItem;
