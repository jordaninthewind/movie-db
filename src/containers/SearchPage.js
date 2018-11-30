import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults';

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