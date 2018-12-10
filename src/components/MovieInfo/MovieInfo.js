import React from 'react';
import './MovieInfo.css';

const MovieInfo = props => {
    return (
        <div id="movieInfo">
            <p>{props.movie.title}</p>
        </div>
    )
}

export default MovieInfo;