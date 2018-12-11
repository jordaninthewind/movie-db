const initialState = {
	input: "",
	movies: [],
	currentPage: 0,
	totalPages: 0,
	totalResults: 0,
	loading: false,
	selectedMovieId: null,
	selectedMovie: {}
}

export default function moviesReducer(state = initialState, action) {
	switch (action.type) {
		case "SET_LOADING":
			return {
				...state,
				loading: true,
			}
		case "SET_ALL_MOVIES":
			return {
				...state,
				movies: action.movies.results,
				currentPage: action.movies.page,
				totalPages: action.movies.total_pages,
				totalResults: action.movies.total_results,
				loading: false,
			}
		case "SET_SEARCH_TERM":
			return {
				...state,
				input: action.input,
			}
		case "ADD_MOVIES_TO_PAGE": // this will be modified/implemented for pagination
			return {
				...state,
				movies: state.movies.concat(action.movies.results)
			}
		case "SET_SELECTED_MOVIE":
			return {
				...state,
				selectedMovieId: action.selectedMovieId
			}
		case "ADD_CURRENT_MOVIE_TO_STATE": // this is for show page
			return {
				...state
			}
		case "REMOVE_CURRENT_MOVIE_FROM_STATE": // this is for removing show page selection
			return {
				...state
			}
		default:
			return state;
	}
};