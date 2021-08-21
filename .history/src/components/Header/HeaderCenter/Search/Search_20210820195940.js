import React from "react";

import searchIcon from "../../../../assets/loupe.svg";

const Search = () => {
  return (
    <div>
      <form>
        <input type="search" placeholder="Tìm kiếm sản phẩm ..." />
        <button type="submit">
          <img src={searchIcon} alt="icon" />
        </button>
      </form>
    </div>
  );
};

export default Search;
