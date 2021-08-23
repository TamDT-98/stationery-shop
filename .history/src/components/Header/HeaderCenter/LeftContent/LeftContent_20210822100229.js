import React from "react";

import "./LeftContent.css";

const LeftContent = () => {
  return (
    <div className="col-4 col-xl-5 col-lg-6">
      <ul className="header-left mb-0 float-ml-right list-unstyled d-flex align-items-center">
        <li className="media d-lg-flex d-none hotline">
          <img
            src="https://theme.hstatic.net/1000230347/1000729967/14/phone-call.png?v=956"
            alt="phone"
            className="align-self-center mr-3"
          />
          <div className="media-body d-md-flex flex-column d-none">
            <span>Hỗ trợ khách hàng</span>
            <a
              className="font-weight-bold d-block"
              href="tel:1900866819"
              title="1900 866 819"
            >
              1900 866 819
            </a>
          </div>
        </li>
        <li className="ml-4 mr-4 mr-md-3 ml-md-3 media d-lg-flex d-none ">
          <i className="fas fa-user-circle mr-3 align-self-center"></i>
          <div className="media-body d-md-flex flex-column d-none">
            <span>Tài Khoản</span>
            <small>
              <a href="#">Đăng Nhập</a>
            </small>
          </div>
        </li>
        <li className="cartgroup  ml-0 mr-2 mr-md-0">
          <div className="mini-cart text-xs-center">
            <a href="#" className="">
              <i className="fas fa-shopping-bag"></i>
              <span className="mx-2 d-md-block d-none">Giỏ hàng</span>
              <span className="count_item count_item_pr">0</span>
            </a>
            <div className="top-cart-content card">
              <form id="cart-header-form">
                <ul
                  id="cart-sidebar"
                  className="mini-products-list count_li list-unstyled"
                >
                  <div className="no-item">Không có sản phẩm nào.</div>
                </ul>
              </form>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftContent;
