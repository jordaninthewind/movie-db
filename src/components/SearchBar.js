import React from 'react'

const SearchBar = (props) => {
    return (
        <form>
            <input type="text" placeholder="Type your search here"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar;