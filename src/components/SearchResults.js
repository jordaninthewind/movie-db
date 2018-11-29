import React from 'react';
import MovieTile from '../components/MovieTile';

const SearchResults = props => {
  return (
    <div>
    { props.movies.length > 0 &&
      <div>
        { props.movies.map(movie => <MovieTile movie={movie} />) }
      </div>
    }
    </div>
  )
}

export default SearchResults;