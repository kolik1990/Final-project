import React from "react";
import "./search.css";

function Search({ searchText }) {
  return (
    <div className="container">
      <form className="search__form" onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={searchText}
          type="text"
          className="search"
          placeholder="Search here our product"
        />
      </form>
    </div>
  );
}

export default Search;
