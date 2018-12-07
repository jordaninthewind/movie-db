import React, { Component } from 'react';
<<<<<<< HEAD
import MovieTile from '../../components/MovieTile/MovieTile';
=======
import { connect } from 'react-redux';
import DisplayTiles from '../../components/DisplayTiles/DisplayTiles';
import ResultsFilter from '../../components/ResultsFilter/ResultsFilter';
>>>>>>> feature-redux
import './SearchResults.css';

class SearchResults extends Component {
  constructor(props) {
    super(props);

<<<<<<< HEAD
    this.state = {
      movies: [],
      search: "",
      loading: false,
    }
  }

  getMovies = () => {
    this.setState({
      loading: true,
    })
    
    fetch(`${process.env.BASE_URL}?api_key=${process.env.API_KEY}&language=en-US&query=${encodeURI(this.state.search)}&include_adult=false`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          movies: json.results,
          loading: false,
        })
    })
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
    if ( this.state.movies.length > 0 && !this.state.loading ) {
      return (
        <div id="searchResults">
          { this.state.movies.map(movie => <MovieTile movie={movie} key={movie.id} />) }
        </div>
      )
    } else if ( this.state.loading ){
      return <div>Loading...</div>;
    } else {
      return <div>No Results</div>;
    }
  }
}

export default SearchResults;
=======
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
>>>>>>> feature-redux
