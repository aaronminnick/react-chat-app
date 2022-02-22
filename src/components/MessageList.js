import React from 'react';
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';
import MessageItem from './MessageItem';

function MessageList(props) {
  
  useFirestoreConnect({collection: "channels", doc: props.channelId, subcollections: [{collection: "messages"}], storeAs: "currentChannelMessages", orderBy: ["timestamp", "asc"]});
  let messageList = useSelector(state => state.firestore.ordered.currentChannelMessages);
  (isLoaded(messageList)) ?
    messageList = messageList.map(m =>
      <MessageItem message={m}
      key={m.id} />) :
    messageList = <p>Loading...</p>;

  return (
    <React.Fragment>
      {messageList}
    </React.Fragment>
  );
}

export default MessageList;