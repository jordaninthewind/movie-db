const initialState = {
	movies: [],
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
				movies: action.movies,
				loading: false,
			}
		default:
			return state;
	}
};