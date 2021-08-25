import React from "react";

import "./FlashSaleItems.css";

const FlashSaleItems = () => {
  return (
    <div>
      <div className="row mt-3">
        <div className="flashsale__item col-12 col-md-15">
          <div className="item_product_main">
            <form className="variants product-action">
              <div className="product-thumbnail pos-relative"></div>
              <div className="product-info"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleItems;
