import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './ShowPage.css';

class ShowPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Header />
        <h1>Definitely the Show Page</h1>
      </div>
    )
  }
}

export default ShowPage;