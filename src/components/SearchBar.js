import React from 'react'

const SearchBar = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" 
                onChange={props.handleInput} 
                placeholder="Type your search here"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;