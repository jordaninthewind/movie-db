const SET_ALL_MOVIES = 'SET_ALL_MOVIES';
const SET_LOADING = 'SET_LOADING';
const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
const ADD_MOVIES_TO_PAGE = 'ADD_MOVIES_TO_PAGE';
const SELECTED_MOVIE_ID = 'SELECTED_MOVIE_ID';
const CURRENT_SELECTED_MOVIE = 'CURRENT_SELECTED_MOVIE';
const TOGGLE_FILTER = 'TOGGLE_FILTER';
const SORT_MOVIES = 'SORT_MOVIES';

export const setSearchTerm = searchTerm => {
  return { type: SET_SEARCH_TERM, input: searchTerm };
};

export const setLoading = () => {
  return { type: SET_LOADING, loading: true };
};

export const getAllMovies = url => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(json => {
      const movies = Object.assign({}, json);
      sortAllMovies(movies.results, true);
      dispatch({ type: SET_ALL_MOVIES, movies: movies });
    });
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

export const toggleFilter = bool => {
  return { type: TOGGLE_FILTER, filter: !bool };
};

export const sortMovies = (movies, bool) => {
  return { type: SORT_MOVIES, movies: sortAllMovies(movies, bool) };
};

const sortAllMovies = (movies, bool) => {
  if (bool) {
    movies.forEach(
      movie => (movie.release_date = new Date(movie.release_date))
    );

    movies.sort((a, b) => b.release_date - a.release_date);
  } else {
    movies.sort((a, b) => b.vote_average - a.vote_average);
  }

  return movies;
};
