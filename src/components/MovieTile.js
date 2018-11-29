import React from 'react';

const MovieTile = props => {
    return (
      <div>
        <p>{props.movie.title}</p>
        <img src={process.env.PHOTO_URL + props.movie.poster_path} alt="" height="300px" />
      </div>
    )
}

export default MovieTile;