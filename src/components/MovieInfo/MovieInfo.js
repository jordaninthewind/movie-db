import React from 'react'
import { PropTypes } from 'prop-types'
import './MovieInfo.css'

const MovieInfo = ({ title, release_date }) => {
  return (
    <div className="movieInfo">
      <span className="tileTitle">{ title }</span>
      <span className="tileYear">
        { release_date ? release_date.getFullYear() : 'N/A' }
      </span>
    </div>
  )
}

export default MovieInfo

MovieInfo.propTypes = {
  title: PropTypes.string,
  release_date: PropTypes.object
}