const SET_ALL_MOVIES = 'SET_ALL_MOVIES';
const SET_LOADING = 'SET_LOADING';
const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
const ADD_MOVIES_TO_PAGE = 'ADD_MOVIES_TO_PAGE';
const SELECTED_MOVIE_ID = 'SELECTED_MOVIE_ID';
const CURRENT_SELECTED_MOVIE = 'CURRENT_SELECTED_MOVIE';

export const setSearchTerm = searchTerm => {
  return { type: SET_SEARCH_TERM, input: searchTerm };
}

export const setLoading = () => {
  return { type: SET_LOADING, loading: true };
}

export const getAllMovies = url => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(json => dispatch({ type: SET_ALL_MOVIES, movies: json }))
    .catch(res => console.log(res));
};

export const getMoreMovies = url => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(json => dispatch({ type: ADD_MOVIES_TO_PAGE, movies: json }));
};

export const handleMovieSelect = id => {
  return { type: SELECTED_MOVIE_ID, selectedMovieId: id };
};

export const removeCurrentFilmId = () => {
  return { type: SELECTED_MOVIE_ID, selectedMovieId: null };
};

export const addCurrentMovieToState = url => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(json =>
      dispatch({ type: CURRENT_SELECTED_MOVIE, selectedMovie: json })
    );
};

export const removeCurrentMovieFromState = () => {
  return { type: CURRENT_SELECTED_MOVIE, selectedMovie: {} };
};
