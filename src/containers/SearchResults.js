import React, { Component } from 'react';

export default class SearchResults extends Component {
  render() {
    let query = window.location.pathname.split('/')[1];

    return (
      <div>
        <h1>Search Results Query: {query}</h1>
      </div>
    )
  }
}
