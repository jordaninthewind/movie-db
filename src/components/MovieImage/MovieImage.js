import React from 'react'
import './MovieImage.css'

const MovieImage = props => {
  return (
    <div className="movieImage">
      <img height="400px" src={process.env.PHOTO_URL + props.movie.poster_path} alt="" />
    </div>
  )
}

export default MovieImage;