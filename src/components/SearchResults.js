import React, { Component } from 'react';
import MovieTile from '../components/MovieTile';

class SearchResults extends Component {
  render() {
    return (
      <div id="searchResults">
        {/* { props.movies.length > 0 &&
          <div>
            { props.movies.map(movie => <MovieTile movie={movie} />) }
          </div>
        } */}
      </div>
    )
  }
}

export default SearchResults;


// handleSubmit = (e) => {
//   e.preventDefault();
//   fetch(`${process.env.BASE_URL}?api_key=${process.env.API_KEY}&language=en-US&query=${this.slugifyQuery(this.state.textInput)}&include_adult=false`)
//     .then(res => res.json())
//   //   .then(json => console.log(json))
//     .then(json => {
//       this.setState({
//         movies: json.results,
//         meta: {
//             total_results: json.total_results,
//             total_pages: json.total_pages,
//             current_page: json.current_page
//         }
//       })
//   })
// }