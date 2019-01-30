import React from 'react'
import { PropTypes } from 'prop-types'
import './MovieInfo.css'

const MovieInfo = ({ title, releaseDate }) => {
  return (
    <div styleName="movieInfo">
      <span styleName="tileTitle">{title}</span>
      <span styleName="tileYear">
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
