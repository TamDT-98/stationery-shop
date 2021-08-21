import React from "react";

import "./Search.css";

const Search = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Tìm kiếm sản phẩm ..." required />
        <button type="submit">
          <span className="search-button">
            <i class="fas fa-search"></i>
          </span>
        </button>
      </form>
    </div>
  );
};

export default Search;
