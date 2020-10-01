import { createStore } from 'redux';
import { combineReducers } from 'redux'
import { postReducer, adReducer } from './reducers';


const reducer = combineReducers({ postReducer, adReducer });
const store = createStore(reducer);

export default store;