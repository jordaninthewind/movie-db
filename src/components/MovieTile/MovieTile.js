import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import './MovieTile.css'

const MovieTile = ({ movie, handleMovieSelect, children }) => {
  return (
    <li styleName="movieTile">
      <Link to={`/film/${movie.id}`}>
        <img
          key={movie.id}
          src={
            movie.poster_path !== null
              ? process.env.PHOTO_URL + movie.poster_path
              : '../../../public/no-poster.png'
          }
          onClick={() => handleMovieSelect(movie.id)}
          alt={`${movie.title}`}
        />
      </Link>
      {children}
    </li>
  )
}

export default MovieTile

MovieTile.propTypes = {
  movie: PropTypes.object,
  handleMovieSelect: PropTypes.func,
  children: PropTypes.object
}
