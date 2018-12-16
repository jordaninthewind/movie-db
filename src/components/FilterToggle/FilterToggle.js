import React from 'react';
import './FilterToggle.css';

const FilterToggle = props => {
  return (
    <div id="filterToggle">
      <div>
        Sort by{' '}
        <span className={(props.filter ? 'active' : null)} onClick={() => props.toggleFilter(props.filter)}>
          release date
        </span>
        <span className={(props.filter ? null : 'active')} onClick={() => props.toggleFilter(props.filter)}>
          rating
        </span>
      </div>
    </div>
  );
};

export default FilterToggle;
