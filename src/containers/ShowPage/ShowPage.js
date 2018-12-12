import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCurrentFilmId } from '../../actions/actions';
import MovieImage from '../../components/MovieImage/MovieImage';
import Header from '../../components/Header/Header';
import './ShowPage.css';

class ShowPage extends Component {
  constructor(props) {
    super(props);
  }

  backToSearch = () => {
    this.props.history.push(`/search/${this.props.input}`);
    this.props.removeCurrentFilmId();
  }

  render() {
    const movie = this.props.movies.filter(movie => movie.id === this.props.id)[0]
    return (
      <div className="showPage">
        <Header 
          name={this.props.input}
          history={this.props.history} 
          backToSearch={this.backToSearch}/>
        <MovieImage movie={movie} />
        {/* <MovieInfo /> */}
        <h1>{movie.title}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    input: state.moviesReducer.input,
    movies: state.moviesReducer.movies,
    id: state.moviesReducer.selectedMovieId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeCurrentFilmId: () => dispatch(removeCurrentFilmId()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage);
