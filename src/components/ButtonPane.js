import React from 'react';
import firebase from 'firebase/app';
import {connect} from 'react-redux';

function ButtonPane(props) {

  const handleSignOut = (event) => {
    firebase.auth().signOut()
      .then(() => console.log("successful sign out... AND STAY OUT"))
      .catch((error) => console.log(error.message)); 
    const {dispatch} = props;
    dispatch({type: "SET_CURRENT_USER", currentUser: ""});
  };
  
  return (
    <React.Fragment>
      <button onClick={handleSignOut}>Sign Out</button>
      <button></button>
      <button></button>
      <button></button>
    </React.Fragment>
  );
};

ButtonPane = connect()(ButtonPane);
export default ButtonPane;