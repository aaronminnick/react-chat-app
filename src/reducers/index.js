import {combineReducers} from 'redux';
// import messagesReducer from './messagesReducer';
import {firestoreReducer} from 'react-redux-firebase';

const reducer = combineReducers({
  // messages: messagesReducer,
  firestore: firestoreReducer
});

export default reducer;