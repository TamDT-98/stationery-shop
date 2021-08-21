import React from "react";

import "./Search.css";

const Search = () => {
  return (
    <div>
      <form className="input-group search-bar custom-input-group ">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm ..."
          className="input-group-field auto-search form-control"
          required
        />
        <button type="submit">
          {/* <span className="search-button">
            <i className="fas fa-search"></i>
          </span> */}
        </button>
      </form>
    </div>
  );
};

export default Search;
