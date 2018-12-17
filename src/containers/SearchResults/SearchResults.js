import React, { Component } from 'react';
import { connect } from 'react-redux';
import { throttle } from 'lodash';
import { handleMovieSelect, toggleFilter, sortAllMovies, getMoreMovies } from '../../actions/actions';
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
    this.props.sortAllMovies();
  }

  makeUrl = () => {
    return `${process.env.BASE_URL + this.props.input}&page=${this.props.currentPage + 1}`;
  }

  handleMoreMovies = url => {
    if (this.props.currentPage < this.props.totalPages) {
      this.props.getMoreMovies(this.makeUrl());
    }
  }

  loadMoreResults = throttle(() => {
      if ( window.innerHeight + window.scrollY >= document.body.offsetHeight * .99 ) {
        this.handleMoreMovies();
      }
  }, 500)

  componentDidMount() {
    window.addEventListener('scroll', this.loadMoreResults);
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
            sortMovies={this.props.sortMovies}
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
    filter: state.moviesReducer.filter,
    currentPage: state.moviesReducer.currentPage,
    totalPages: state.moviesReducer.totalPages
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
    sortAllMovies: () => {
      dispatch(sortAllMovies())
    },
    getMoreMovies: url => {
      dispatch(getMoreMovies(url))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
