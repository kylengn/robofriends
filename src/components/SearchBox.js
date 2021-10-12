import React from "react";

const SearchBox = ({ searchChange }) => {
  // searchChange is a props
  return (
    <div>
      <input
        className="pa3 mb4 ba b--lightest-blue bg-light-green"
        type="seach"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
