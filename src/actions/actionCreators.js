import SourceService from './../services/server';
import { POSTS_REQUESTED, POSTS_LOADED, POSTS_REJECTED, ADD_POST, POST_LIKED } from './types';



/* action creators */
const postsRequested = () => ({ type: POSTS_REQUESTED });

const postsLoaded = posts => {
	return { 
		type: POSTS_LOADED, 
		payload: posts
	}
};

const postsRejected = () => ({ type: POSTS_REJECTED });

const addedPost = post => {
	return {
		type: ADD_POST,
		payload: post
	};
};

const onLikedPost = () => ({ type: POST_LIKED });

/* async */
const uploadPosts = () => dispatch => {
	dispatch(postsRequested());

	new SourceService().getPosts()
		.then(posts => dispatch(postsLoaded(posts)))
		.catch(() => dispatch(postsRejected()));
};





export { postsRequested, postsLoaded, postsRejected, addedPost, uploadPosts };