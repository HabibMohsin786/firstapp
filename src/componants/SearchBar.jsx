// src/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);

  };

  

  return (
    <div className="flex items-center p-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
    </div>
  );
};

export default SearchBar;
