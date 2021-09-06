import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import NavigationWrapper from "../Navigation/NavigationWrapper/NavigationWrapper";
import "./DetailProductItem.css";
import SubHeader from "../Header/SubHeader/SubHeader";

const ProductItem = ({ SubHeader, attachedClasses }) => {
  return (
    <>
      <Header />
      <div className={attachedClasses.join(" ")}>
        <NavigationWrapper />
      </div>
      {/* </div> */}
      <h1>I i'm product</h1>
      <Footer />
    </>
  );
};

export default ProductItem;
