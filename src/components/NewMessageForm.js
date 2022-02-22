import React from 'react';
import {useFirestore} from 'react-redux-firebase';
import {query, where} from 'firebase/firestore';

function NewMessageForm(props) {

  const firestore = useFirestore();
  const handleNewMessageSubmit = (event) => {
    event.preventDefault();
    const message = {
      content: event.target.message.value, 
      timestamp: firestore.FieldValue.serverTimestamp()
    };
    document.getElementById("form").reset();
    return firestore.collection("channels").doc(props.channelId).collection("messages").add(message);
  }

  return (
    <form id="form" onSubmit={handleNewMessageSubmit}>
      <input type="text" name="message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default NewMessageForm;