import React from 'react'
import { PropTypes } from 'prop-types'
import './FilterToggle.css'

const FilterToggle = ({ filter, toggleFilter }) => {
  return (
    <div styleName="filterToggle">
      <div onClick={ () => toggleFilter() }>
        Sort by{' '}
        <span className={ (filter ? null : 'active') }>
          release date
        </span>
        <span className={ (filter ? 'active' : null) }>
          rating
        </span>
      </div>
    </div>
  )
}

export default FilterToggle

FilterToggle.propTypes = {
  toggleFilter: PropTypes.func,
  filter: PropTypes.bool
}