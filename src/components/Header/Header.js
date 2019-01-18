import React from 'react'
import { PropTypes } from 'prop-types'
import './Header.css'

const Header = ({ history, input }) => {
  return (
    <div styleName="topTitle">
      <span>
        <a href="/">netflixroulette</a>
      </span>
      { history && (
        <button onClick={() => history.push(`/search/${input}`)}>
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