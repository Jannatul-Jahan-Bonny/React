import React from 'react';

function Sorting({ sortField, sortOrder, onSortChange }) {
  return (
    <div>
      <span>Sort by:</span>
      <select
        value={sortField}
        onChange={(e) => onSortChange(e.target.value, sortOrder)}
      >
        <option value="price">Price</option>
        {/* Add other sorting options */}
      </select>
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(sortField, e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

export default Sorting;
