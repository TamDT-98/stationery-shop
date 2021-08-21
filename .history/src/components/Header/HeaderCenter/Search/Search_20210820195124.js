import React from "react";

const Search = () => {
  return (
    <div>
      <form>
        <input type="search" placeholder="Tìm kiếm sản phẩm ..." />
        <button type="submit">
          <span class="fa fa-search"></span>
        </button>
      </form>
    </div>
  );
};

export default Search;
