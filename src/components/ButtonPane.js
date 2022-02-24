import React from 'react';
import firebase from 'firebase/app';
import {connect} from 'react-redux';
import {useFirestore} from 'react-redux-firebase';

function ButtonPane(props) {
  const firestore = useFirestore();

  const handleSignOut = (event) => {
    firebase.auth().signOut()
      .then(() => console.log("successful sign out... AND STAY OUT"))
      .catch((error) => console.log(error.message)); 
    const {dispatch} = props;
    dispatch({type: "SET_CURRENT_USER", currentUser: ""});
  };
  const handleAddChannel = (event) => {
    event.preventDefault();
    const val = event.target.newChannel.value;
    document.getElementById('newChannelForm').reset();

    return firestore.collection('channels').add(
      {
        name: val
      }
    );
  }

  const buttonStyles = {
    button: {
      width: "2em",
      height: "2em",
      backgroundColor: "rgba(0, 0, 0, .5)",
      border: "none",
      borderRadius: "100%",
      color: "white",
      marginLeft: "calc(5% - 1em)",
      textAlign: "center",
      paddingBottom: ".2em"
    },
    largerButton: {
      width: "3em",
      height: "3em",
      backgroundColor: "rgba(0, 0, 0, .5)",
      border: "none",
      borderRadius: "100%",
      color: "white",
      marginLeft: "calc(5% - 1em)",
      textAlign: "center",
      paddingBottom: ".2em"
    },
    inputStyles: {
      borderRadius: "1em",
      border: "none"
    },
    formStyles: {
      display:'inline',
      marginLeft: "1em"
    }
  }
  
  return (
    <React.Fragment>
      <button style={buttonStyles.largerButton} onClick={handleSignOut}>❮▮</button>
      <form style={buttonStyles.formStyles} id="newChannelForm" onSubmit = {handleAddChannel}>
        <input style={buttonStyles.inputStyles} name="newChannel" type="text"/>
        <button style={buttonStyles.button} type="submit">+</button>
      </form>
    </React.Fragment>
  );
};

ButtonPane = connect()(ButtonPane);
export default ButtonPane;