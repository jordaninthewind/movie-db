import React from 'react';
import SearchButton from '../components/SearchButton';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
        }
    }

    handleInput = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    render() {
        return (
            <div className="searchBar">
                <div id="title">netflixroulette</div>
                <div id="subtitle">FIND YOUR MOVIE</div>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text"
                        id="inputBar"
                        onChange={this.handleInput}
                        placeholder="Type your search query here"
                    />
                    <SearchButton text={this.state.text}>Search</SearchButton>
                </form>
            </div>
        )
    }
}

export default SearchBar;