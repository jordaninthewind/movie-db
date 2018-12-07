<<<<<<< HEAD
import React from 'react';
import './SearchPage.css';

class SearchPage extends React.Component {
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../../actions/actions';
import './SearchPage.css';

class SearchPage extends Component {
>>>>>>> feature-redux
    constructor(props) {
        super(props);

        this.state = {
            text: props.match.params.name,
        }
    }

<<<<<<< HEAD
    handleInput = (e) => {
=======
    handleInput = e => {
>>>>>>> feature-redux
        this.setState({
            text: e.target.value,
        })
    }

<<<<<<< HEAD
    render() {
        return (
            <div id="searchBar">
                <div id="title">netflixroulette</div>
                <div id="subtitle">FIND YOUR MOVIE</div>
                <input type="text"
=======
    movieAction = () => {
        this.props.getMovies(`${process.env.BASE_URL + encodeURI(this.props.match.params.name)}`, this.state.text);
    }

    handleSearch = () => {
        this.props.history.push(`/search/${encodeURI(this.state.text) }`);
        this.movieAction();
    }

    componentDidMount = () => {
        this.movieAction();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.name !== prevProps.match.params.name) {
            this.movieAction();
        }
    }

    render() {
        return (
            <div id="searchBar">
                <div id="topTitle">netflixroulette</div>
                <div id="subTitle">FIND YOUR MOVIE</div>
                <input type="text"
                    id="textInput"
>>>>>>> feature-redux
                    onChange={this.handleInput}
                    value={this.state.text}
                    placeholder="Type your search query here"
                />
                <button 
                    id="searchButton"
<<<<<<< HEAD
                    onClick={() => { this.props.history.push(`/search/${encodeURI(this.state.text) }`)}} >Search</button>
=======
                    onClick={this.handleSearch}>
                    SEARCH
                </button>
>>>>>>> feature-redux
            </div>
        )
    }
}

<<<<<<< HEAD
export default SearchPage;
=======
const mapDispatchToProps = dispatch => {
    return {
        getMovies: (url, input) => {dispatch(getAllMovies(url, input))}
    }
}

export default connect(null, mapDispatchToProps)(SearchPage);
>>>>>>> feature-redux
