import React from 'react';
import {useFirestore} from 'react-redux-firebase';

function NewMessageForm(props) {

  const firestore = useFirestore();
  const handleNewMessageSubmit = (event) => {
    event.preventDefault();

    return firestore.collection("channels").where(/*channel where id == props.channelId*/).collection("messages").add({
      content: event.target.message.value,
      timestamp: firestore.FieldValue.serverTimestamp()
      //userId
    });
  }

  return (
    <form onSubmit={handleNewMessageSubmit}>
      <input type="text" name="message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default NewMessageForm;