import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ShowPage.css';

class ShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: this.props.match.params.name,
    }

  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.setState({
        movie: this.props.match.params.name,
      })
    }
}

  render() {
    return (
      <div>
        <button 
          id="showPageSearchButton" 
          onClick={() => { this.props.history.push(`/search/${this.props.searchTerm}`) }}>
          Search
        </button>
        <h1>Show Page for: <em>{this.state.movie}</em></h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    searchTerm: state.moviesReducer.input,
  }
}

export default connect(mapStateToProps, null)(ShowPage);