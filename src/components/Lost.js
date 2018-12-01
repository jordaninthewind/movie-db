import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Lost extends Component {
  render() {
    return (
      <div>
        <h1>This is not a real route, c'mon.</h1>
        <Link to='/'>Back Home</Link>
      </div>
    )
  }
}
