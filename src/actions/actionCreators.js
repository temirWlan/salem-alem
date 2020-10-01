/* action types */
const POSTS_REQUESTED = 'POSTS_REQUESTED';

const POSTS_REJECTED = 'POSTS_REJECTED';
const ADD_POST = 'ADD_POST';

/* action creators */
const postsRequested = () => ({ type: POSTS_REQUESTED });

const postsLoaded = () => ({});

const postsRejected = () => ({ type: POSTS_REJECTED });


const addPost = (post) => {
	return {
		type: ADD_POST,
		payload: post
	};
};

export { POSTS_REQUESTED, , POSTS_REJECTED };
export { postLoading, addPost, postLoadingError };