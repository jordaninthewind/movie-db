import React from 'react';
import './FilterToggle.css';

const FilterToggle = props => {
  return (
    <div id="filterToggle">
      <div onClick={() => props.toggleFilter()}>
        Sort by{' '}
        <span className={(props.filter ? null : 'active')}>
          release date
        </span>
        <span className={(props.filter ? 'active' : null)}>
          rating
        </span>
      </div>
    </div>
  );
};

export default FilterToggle;
