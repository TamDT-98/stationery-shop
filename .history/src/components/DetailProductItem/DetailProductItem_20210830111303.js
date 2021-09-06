import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import NavigationWrapper from "../Navigation/NavigationWrapper/NavigationWrapper";
import "./DetailProductItem.css";

const ProductItem = () => {
  return (
    <div>
      <Header />
      <div className="container drop-menu active p-0">
        <NavigationWrapper />
      </div>
      <h1>I i'm product</h1>
      <Footer />
    </div>
  );
};

export default ProductItem;
