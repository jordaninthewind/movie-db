import React from 'react'
import FilterToggle from '../FilterToggle/FilterToggle'
import './ResultsFilter.css'

const ResultsFilter = props => {
  return (
    <div id="resultsFilter">
      {props.total > 0 &&
        <>
        <div id="movieCount">{props.total} movies found</div>
        <FilterToggle 
          toggleFilter={props.toggleFilter}
          filter={props.filter}
        />
        </>
      }
    </div>
  )
}

export default ResultsFilter
