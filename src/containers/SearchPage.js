import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from './SearchResults';

const SearchPage = props => {
    return (
        <div>
            <SearchBar 
                handleInput={props.handleInput}  
              />
            {props.text}
            <SearchResults />
        </div>
    )
}

export default SearchPage;