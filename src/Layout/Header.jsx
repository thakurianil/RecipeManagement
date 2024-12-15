import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle the form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm); 
  };
  const handleRefresh = () => {
    window.location.reload(); 
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <Button className="navbar-brand bg-light"onClick={handleRefresh}>Recipe Management</Button>

        <form className="form-inline" onSubmit={handleSearchSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm} // Bind search term to the input field
            onChange={handleInputChange} // Update state on input change
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Header;
