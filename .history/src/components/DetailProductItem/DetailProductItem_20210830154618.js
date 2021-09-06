import React from "react";
import BreadCrumb from "../Body/BreadCrumb/BreadCrumb";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import NavigationWrapper from "../Navigation/NavigationWrapper/NavigationWrapper";
import "./DetailProductItem.css";

const ProductItem = () => {
  return (
    <>
      <Header />
      <div className="container drop-menu p-0">
        <NavigationWrapper />
      </div>
      <BreadCrumb />
      <h1>I i'm product</h1>
      <Footer />
    </>
  );
};

export default ProductItem;
