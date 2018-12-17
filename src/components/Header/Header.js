import React from 'react'
import { PropTypes } from 'prop-types'
import './Header.css'

const Header = props => {
  return (
    <div className="topTitle">
      <span>
        <a href="/">netflixroulette</a>
      </span>
      {props.history && (
        <button onClick={() => props.history.push(`/search/${props.input}`)}>
          SEARCH
        </button>
      )}
    </div>
  )
}

export default Header

Header.propTypes = {
  history: PropTypes.object,
  input: PropTypes.string
}