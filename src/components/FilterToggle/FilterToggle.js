import React from 'react'
import './FilterToggle.css'

const FilterToggle = props => {
  const style = {color: '#f55263'}
  return (
    <div id="filterToggle">
      <div>Sort by: <span 
                      style={props.filter ? style : null }
                      onClick={props.toggleFilter}>
                      release date</span> 
                    <span 
                      style={props.filter ? null : style }
                      onClick={props.toggleFilter}>
                      rating</span>
      </div>
    </div>
  )
}

export default FilterToggle
