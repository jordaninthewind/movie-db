import React from 'react';

const SearchResults = props => {
  return (
    <div>
    { props.movies.length > 0 &&
      <ul>
        { props.movies.map(movie => <li>{movie.title}</li>) }
      </ul>
    }
    </div>
  )
}

export default SearchResults;