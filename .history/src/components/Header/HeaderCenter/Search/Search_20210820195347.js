import React from "react";

const Search = () => {
  return (
    <div>
      <form>
        <input type="search" placeholder="Tìm kiếm sản phẩm ..." />
        <button type="submit">
          <i class="bi bi-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
