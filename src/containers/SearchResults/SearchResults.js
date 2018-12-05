import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieTile from '../../components/MovieTile/MovieTile';
import './SearchResults.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    if ( this.props.loading ) {
      return <div>Loading...</div>;
    } else if ( this.props.movies.length !== 0 ) {
      return (
        <ul id="searchResults">
          { this.props.movies.map(movie => <MovieTile movie={movie} key={movie.id} />) }
        </ul>
      )
    } else {
      return <div id="noResults">No films found</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    movies: state.moviesReducer.movies,
    loading: state.moviesReducer.loading
  }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, null)(SearchResults);