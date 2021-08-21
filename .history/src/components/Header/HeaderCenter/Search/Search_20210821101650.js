import React from "react";

import "./Search.css";

const Search = () => {
  return (
    <div className="col-xl-5 col-lg-4 col-12 header-center">
      <form className="input-group search-bar custom-input-group ">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm ..."
          className="input-group-field auto-search form-control"
          required
        />
        <button type="submit">
          <span className="btn text-white icon-fallback-text h-100">
            <i className="fas fa-search"></i>
          </span>
        </button>
      </form>
    </div>
  );
};

export default Search;
