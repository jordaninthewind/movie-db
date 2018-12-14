import React from 'react';
import './MovieInfo.css';

const MovieInfo = props => {
    return (
        <div id="movieInfo">
            <p>{props.movie.title}</p>
            <p>{new Date(props.movie.release_date).getFullYear()}</p>
            <p>{props.movie.vote_average}</p>
        </div>
    )
}

export default MovieInfo;