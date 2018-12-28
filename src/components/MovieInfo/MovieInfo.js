import React from 'react'
import { PropTypes } from 'prop-types'
import './MovieInfo.css'

const MovieInfo = ({ title, releaseDate }) => {
  return (
    <div className="movieInfo">
      <span className="tileTitle">{title}</span>
      <span className="tileYear">
        {releaseDate ? releaseDate.getFullYear() : 'N/A'}
      </span>
    </div>
  )
}

export default MovieInfo

MovieInfo.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.object
}
