import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from './SearchResults';

class SearchPage extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <SearchResults />
            </div>
        )
    }
}

export default SearchPage;