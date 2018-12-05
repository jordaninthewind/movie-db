import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../../actions/actions';
import MovieTile from '../../components/MovieTile/MovieTile';
import './SearchResults.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    }
  }

  getMovies = () => {
    this.props.getAllMovies(`${process.env.BASE_URL + encodeURI(this.state.search)}`);
  }

  updateMovies = () => {
    this.setState({
      search: this.props.match.params.name
    }, () => this.getMovies())
  }

  componentDidMount() {
    this.updateMovies();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.updateMovies();
    }
  }

  render() {
    console.log(this.props.movies)
    console.log(this.props.movies.results)
    if ( !this.props.loading && this.props.movies.results ) { 
      return (
        <div id="searchResults">
          { this.props.movies.results.map(movie => <MovieTile movie={movie} key={movie.id} />) }
        </div>
      )
    } else if ( !!this.props.loading ){
      return <div>Loading...</div>;
    } else {
      return <div>No Results</div>;
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
  return {
    getAllMovies: url => dispatch(getAllMovies(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);