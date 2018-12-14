import React from 'react'
import './Header.css'

const Header = props => {
    return (
      <div className="topTitle">
        <span>netflixroulette</span>
        { props.input &&
            <button onClick={() => props.history.push(`/search/${props.input}`)}>SEARCH</button>
        }
      </div>
    )
}

export default Header;