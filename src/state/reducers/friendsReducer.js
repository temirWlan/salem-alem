import { FRIENDS_REQUESTED, FRIENDS_LOADED, FRIENDS_REJECTED } from '../types';

const initialState = {
   loading: true,
   friends: [],
   error: false
};

export default function friendsReducer(state = initialState, action) {
   switch (action.type) {
      case FRIENDS_REQUESTED:
         return {
            ...state, 
            loading: true,
            friends: [],
            error: false
         }
      case FRIENDS_LOADED:
         return {
            ...state, 
            loading: false,
            friends: action.payload,
            error: false
         }
      case FRIENDS_REJECTED:
         return {
            ...state, 
            loading: false,
            friends: [],
            error: true
         }
      default: 
         return state;
   }
}