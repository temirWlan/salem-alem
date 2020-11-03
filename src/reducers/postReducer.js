import { POSTS_REQUESTED, POSTS_LOADED, POSTS_REJECTED, ADD_POST, POST_LIKED } from '../actions';

const initialState = {
	posts: [],
	loading: true,
	error: false
};

export default function postReducer(state = initialState, action) {
	switch(action.type) {
		case POSTS_REQUESTED:
			return {
				...state,
				loading: true,
				error: false
			};
		case POSTS_LOADED: 
			return {
				...state,
				posts: [...action.payload],
				loading: false,
				error: false
			}
		
		case POSTS_REJECTED:
			return {
				...state,
				loading: false,
				error: true
			};
		case ADD_POST:
			return {
				...state,
				posts: [action.payload, ...state.posts],
				loading: false,
				error: false
			};
		case POST_LIKED:
			state.posts.forEach(post => {
				console.dir(post);
			});
			break;
		default: 
			return state;
	}
}

