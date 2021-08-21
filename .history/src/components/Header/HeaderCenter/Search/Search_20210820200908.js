import React from "react";

import searchIcon from "../../../../assets/loupe.svg";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <form>
        <input type="search" placeholder="Tìm kiếm sản phẩm ..." required />
        <button type="submit">
          <span className="search-button">
            <img src={searchIcon} alt="icon" className="search-icon" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default Search;
