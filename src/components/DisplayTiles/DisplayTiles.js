import React from 'react';
import MovieTile from '../MovieTile/MovieTile';
import './DisplayTiles.css';

const DisplayTiles = props => {
  if (props.loading) {
    return <div id="resultsDisplay">Loading...</div>;
  } else if (props.movies.length !== 0) {
    let sortedMovies = [...props.movies];

    if (props.selectedMovieId) {
      sortedMovies = sortedMovies.filter(
        movie => movie.id !== props.selectedMovieId
      );
    }

    if (props.filter) {
      sortedMovies.forEach(
        movie => (movie.release_date = new Date(movie.release_date))
      );

      sortedMovies.sort((a, b) => b.release_date - a.release_date);
    } else {
      sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
    }

    return (
      <ul id="searchResults">
        {sortedMovies.map(movie => (
          <MovieTile
            key={movie.id}
            movie={movie}
            handleMovieSelect={props.handleMovieSelect}
          />
        ))}
      </ul>
    );
  } else if (props.input && props.movies.length === 0 && !props.loading) {
    return <div id="resultsDisplay">No films found</div>;
  } else {
    return null;
  }
};

export default DisplayTiles;
