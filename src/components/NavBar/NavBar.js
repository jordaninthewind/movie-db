import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <div className="nav">
          <Link className="link" to="/">Main Component</Link>
          <Link className="link" to="/search">Search Results Page</Link>
          <Link className="link" to="/film">Item Component</Link>
      </div>
  )
}

export default NavBar;