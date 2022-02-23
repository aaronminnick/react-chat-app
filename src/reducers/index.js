import {combineReducers} from 'redux';
import channelsReducer from './channelsReducer';
import usersReducer from './usersReducer';
import {firestoreReducer} from 'redux-firestore';

const reducer = combineReducers({
  channels: channelsReducer,
  firestore: firestoreReducer,
  users: usersReducer
});

export default reducer;