import React, { Component } from 'react';
import MovieTile from '../components/MovieTile';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      search: props.match.params.name,
      loading: false,
    }
  }


  getMovies = () => {
    this.setState({
      loading: true,
    })
    fetch(`${process.env.BASE_URL}?api_key=${process.env.API_KEY}&language=en-US&query=${this.state.search.split(" ").join("%20")}&include_adult=false`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          movies: json.results,
          loading: false,
        })
    })
  }

  componentDidMount() {
    this.getMovies();
  }
  

  render() {
    if ( this.state.movies.length > 0 && !this.state.loading ) {
      return (
        <div id="searchResults">
          { this.state.movies.map(movie => <MovieTile movie={movie} />) }
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