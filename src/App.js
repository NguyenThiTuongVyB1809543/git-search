import './App.css';
import React, { useState } from "react";
import SearchForm from './component/SearchForm';
import SearchResult from './component/SearchResult';
function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  }; 

  return (
    <div className="App">
      <header className="App-header">
        <label className="TitleApp">Search GitHub</label>
      <SearchForm onSearch={handleSearch} />
      {searchResults.map((user) => (
        <SearchResult key={user.id} user={user} />
      ))}
      </header>
    </div>
  );
}

export default App; 