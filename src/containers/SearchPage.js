import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from './SearchResults';

const SearchPage = props => {
    return (
        <div>
            <SearchBar 
                handleInput={props.handleInput}
                handleSubmit={props.handleSubmit}
                textInput={props.text}
              />
            {props.text}
            <SearchResults 
                movies={props.movies}
              />
        </div>
    )
}

export default SearchPage;