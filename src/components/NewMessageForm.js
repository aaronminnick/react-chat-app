import React from 'react';
import {useFirestore} from 'react-redux-firebase';
import {connect} from 'react-redux';

function NewMessageForm(props) {

  const firestore = useFirestore();
  const handleNewMessageSubmit = (event) => {
    event.preventDefault();
    const message = {
      content: event.target.message.value,
      author: props.user,
      timestamp: firestore.FieldValue.serverTimestamp()
    };
    document.getElementById("form").reset();
    return firestore.collection("channels").doc(props.channelId).collection("messages").add(message);
  }
  const formStyles = {
    form: {
      width: "fit",
      padding: ".5em",
      backgroundColor: "rgba(0, 0, 0, .5)"
    },
    input: {
      width: "90%",
      height: "2em",
      border: "none",
      borderRadius: ".5em",
      padding: "0 .5em",
      backgroundColor: "rgba(255, 255, 255, .95)"
    },
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
    }
  }

  return (
    <form style={formStyles.form} id="form" onSubmit={handleNewMessageSubmit}>
      <input style={formStyles.input} type="text" name="message" required />
      <button style={formStyles.button} type="submit"><strong>▲</strong></button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    user: state.users.currentUser
  };
};

NewMessageForm = connect(mapStateToProps)(NewMessageForm);
export default NewMessageForm;