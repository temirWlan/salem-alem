import { combineReducers } from 'redux';

import postReducer from './postReducer';
import adReducer from './adReducer';
import friendsReducer from './friendsReducer';

const reducer = combineReducers({ 
	post: postReducer, 
	ad: adReducer, 
	friends: friendsReducer 
});

export default reducer;