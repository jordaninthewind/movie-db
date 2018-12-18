import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import './MovieTile.css'

const MovieTile = props => {
  return (
    <li className="movieTile">
      <Link to={`/film/${encodeURI(props.movie.title)}/${props.movie.id}`}>
        <img
          key={props.movie.id}
          src={
            props.movie.poster_path !== null
              ? process.env.PHOTO_URL + props.movie.poster_path
              : '../../../public/no-poster.png'
          }
          onClick={() => props.handleMovieSelect(props.movie.id)}
          alt={`${props.movie.title}`}
        />
      </Link>
      {props.children}
    </li>
  )
}

export default MovieTile

MovieTile.propTypes = {
  movie: PropTypes.object,
  handleMovieSelect: PropTypes.func,
  children: PropTypes.object
}
