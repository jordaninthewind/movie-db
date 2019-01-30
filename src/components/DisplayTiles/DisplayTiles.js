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
  if (movies.length !== 0) {
    let sortedMovies = [...movies]

    if (selectedMovieId) {
      sortedMovies = sortedMovies.filter(movie => movie.id !== selectedMovieId)
    }

    return (
      <div>
        <ul styleName='searchResults'>
          {sortedMovies.map((movie, idx) => (
            <MovieTile
              key={idx}
              movie={movie}
              handleMovieSelect={handleMovieSelect}
            >
              <MovieInfo title={movie.title} releaseDate={movie.release_date} />
            </MovieTile>
          ))}
        </ul>
        {loading && <div styleName='resultsDisplay'>Loading...</div>}
      </div>
    )
  } else if (input && movies.length === 0 && !loading) {
    return <div styleName='resultsDisplay'>No films found</div>
  } else {
    return null
  }
}

export default DisplayTiles
