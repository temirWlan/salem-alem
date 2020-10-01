import { LOADIING_POSTS, ADD_POST, ERROR_POSTS_LOADING } from '../actions';

const initialState = {
	posts: [],
	loading: true,
	error: false
};

export default function postReducer(state = initialState, action) {
	switch(action.type) {
		case LOADIING_POSTS:
			return {
				...state,
				loading: true
			};
			break;
		case ADD_POST:
			return {
				...state,
				posts: action.payload
			};
			break;
		case ERROR_POSTS_LOADING:
			return {
				...state,
				error: true
			};
			break;
		default: 
			return state;
	}
}

