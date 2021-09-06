import React from "react";
import BreadCrumb from "../Body/BreadCrumb/BreadCrumb";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import SubHeader from "../Header/SubHeader/SubHeader";
import "./DetailProductItem.css";
import DetailsMainLeft from "./DetailsMain/DetailsMainLeft/DetailsMainLeft";
import DetailsMainRight from "./DetailsMain/DetailsMainRight/DetailsMainRight";
import ModuleMain from "./ModuleMain/ModuleMain";

const DetailProductItem = () => {
  const [crumbs, setCrumbs] = React.useState([
    "Trang chủ",
    "catalog all",
    "Product",
  ]);

  const selected = (crumb) => {
    console.log(crumb);
  };

  return (
    <div className="DetailProductItem">
      <Header />
      <SubHeader />
      <BreadCrumb crumbs={crumbs} selected={selected} />
      <div className="product details-main productDetail-page">
        <section className="section">
          <form className="form_background form-inline margin-bottom-0">
            <div className="container card py-3">
              <div className="section wrap-padding-15 wp_product_main">
                <div className="details-product section ">
                  <div className="row">
                    <DetailsMainLeft />
                    <DetailsMainRight />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
        <ModuleMain />
      </div>
      <Footer />
    </div>
  );
};

export default DetailProductItem;
