import React, { Component } from 'react';
import SearchResults from './SearchResults';

export default class ShowPage extends Component {
  render() {
    return (
      <div>
        <h1>Definitely the Show Page</h1>
        <SearchResults />
      </div>
    )
  }
}
