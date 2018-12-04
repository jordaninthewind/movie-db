import React from 'react';
import './SearchPage.css';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.match.params.name,
        }
    }

    handleInput = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    render() {
        return (
            <div id="searchBar">
                <div id="title">netflixroulette</div>
                <div id="subtitle">FIND YOUR MOVIE</div>
                <input type="text"
                    onChange={this.handleInput}
                    value={this.state.text}
                    placeholder="Type your search query here"
                />
                <button 
                    id="searchButton"
                    onClick={() => { this.props.history.push(`/search/${encodeURI(this.state.text) }`)}} >Search</button>
            </div>
        )
    }
}

export default SearchPage;