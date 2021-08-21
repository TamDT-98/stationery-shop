import React from "react";

import "./Search.css";

const Search = () => {
  return (
    <div className="col-xl-4 col-lg-3 col-10 header-center">
      <form className="input-group search-bar custom-input-group ">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm ..."
          className="input-group-field auto-search form-control"
        />
        <span className="input-group-btn btn-action">
          <button
            type="submit"
            className="btn text-white icon-fallback-text h-100"
          >
            <i className="fas fa-search"></i>
          </button>
        </span>
      </form>
    </div>
  );
};

export default Search;
