import axios from 'axios';

// import addItemsInStorage from '../../services/storage';
import { 
	ADD_POST,
	// AD_ADD,
	// ADS_LOADING,
	// ADS_REJECTED,
	FRIENDS_REQUESTED,
	FRIENDS_LOADED,
	FRIENDS_REJECTED,
	POSTS_REQUESTED,
	POSTS_LOADED,
	POSTS_REJECTED,
	// POST_LIKED
} from '../types';



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

// const onLikedPost = () => ({ type: POST_LIKED });

const uploadPosts = () => dispatch => {
	dispatch(postsRequested());

	axios.get('./db.json')
		.then(res => console.log(res));
		// .then(posts => {
		// 	dispatch(postsLoaded(posts))
		// 	addItemsInStorage('posts', posts);
		// })
		// .catch(() => dispatch(postsRejected()));
};

// friends
const friendsRequested = () => ({type: FRIENDS_REQUESTED});
const friendsLoaded = friends => ({type: FRIENDS_LOADED, payload: friends});
const friendsRejected = () => ({type: FRIENDS_REJECTED});

const uploadFriends = () => dispatch => {
	dispatch(friendsRequested());

	axios.get('https://social-network.samuraijs.com/api/1.0/users')
		.then(res => dispatch(friendsLoaded(res.data.items)))
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