import React from 'react';
import './MovieImage.css';

const MovieImage = props => {
  return (
    <div className="movieImage">
      <img src={process.env.PHOTO_URL + props.movie.poster_path} alt="" />
    </div>
  );
};

export default MovieImage;
