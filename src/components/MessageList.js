import React from 'react';
import MessageItem from './MessageItem';

function MessageList(props) {
  return (
    <React.Fragment>
      {props.messages.values().map(m => 
        <MessageItem message={m}
        key={m.id}/>  
      )}
    </React.Fragment>
  );
}

export default MessageList;