import React from 'react'
import { PropTypes } from 'prop-types'
import './MovieImage.css'

const MovieImage = ({ poster_path }) => {
  return (
    <div styleName="movieImage">
      <img
        src={
          poster_path !== null
            ? process.env.PHOTO_URL + poster_path
            : '../../../public/no-poster.png'
        }
      />
    </div>
  )
}

export default MovieImage

MovieImage.propTypes = {
  poster_path: PropTypes.string,
}