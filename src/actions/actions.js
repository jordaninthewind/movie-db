const setMovies = movies => {
	return { type: "SET_ALL_MOVIES", movies }
}

const setLoading = () => {
    return { type: "SET_LOADING", loading: true }
}

const setSearchTerm = input => {
    return { type: "SET_SEARCH_TERM", input }
}

export const getAllMovies = (url, searchTerm) => dispatch => {
    dispatch(setLoading())
    dispatch(setSearchTerm(searchTerm))
    
	fetch(url)
    .then(res => res.json())
    .then(json => dispatch(setMovies(json)))
    .catch(res => console.log(res))
}