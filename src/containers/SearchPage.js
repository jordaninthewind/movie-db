import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from './SearchResults';

const SearchPage = (props) => {
    return (
        <div>
            <SearchBar 
                handleInput={props.handleInput}  
              />
            <h1>{props.text}</h1>
            <SearchResults />
        </div>
    )
}

export default SearchPage;