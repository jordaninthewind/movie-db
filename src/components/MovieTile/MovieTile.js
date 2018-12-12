import React from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import { Link } from 'react-router-dom';
import './MovieTile.css';

const MovieTile = props => {
  return (
    <li className="movieTile">
      <Link to={`/film/${encodeURI(props.movie.title)}/${props.movie.id}`}>
        <img
          key={props.movie.id}
          src={process.env.PHOTO_URL + props.movie.poster_path}
          onClick={() => props.handleMovieSelect(props.movie.id)}
          alt=""
          width="300px"
        />
      </Link>
      <MovieInfo movie={props.movie} />
    </li>
  );
};

export default MovieTile;
