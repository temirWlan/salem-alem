import SourceService from './../services/server';
import { 
	POSTS_REQUESTED, 
	POSTS_LOADED, 
	POSTS_REJECTED, 
	ADD_POST, 
	POST_LIKED,
	FRIENDS_REQUESTED,
   FRIENDS_LOADED,
   FRIENDS_REJECTED  
} from './types';



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

const uploadPosts = dispatch => {
	dispatch(postsRequested());

	new SourceService().getPosts()
		.then(posts => dispatch(postsLoaded(posts)))
		.catch(() => dispatch(postsRejected()));
};

// friends
const friendsRequested = () => ({type: FRIENDS_REQUESTED});
const friendsLoaded = friends => ({type: FRIENDS_LOADED, payload: friends});
const friendsRejected = () => ({type: FRIENDS_REJECTED});

// const uploadFriendsThunkCreator = () =>
const uploadFriends = dispatch => {
	dispatch(friendsRequested());

	new SourceService().getFriends()
		.then(res => dispatch(friendsLoaded(res)))
		.catch(() => dispatch(friendsRejected()));
};


export { 
	postsRequested, 
	postsLoaded, 
	postsRejected, 
	addedPost, 
	uploadPosts,
	friendsRequested,
	friendsLoaded,
	friendsRejected,
	uploadFriends
};