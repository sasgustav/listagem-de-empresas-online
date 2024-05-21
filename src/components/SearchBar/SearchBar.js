import React from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Buscar..." />
      <button type="submit"><FaSearch /></button>
    </div>
  );
};

export default SearchBar;
