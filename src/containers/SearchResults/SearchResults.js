import React, { Component } from 'react';
import { connect } from 'react-redux';
import DisplayTiles from '../../components/DisplayTiles/DisplayTiles';
import ResultsFilter from '../../components/ResultsFilter/ResultsFilter';
import './SearchResults.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state ={
      filter: true,
    }
  }

  toggleFilter = () => {
    this.setState({
      filter: !this.state.filter,
    })
  }

  render() {
    return (
      <>
        <ResultsFilter 
          total={this.props.total}
          filter={this.state.filter}
          toggleFilter={this.toggleFilter}
        />
        <DisplayTiles 
          movies={this.props.movies} 
          loading={this.props.loading}
          input={this.props.input}
          filter={this.state.filter}
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