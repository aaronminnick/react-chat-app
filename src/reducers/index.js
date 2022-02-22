import {combineReducers} from 'redux';
import channelsReducer from './channelsReducer';
import {firestoreReducer} from 'redux-firestore';

const reducer = combineReducers({
  channels: channelsReducer,
  firestore: firestoreReducer
});

export default reducer;