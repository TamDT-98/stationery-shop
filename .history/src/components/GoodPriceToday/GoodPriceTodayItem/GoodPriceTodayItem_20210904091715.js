import React from "react";

const GoodPriceTodayItem = () => {
  return (
    <div className="card py-2 main_container collection  col-xl-9 col-lg-9  col-md-12 col-sm-12">
      <div className="collection_banner mb-4">
        <a href="#" title="">
          <picture>
            <img
              src="https://file.hstatic.net/1000230347/file/imgmain_4376e45699aa433789b24a526e433298.jpg"
              className="lazyload loaded"
            />
          </picture>
        </a>
      </div>
      <h1 className="title_page collection-title mb-0">Giá tốt hôm nay</h1>
      <div className="category-products products">
        <div className="border-bottom">
          <div className=" d-flex justify-content-between align-items-baseline">
            <div className="sortPagiBar">
              <div className="sort-cate clearfix">
                <div className="d-flex align-items-baseline">
                  <label className="left">
                    <span>Sắp xếp: </span>
                  </label>
                  <ul className="ul_col ml-2 mb-0">
                    <li>
                      <span className="d-flex d-lg-none align-items-center justify-content-between">
                        Thứ tự
                      </span>
                      <i className="fas fa-chevron-down float-right"></i>
                      <ul className="content_ul">
                        <li>
                          <a className="link" href="#">
                            Tên A → Z
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodPriceTodayItem;
