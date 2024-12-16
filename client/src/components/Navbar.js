import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ onSearch, onClearFilters }) => {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Gaming Hub</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search games..."
          onKeyDown={handleSearch}
        />
        <button onClick={onClearFilters}>Clear Filters</button>
      </div>
    </nav>
  );
};

export default Navbar;