const initialState = {
  input: '',
  movies: [],
  filter: false,
  currentPage: 0,
  totalPages: 0,
  totalResults: 0,
  loading: false,
  selectedMovieId: null,
  selectedMovie: {}
}

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
  case 'SET_LOADING_TO_TRUE':
    return {
      ...state,
      loading: true
    }
  case 'SET_LOADING_TO_FALSE':
    return {
      ...state,
      loading: false
    }
  case 'SET_ALL_MOVIES':
    return {
      ...state,
      movies: action.movies.results,
      currentPage: action.movies.page,
      totalPages: action.movies.total_pages,
      totalResults: action.movies.total_results
    }
  case 'SET_SEARCH_TERM':
    return {
      ...state,
      input: action.input
    }
  case 'ADD_MOVIES_TO_PAGE':
    return {
      ...state,
      movies: [...state.movies].concat(action.movies.results),
      currentPage: action.movies.page
    }
  case 'SELECTED_MOVIE_ID':
    return {
      ...state,
      selectedMovieId: action.selectedMovieId
    }
  case 'CURRENT_SELECTED_MOVIE':
    return {
      ...state,
      selectedMovie: action.selectedMovie
    }
  case 'TOGGLE_FILTER':
    return {
      ...state,
      filter: action.filter
    }
  case 'SORT_MOVIES':
    if (state.filter) {
      return {
        ...state,
        movies: state.movies.sort((a, b) => b.vote_average - a.vote_average)
      }
    } else {
      return {
        ...state,
        movies: state.movies.sort((a, b) => b.release_date - a.release_date)
      }
    }
  default:
    return state
  }
}
