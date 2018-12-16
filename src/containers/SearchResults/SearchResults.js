import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleMovieSelect, toggleFilter, sortMovies } from '../../actions/actions';
import DisplayTiles from '../../components/DisplayTiles/DisplayTiles';
import ResultsFilter from '../../components/ResultsFilter/ResultsFilter';
import './SearchResults.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  }

  handleMovieSelect = id => {
    this.props.selectMovie(id);
  };

  handleSort = () => {
    this.props.toggleFilter(this.props.filter);
    this.props.sortMovies(this.props.movies, this.props.filter);
  }

  render() {
    return (
      <>
        <ResultsFilter
          total={this.props.total}
          toggleFilter={this.handleSort}
          filter={this.props.filter}
          input={this.props.input}
          selectedMovieId={this.props.selectedMovieId}
        />
        { this.props.movies && 
          <DisplayTiles
            movies={this.props.movies}
            loading={this.props.loading}
            input={this.props.input}
            filter={this.props.filter}
            handleMovieSelect={this.handleMovieSelect}
            selectedMovieId={this.props.selectedMovieId}
          />
        }
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.moviesReducer.movies,
    loading: state.moviesReducer.loading,
    input: state.moviesReducer.input,
    total: state.moviesReducer.totalResults,
    selectedMovieId: state.moviesReducer.selectedMovieId,
    filter: state.moviesReducer.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectMovie: id => {
      dispatch(handleMovieSelect(id));
    },
    toggleFilter: bool => {
      dispatch(toggleFilter(bool));
    },
    sortMovies: (movies, bool) => {
      dispatch(sortMovies(movies, bool))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
