import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import './ShowPage.css';

class ShowPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header name={this.props.input} history={this.props.history} />
        <h1>Definitely the Show Page</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    input: state.moviesReducer.input
  };
};

export default connect(
  mapStateToProps,
  null
)(ShowPage);
