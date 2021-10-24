import React, { useState } from 'react';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default Search;
