import React, { Component } from 'react';
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
                    onClick={() => { this.props.history.push(`/search/${encodeURI(this.state.text) }`) }} >SEARCH</button>
            </div>
        )
    }
}

export default SearchPage;