import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <React.Fragment>
          <Link to="/">Main Component</Link>
          <Link to="/search">Search Page</Link>
          <Link to="/item">Item Component</Link>
      </React.Fragment>
  )
}

export default NavBar;