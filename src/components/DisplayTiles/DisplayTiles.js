import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import './DisplayTiles.css';

const DisplayTiles = props => {
    if ( props.loading === true ) {
        return <div id="resultsDisplay">Loading...</div>;
    } else if ( props.movies.length !== 0 ) {
        const sortedMovies = [].concat(props.movies);
        if (props.filter) {
            sortedMovies.forEach(movie => movie.release_date = new Date(movie.release_date))

            sortedMovies.sort((a, b) => b.release_date - a.release_date)
        } else {
            sortedMovies.sort((a, b) => a.vote_average - b.vote_average)
        }

        return (
            <ul id="searchResults">
                { sortedMovies.map(movie => <MovieTile movie={movie} key={movie.id} />) }
            </ul>
        )
    } else if ( props.movies.length === 0 && !props.loading) {
        return <div id="resultsDisplay">No films found</div>;
    } else {
        return null
    }
}

export default DisplayTiles;
