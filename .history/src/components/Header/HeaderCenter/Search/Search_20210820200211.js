import React from "react";

import searchIcon from "../../../../assets/loupe.svg";
import "./Search.css";

const Search = () => {
  return (
    <div>
      <form>
        <input type="search" placeholder="Tìm kiếm sản phẩm ..." />
        <button type="submit">
          <span>
            <img src={searchIcon} alt="icon" class="search-icon" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default Search;
