import React from 'react'

const MovieImage = props => {
  return (
    <div>
      <img height="400px" src={process.env.PHOTO_URL + props.movie.poster_path} alt="" />
    </div>
  )
}

export default MovieImage;