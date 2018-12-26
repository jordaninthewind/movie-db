import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import { throttle } from 'lodash'
import DisplayTiles from '../../components/DisplayTiles/DisplayTiles'
import ResultsFilter from '../../components/ResultsFilter/ResultsFilter'
import { handleMovieSelect, toggleFilter, sortAllMovies, getMoreMovies } from '../../actions/actions'
import './SearchResults.css'

class SearchResults extends Component {
  constructor(props) {
    super(props)
  }

  handleMovieSelect = id => {
    this.props.selectMovie(id)
  };

  handleSort = () => {
    this.props.toggleFilter(this.props.filter)
    this.props.sortAllMovies()
  }

  handleMoreMovies = () => {
    if (this.props.currentPage < this.props.totalPages) {
      this.props.getMoreMovies(this.props.input, this.props.currentPage)
    }
  }

  loadMoreResults = throttle(() => {
    if ( window.innerHeight + window.scrollY >= document.body.offsetHeight * .99 ) {
      this.handleMoreMovies()
    }
  }, 500)

  componentDidMount() {
    window.addEventListener('scroll', this.loadMoreResults)
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
    )
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectMovie: id => {
      dispatch(handleMovieSelect(id))
    },
    toggleFilter: bool => {
      dispatch(toggleFilter(bool))
    },
    sortAllMovies: () => {
      dispatch(sortAllMovies())
    },
    getMoreMovies: (searchTerm, page) => {
      dispatch(getMoreMovies(searchTerm, page))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults)

SearchResults.propTypes = {
  selectMovie: PropTypes.func,
  toggleFilter: PropTypes.func,
  filter: PropTypes.bool,
  sortAllMovies: PropTypes.func,
  input: PropTypes.string,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  movies: PropTypes.array,
  selectedMovieId: PropTypes.number,
  loading: PropTypes.bool,
  getMoreMovies: PropTypes.func,
  total: PropTypes.number
}