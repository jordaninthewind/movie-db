import React from 'react';
import SearchResults from '../components/SearchResults';
import SearchBar from './SearchBar'

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