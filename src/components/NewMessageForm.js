import React from 'react';
import {useFirestore} from 'react-redux-firebase';
import {query, where} from 'firebase/firestore';

function NewMessageForm(props) {

  const firestore = useFirestore();
  const handleNewMessageSubmit = (event) => {
    event.preventDefault();

    // const channels = firestore.collection("channels");
    // const channel = query(channels, where("__name__", "==", props.channelId));

    // //refactor to reduce redundant queries?
    // return firestore.collection("channels").doc(channel).collection("messages").add({
    //   content: event.target.message.value,
    //   timestamp: firestore.FieldValue.serverTimestamp()
    //   //userId
    // });
  }

  return (
    <form onSubmit={handleNewMessageSubmit}>
      <input type="text" name="message" required />
      <button type="submit">Send</button>
    </form>
  );
};

export default NewMessageForm;