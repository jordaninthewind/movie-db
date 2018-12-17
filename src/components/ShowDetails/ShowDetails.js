import React from 'react';
import './ShowDetails.css';

const ShowDetails = props => {
  return (
    <div className="showDetails">
      <div>
        <a
          href={`http://www.imdb.com/title/` + props.movie.imdb_id}
          target="_blank"
        >
          {props.movie.title}
        </a>
        <span id="rating">
          {Number.parseFloat(props.movie.vote_average).toFixed(1)}
        </span>
      </div>
      <span>{new Date(props.movie.release_date).getFullYear()}</span>
      <span>{props.movie.runtime} minutes</span>
      <p>{props.movie.overview}</p>
    </div>
  );
};

export default ShowDetails;
