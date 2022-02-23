import React from 'react';
import firebase from 'firebase/app';

function ButtonPane() {

  const handleSignOut = (event) => {
    firebase.auth().signOut()
      .then(() => console.log("successful sign out... AND STAY OUT"))
      .catch((error) => console.log(error.message));  
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

export default ButtonPane;