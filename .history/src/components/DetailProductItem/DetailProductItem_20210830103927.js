import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import NavigationWrapperItem from "../Navigation/NavigationWrapper/NavigationWrapperItem/NavigationWrapperItem";

const ProductItem = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <NavigationWrapperItem />
      </div>
      <h1>I i'm product</h1>
      <Footer />
    </div>
  );
};

export default ProductItem;
