import React from 'react';
import { withRouter } from 'react-router-dom';
const SearchButton = withRouter(({ history, ...props }) => (
    <button
        {...props}
        id="submitButton"
        type="submit"
        onClick={() => { history.push(`/search/${props.text.split(" ").join("%20") }`)}} />
))

export default SearchButton;