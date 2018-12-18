import React from 'react'
import MovieTile from '../MovieTile/MovieTile'
import MovieInfo from '../MovieInfo/MovieInfo'
import './DisplayTiles.css'

const DisplayTiles = props => {
  if (props.loading) {
    return <div id="resultsDisplay">Loading...</div>
  } else if (props.movies.length !== 0) {
    let sortedMovies = [...props.movies]

    if (props.selectedMovieId) {
      sortedMovies = sortedMovies.filter(
        movie => movie.id !== props.selectedMovieId
      )
    }

    return (
      <ul id="searchResults">
        {sortedMovies.map((movie, idx) => (
          <MovieTile
            key={idx}
            movie={movie}
            handleMovieSelect={props.handleMovieSelect}
          >
            <MovieInfo 
              movie={movie} 
            />
          </MovieTile>
        ))}
      </ul>
    )
  } else if (props.input && props.movies.length === 0 && !props.loading) {
    return <div id="resultsDisplay">No films found</div>
  } else {
    return null
  }
}

export default DisplayTiles
