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
            <table className="mce-item-table table table-bordered">
              <tbody>
                <tr className="row-info">
                  <td>
                    <span>Thương hiệu</span>
                  </td>
                  <td>
                    <strong>
                      <span>Colokit</span>
                    </strong>
                  </td>
                </tr>
                <tr className="row-info">
                  <td>
                    <span>Trọng lượng</span>
                  </td>
                  <td>
                    <strong>
                      <span>96 gram</span>
                    </strong>
                  </td>
                </tr>
                <tr className="row-info">
                  <td>
                    <span>Chất liệu</span>
                  </td>
                  <td>
                    <strong>
                      <span>Thân bọc nhựa, ngòi sợi Polyester</span>
                    </strong>
                  </td>
                </tr>
                <tr className="row-info">
                  <td>
                    <span>Loại đầu bút</span>
                  </td>
                  <td>
                    <strong>
                      <span>1 cây / 1 đầu</span>
                    </strong>
                  </td>
                </tr>
                <tr className="row-info">
                  <td>
                    <span>Quy cách</span>
                  </td>
                  <td>
                    <strong>
                      <span>36 màu / hộp</span>
                    </strong>
                  </td>
                </tr>
                <tr className="row-info">
                  <td>
                    <span>Bảo quản</span>
                  </td>
                  <td>
                    <strong>
                      <span>Nơi khô ráo, tránh lửa</span>
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleMain;
