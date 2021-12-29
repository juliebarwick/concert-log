import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: .5rem .75rem;
  font-size: 1rem;
  color: #272727;
  border: 1px solid #767676;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  &:focus {
    outline: none;
  }
  border-radius: 30px;
`;

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const doSearch = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
    onSearch(value);
  };

  return (
    <form onSubmit={doSearch}>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={input}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
