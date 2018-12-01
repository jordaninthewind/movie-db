const setMovies = movies => {
	return { type: "SET_ALL_MOVIES", movies }
}

const setLoading = () => {
    return { type: "SET_LOADING", loading: true }
}

export const getAllMovies = url => dispatch => {
    dispatch(setLoading())
    
	fetch(url)
		.then(res => res.json())
		.then(json => dispatch(setMovies(json)))
}