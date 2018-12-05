const initialState = {
	movies: [],
	response: {},
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
				response: action.movies,
				loading: false,
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