import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types' 
import {
  removeCurrentFilmId,
  addCurrentMovieToState,
  removeCurrentMovieFromState
} from '../../actions/actions'
import MovieImage from '../../components/MovieImage/MovieImage'
import Header from '../../components/Header/Header'
import ShowDetails from '../../components/ShowDetails/ShowDetails'
import './ShowPage.css'

class ShowPage extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount = () => {
    const url =
      process.env.MOVIE_URL + this.props.match.params.id + process.env.API_KEY
    this.props.addCurrentMovieToState(url)
  };

  componentDidUpdate = prevProps => {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const url =
        process.env.MOVIE_URL +
        this.props.match.params.id +
        process.env.API_KEY
      this.props.addCurrentMovieToState(url)
    }
  };

  componentWillUnmount = () => {
    this.props.removeCurrentFilmId()
    this.props.removeCurrentMovieFromState()
  };

  render() {
    return (
      <div className="showPage">
        <Header input={this.props.input} history={this.props.history} />
        <div className="movieInfo">
          <MovieImage movie={this.props.currentMovie} />
          <ShowDetails movie={this.props.currentMovie} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    input: state.moviesReducer.input,
    movies: state.moviesReducer.movies,
    id: state.moviesReducer.selectedMovieId,
    currentMovie: state.moviesReducer.selectedMovie
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeCurrentFilmId: () => dispatch(removeCurrentFilmId()),
    addCurrentMovieToState: url => dispatch(addCurrentMovieToState(url)),
    removeCurrentMovieFromState: () => dispatch(removeCurrentMovieFromState())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowPage)

ShowPage.propTypes = {
  match: PropTypes.object,
  addCurrentMovieToState: PropTypes.func,
  removeCurrentFilmId: PropTypes.func,
  removeCurrentMovieFromState: PropTypes.func,
  history: PropTypes.object,
  currentMovie: PropTypes.object,
  input: PropTypes.string
}