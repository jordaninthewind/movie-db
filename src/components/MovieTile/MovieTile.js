import React from 'react';
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
        <p>{props.movie.title}</p>
      </div>
    )
}

export default MovieTile;