const SET_ALL_MOVIES = 'SET_ALL_MOVIES'
const SET_LOADING_TO_TRUE = 'SET_LOADING_TO_TRUE'
const SET_LOADING_TO_FALSE = 'SET_LOADING_TO_FALSE'
const SET_SEARCH_TERM = 'SET_SEARCH_TERM'
const ADD_MOVIES_TO_PAGE = 'ADD_MOVIES_TO_PAGE'
const SELECTED_MOVIE_ID = 'SELECTED_MOVIE_ID'
const CURRENT_SELECTED_MOVIE = 'CURRENT_SELECTED_MOVIE'
const TOGGLE_FILTER = 'TOGGLE_FILTER'
const SORT_MOVIES = 'SORT_MOVIES'


export const setSearchTerm = searchTerm => {
  return { type: SET_SEARCH_TERM, input: searchTerm }
}

export const setLoading = () => {
  return { type: SET_LOADING_TO_TRUE }
}

export const stopLoading = () => {
  return { type: SET_LOADING_TO_FALSE }
}

export const sortAllMovies = () => {
  return { type: SORT_MOVIES }
}

export const getAllMovies = url => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(json => {
      const movies = Object.assign({}, json) // to be reconsidered
      setDate(movies.results)
      dispatch({ type: SET_ALL_MOVIES, movies: movies })
      dispatch(sortAllMovies())
      dispatch(stopLoading())
    })
}

const setDate = movies => {
  return movies.forEach(
    movie => (movie.release_date = new Date(movie.release_date))
  )
}

export const getMoreMovies = (searchTerm, page) => dispatch => {
  const url = `${process.env.BASE_URL + searchTerm}&page=${page + 1}`
  dispatch(setLoading())
  fetch(url)
    .then(res => res.json())
    .then(json => {
      const movies = Object.assign({}, json)
      setDate(movies.results)
      dispatch({ type: ADD_MOVIES_TO_PAGE, movies })
      dispatch(sortAllMovies())
      dispatch(stopLoading())
    })
}

export const handleMovieSelect = id => {
  return { type: SELECTED_MOVIE_ID, selectedMovieId: id }
}

export const removeCurrentFilmId = () => {
  return { type: SELECTED_MOVIE_ID, selectedMovieId: null }
}

export const addCurrentMovieToState = id => dispatch => {
  const url = process.env.MOVIE_URL + id + process.env.API_KEY
  fetch(url)
    .then(res => res.json())
    .then(json =>
      dispatch({ type: CURRENT_SELECTED_MOVIE, selectedMovie: json })
    )
}

export const removeCurrentMovieFromState = () => {
  return { type: CURRENT_SELECTED_MOVIE, selectedMovie: {} }
}

export const toggleFilter = bool => {
  return { type: TOGGLE_FILTER, filter: !bool }
}

export const sum = (a,b) => a + b;