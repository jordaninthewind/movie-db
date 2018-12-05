import React from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import './MovieTile.css';

const MovieTile = props => {
    return (
        <li className="movieTile">
          <img 
              key={props.movie.id}
              src={process.env.PHOTO_URL + props.movie.poster_path}
              alt="" 
              width="300px"
            />
          <MovieInfo movie={props.movie} />
        </li>
    )
}

export default MovieTile;