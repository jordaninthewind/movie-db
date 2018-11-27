import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <React.Fragment>
          <Link to="/">Main Component</Link>
          <Link to="/search/something">Search Page</Link>
          <Link to="/film/something">Item Component</Link>
      </React.Fragment>
  )
}

export default NavBar;