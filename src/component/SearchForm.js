import React, { useState } from "react";
import axios from "axios";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    onSearch(response.data.items);
  };

  return (
    <form className="SearchForm" onSubmit={handleSearch}>
      <label>  
        <input
          type="text"
          placeholder="Search for GitHub users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form> 
  );
}

export default SearchForm;
