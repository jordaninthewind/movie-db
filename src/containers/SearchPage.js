import React from 'react';
// import SearchResults from './SearchResults';

class SearchPage extends React.Component {
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
                <input type="text"
                    onChange={this.handleInput}
                    placeholder="Type your search query here"
                />
                <button onClick={() => { this.props.history.push(`/search/${this.state.text.split(" ").join("%20") }`)}} >Search</button>
                {/* <SearchResults {...this.props}/> */}
            </div>
        )
    }
}

export default SearchPage;