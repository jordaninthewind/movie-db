import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayTiles from '../../components/DisplayTiles/DisplayTiles';
import ResultsFilter from '../../components/ResultsFilter/ResultsFilter';
import './SearchResults.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <>
        <ResultsFilter 
          total={this.props.total}
        />
        <DisplayTiles 
          movies={this.props.movies} 
          loading={this.props.loading}
          input={this.props.input}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.moviesReducer.movies,
    loading: state.moviesReducer.loading,
    input: state.moviesReducer.input,
    total: state.moviesReducer.totalResults
  }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, null)(SearchResults);