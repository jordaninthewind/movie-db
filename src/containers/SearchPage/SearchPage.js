import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllMovies } from '../../actions/actions';
import './SearchPage.css';

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.match.params.name,
        }
    }

    handleInput = e => {
        this.setState({
            text: e.target.value,
        })
    }

    handleSearch = () => {
        this.props.history.push(`/search/${encodeURI(this.state.text) }`);
        this.props.getMovies(`${process.env.BASE_URL + encodeURI(this.props.match.params.name)}`, this.state.text);
    }

    componentDidMount = () => {
        this.props.getMovies(`${process.env.BASE_URL + encodeURI(this.props.match.params.name)}`, this.state.text);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.name !== prevProps.match.params.name) {
            this.props.getMovies(`${process.env.BASE_URL + encodeURI(this.props.match.params.name)}`, this.state.text);
        }
    }

    render() {
        return (
            <div id="searchBar">
                <div id="topTitle">netflixroulette</div>
                <div id="subTitle">FIND YOUR MOVIE</div>
                <input type="text"
                    id="textInput"
                    onChange={this.handleInput}
                    value={this.state.text}
                    placeholder="Type your search query here"
                />
                <button 
                    id="searchButton"
                    onClick={this.handleSearch}>
                    SEARCH
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: (url, input) => {dispatch(getAllMovies(url, input))}
    }
}

export default connect(null, mapDispatchToProps)(SearchPage);