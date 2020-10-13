import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { postReducer, adReducer } from './reducers';



const reducer = combineReducers({ post: postReducer, ad: adReducer });
// console.log(postReducer);
const store = createStore(reducer, applyMiddleware(thunk));


export default store;