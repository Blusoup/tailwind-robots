import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="p-4 shadow-2xl focus:bg-white">
      <input
        className="bg-teal-300 p-1 focus:outline-none focus:shadow-outline"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
