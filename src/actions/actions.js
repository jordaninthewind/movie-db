const SET_ALL_MOVIES = "SET_ALL_MOVIES"
const SET_LOADING = "SET_LOADING"
const SET_SEARCH_TERM = "SET_SEARCH_TERM"
const ADD_MOVIES_TO_PAGE = "ADD_MOVIES_TO_PAGE"
const SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE"

const setMovies = movies => {
	return { type: SET_ALL_MOVIES, movies }
}

const setLoading = () => {
    return { type: SET_LOADING, loading: true }
}

const setSearchTerm = input => {
    return { type: SET_SEARCH_TERM, input }
}

export const getAllMovies = (url, searchTerm) => dispatch => {
    dispatch(setLoading())
    dispatch(setSearchTerm(searchTerm))
    
	fetch(url)
    .then(res => res.json())
    .then(json => dispatch(setMovies(json)))
    .catch(res => console.log(res))
}

const addMoviesToStore = movies => {
    return { type: ADD_MOVIES_TO_PAGE, movies }
}

export const getMoreMovies = url => dispatch => {
    fetch(url)
    .then(res =>  res.json())
    .then(json => dispatch(addMoviesToStore(json)))
}

const setSelectedMovie = id => {
    return { type: SET_SELECTED_MOVIE, selectedMovieId: id }
}

export const handleMovieSelect = id => dispatch => {
    dispatch(setSelectedMovie(id))
}