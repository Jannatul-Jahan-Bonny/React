import React from 'react';

function Search({ searchText, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
