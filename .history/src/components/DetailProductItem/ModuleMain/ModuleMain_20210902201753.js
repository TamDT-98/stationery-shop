import React from "react";

const ModuleMain = () => {
  return (
    <section className="section sec_tab ">
      <div className="container card py-2">
        <div className="title_module_main heading-bar d-flex justify-content-between align-items-center">
          <h2 className="heading-bar__title">Mô tả sản phẩm</h2>
        </div>
        <div className="rte product_getcontent py-3 pos-relative">
          <div id="content">
            <p>
              <strong>Thông Số Kỹ Thuật</strong>
            </p>
            <table className="mce-item-table table table-bordered"></table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleMain;
