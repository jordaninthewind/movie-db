import React from 'react';
import { withRouter } from 'react-router-dom';

const SearchButton = withRouter(({ history, ...props }) => (
    <button
        {...props}
        type="submit"
        onClick={() => history.push(`/search/${props.text.split(" ").join("%20")}`)} />
))

const SearchBar = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" 
                onChange={props.handleInput} 
                placeholder="Type your search query here"
              />
            <SearchButton text={props.textInput}>Search</SearchButton>
        </form>
    )
}

export default SearchBar;