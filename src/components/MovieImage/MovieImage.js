import React from 'react'
import { PropTypes } from 'prop-types'
import './MovieImage.css'

const MovieImage = props => {
  return (
    <div className="movieImage">
      <img
        src={
          props.movie.poster_path !== null
            ? process.env.PHOTO_URL + props.movie.poster_path
            : '../../../public/no-poster.png'
        }
      />
    </div>
  )
}

export default MovieImage

MovieImage.propTypes = {
  movie: PropTypes.object
}