import React from 'react';
import './MovieImage.css';

const MovieImage = props => {
  return (
    <div className="movieImage">
      <img
        src={
          props.movie.poster_path !== null
            ? process.env.PHOTO_URL + props.movie.poster_path
            : '../../../public/no-poster.png'
        }
      />
    </div>
  );
};

export default MovieImage;
