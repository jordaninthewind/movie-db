import React from 'react'
import { PropTypes } from 'prop-types'
import './MovieInfo.css'

const MovieInfo = props => {
  return (
    <div className="movieInfo">
      <span className="tileTitle">{props.movie.title !== undefined ? props.movie.title.toUpperCase() : null}</span>
      <span className="tileYear">{new Date(props.movie.release_date).getFullYear()}</span>
    </div>
  )
}

export default MovieInfo

MovieInfo.propTypes = {
  movie: PropTypes.object
}