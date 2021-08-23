import React from "react";

import "./SubHeaderItems.css";

const SubHeaderItems = (props) => {
  return (
    <div>
      <li>
        <div>
          <img
            src="https://theme.hstatic.net/1000230347/1000729967/14/policy_header_image_1.png?v=967"
            alt="Giá tốt hôm nay"
            className="img-fluid lazyload loaded"
          />
        </div>
        <a href="#" className="link">
          Giá tốt hôm nay
        </a>
      </li>
      <li>
        <div>
          <img
            src="//theme.hstatic.net/1000230347/1000729967/14/policy_header_image_2.png?v=967"
            alt="Kiểm tra đơn hàng"
            className="img-fluid lazyload loaded"
          />
        </div>
        <a href="#" className="link">
          Kiểm tra đơn hàng
        </a>
      </li>
      <li>
        <div>
          <img
            src="https://theme.hstatic.net/1000230347/1000729967/14/policy_header_image_3.png?v=967"
            alt="Thông báo chậm giao hàng"
            className="img-fluid lazyload loaded"
          />
        </div>
        <a href="#" className="link">
          Thông báo chậm giao hàng
        </a>
      </li>
    </div>
  );
};

export default SubHeaderItems;
