import React from 'react'
import MovieTile from '../MovieTile/MovieTile'
import MovieInfo from '../MovieInfo/MovieInfo'
import './DisplayTiles.css'

const DisplayTiles = ({
  loading,
  movies,
  selectedMovieId,
  handleMovieSelect,
  input
}) => {
  if (loading) {
    return <div id="resultsDisplay">Loading...</div>
  } else if (movies.length !== 0) {
    let sortedMovies = [...movies]

    if (selectedMovieId) {
      sortedMovies = sortedMovies.filter(movie => movie.id !== selectedMovieId)
    }

    return (
      <ul id="searchResults">
        {sortedMovies.map((movie, idx) => (
          <MovieTile
            key={idx}
            movie={movie}
            handleMovieSelect={handleMovieSelect}
          >
            <MovieInfo releaseDate={movie.release_date} title={movie.title} />
          </MovieTile>
        ))}
      </ul>
    )
  } else if (input && movies.length === 0 && !loading) {
    return <div id="resultsDisplay">No films found</div>
  } else {
    return null
  }
}

export default DisplayTiles
