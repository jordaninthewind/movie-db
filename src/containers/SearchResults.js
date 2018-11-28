import React, { Component } from 'react';

export default class SearchResults extends Component {
  render() {
    let query = window.location.pathname.split('/');

    return (
      <div>
        <h1>Route: { query[1] }</h1>
        <h2>Query: { query[2] }</h2>
      </div>
    )
  }
}
