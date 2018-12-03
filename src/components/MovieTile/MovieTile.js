import React from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import './MovieTile.css';

const MovieTile = props => {
    return (
      <div className="movieTile">
        <img 
            key={props.movie.id}
            src={process.env.PHOTO_URL + props.movie.poster_path}
            alt="" 
            height="300px"
            width="200px"
          />
        <MovieInfo movie={props.movie} />
      </div>
    )
}

export default MovieTile;