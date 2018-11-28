import React from 'react';

const SearchResults = props => {
  return (
    <div>
    { props.movies.length > 0 &&
      <div>
        { props.movies.map(movie => <div>{movie.title}</div>) }
      </div>
    }
    </div>
  )
}

export default SearchResults;