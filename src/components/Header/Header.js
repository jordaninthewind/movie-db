import React from 'react'
import './Header.css'

const Header = props => {
    return (
      <div id="topTitle">
        <span>netflixroulette</span>
        { props.name &&
            <button onClick={props.backToSearch}>SEARCH</button>
        }
      </div>
    )
}

export default Header;