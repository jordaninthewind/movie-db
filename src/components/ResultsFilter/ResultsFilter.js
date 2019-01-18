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
      <div styleName="resultsFilter">
        <div styleName="movieCount">
          Movies for <em>{input}</em>
        </div>
      </div>
    )
  } else {
    return (
      <div styleName="resultsFilter">
        {total > 0 && (
          <>
            <div styleName="movieCount">{total} movies found</div>
            <FilterToggle toggleFilter={toggleFilter} filter={filter} />
          </>
        )}
      </div>
    )
  }
}

export default ResultsFilter
