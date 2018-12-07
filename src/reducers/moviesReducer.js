const initialState = {
	input: "",
	movies: [],
	currentPage: 0,
	totalPages: 0,
	totalResults: 0,
	loading: false,
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
		default:
			return state;
	}
};