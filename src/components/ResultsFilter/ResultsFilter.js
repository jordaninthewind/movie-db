import React from 'react'
import FilterToggle from '../FilterToggle/FilterToggle'
import './ResultsFilter.css'

const ResultsFilter = ({
  selectedMovieId,
  total,
  input,
  toggleFilter,
  filter
}) => {
  if (selectedMovieId) {
    return (
      <div id="resultsFilter">
        <div id="movieCount">
          Movies for <em>{input}</em>
        </div>
      </div>
    )
  } else {
    return (
      <div id="resultsFilter">
        {total > 0 && (
          <>
            <div id="movieCount">{total} movies found</div>
            <FilterToggle toggleFilter={toggleFilter} filter={filter} />
          </>
        )}
      </div>
    )
  }
}

export default ResultsFilter
