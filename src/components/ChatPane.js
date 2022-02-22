import React, {useState} from 'react';
import {useFirestore} from 'react-redux-firebase';
import MessageList from './MessageList';
import NewMessageForm from './NewMessageForm';

function ChatPane() {
  const currentChannelId = useState(currentChannelId)[0];
  const firestore = useFirestore();
  const channel = firestore.collection("channels").where("id", "==", currentChannelId);
  // const messages = channel.collection('messages'); //Try this out
  const messages = firestore.collection("channels").where("id", "==", currentChannelId).collection("messages"); // might need to do this as a query to sort by timestamp
  return (
    <React.Fragment>
      <h2>{channel.name}</h2>
      <button>Rename</button>
      <MessageList messages={messages} />
      <NewMessageForm channelId={currentChannelId}/>
    </React.Fragment>
  );
};

export default NewMessageForm;