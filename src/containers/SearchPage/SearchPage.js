import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Header from '../../components/Header/Header'
import { getAllMovies, setSearchTerm, setLoading } from '../../actions/actions'
import './SearchPage.css'

export class SearchPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: this.props.match.params.name || '',
    }
  }

  _handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleSearch()
    }
  }

  handleInput = e => {
    this.setState({
      text: e.target.value
    })
  }

  movieAction = () => {
    if (this.state.text !== this.props.input) {
      this.props.setSearchTerm(this.state.text)
      this.props.setLoading()
      this.props.getMovies(this.state.text)
    }
  }

  handleSearch = () => {
    if (this.state.text) {
      this.props.history.push(`/search/${encodeURI(this.state.text)}`)
      this.movieAction()
    }
  }

  componentDidMount = () => {
    if (this.props.match.params.name && !this.props.input) {
      this.movieAction()
    }
  }

  render() {
    return (
      <div id="searchBar">
        <Header />
        <div id="subTitle">FIND YOUR MOVIE</div>
        <input
          type="text"
          id="textInput"
          onChange={this.handleInput}
          onKeyPress={this._handleKeyPress}
          value={this.state.text}
          placeholder="Type your search query here"
        />
        <button id="searchButton" onClick={this.handleSearch}>
          SEARCH
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    input: state.moviesReducer.input
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovies: query => {
      dispatch(getAllMovies(query))
    },
    setSearchTerm: input => {
      dispatch(setSearchTerm(input))
    },
    setLoading: () => {
      dispatch(setLoading())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage)

SearchPage.propTypes = {
  match: PropTypes.object,
  input: PropTypes.string,
  setSearchTerm: PropTypes.func,
  setLoading: PropTypes.func,
  getMovies: PropTypes.func,
  history: PropTypes.object
}
