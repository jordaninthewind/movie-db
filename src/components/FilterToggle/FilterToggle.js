import React from 'react';
import './FilterToggle.css';

const FilterToggle = props => {
  return (
    <div id="filterToggle">
      <div>
        Sort by{' '}
        <span className={(props.filter ? 'active' : null)} onClick={() => props.toggleFilter()}>
          release date
        </span>
        <span className={(props.filter ? null : 'active')} onClick={() => props.toggleFilter()}>
          rating
        </span>
      </div>
    </div>
  );
};

export default FilterToggle;
