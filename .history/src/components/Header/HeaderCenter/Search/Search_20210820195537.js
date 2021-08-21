import React from "react";

const Search = () => {
  return (
    <div>
      <form>
        <input type="search" placeholder="Tìm kiếm sản phẩm ..." />
        <button type="submit">
          <span>
            <i class="bi bi-search"></i>
          </span>
        </button>
      </form>
    </div>
  );
};

export default Search;
