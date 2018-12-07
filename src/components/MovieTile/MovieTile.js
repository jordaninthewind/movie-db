import React from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> feature-redux
import './MovieTile.css';

const MovieTile = props => {
    return (
<<<<<<< HEAD
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
=======
        <li className="movieTile">
            <Link to={`/film/${encodeURI(props.movie.title)}`} >
                <img 
                    key={props.movie.id}
                    src={process.env.PHOTO_URL + props.movie.poster_path}
                    alt="" 
                    width="300px"
                />
            </Link>
          <MovieInfo movie={props.movie} />
        </li>
>>>>>>> feature-redux
    )
}

export default MovieTile;