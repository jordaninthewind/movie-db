import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import './DisplayTiles.css';

const DisplayTiles = props => {
    if ( props.loading ) {
        return <div>Loading...</div>;
    } else if ( props.movies.length !== 0 ) {
        const sortedMovies = [].concat(props.movies);
        if (props.filter) {
            sortedMovies.map(movie => movie.release_date = new Date(movie.release_date))

            sortedMovies.sort((a, b) => b.release_date - a.release_date)
        } else {
            sortedMovies.sort((a, b) => a.vote_average - a.vote_average)
        }

        return (
            <ul id="searchResults">
                { sortedMovies.map(movie => <MovieTile movie={movie} key={movie.id} />) }
            </ul>
        )
    } else if ( props.input && props.movies.length === 0 && !props.loading) {
        return <div id="noResults">No films found</div>;
    } else {
        return null
    }
}

export default DisplayTiles;
