import SourceService from './../services/server';
import { POSTS_REQUESTED, POSTS_LOADED, POSTS_REJECTED, ADD_POST } from './types';



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

/* async */
const uploadPosts = () =>  {
	return dispatch => {
		dispatch(postsRequested());

		new SourceService().getPosts()
			.then(res => res.json())
			.then(posts => dispatch(postsLoaded(posts)))
			.catch(() => dispatch(postsRejected()));
	};
};



export { postsRequested, postsLoaded, postsRejected, addedPost, uploadPosts };