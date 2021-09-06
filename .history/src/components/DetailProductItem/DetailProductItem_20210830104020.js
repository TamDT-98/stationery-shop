import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import NavigationWrapperItem from "../Navigation/NavigationWrapper/NavigationWrapperItem/NavigationWrapperItem";

const ProductItem = () => {
  return (
    <div>
      <Header />
      <div className="container section px-md-0 mt-lg-0 mt-3  awe-section-1">
        <NavigationWrapperItem />
      </div>
      <h1>I i'm product</h1>
      <Footer />
    </div>
  );
};

export default ProductItem;
