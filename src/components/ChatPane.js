import React from 'react';
import MessageList from './MessageList';
import NewMessageForm from './NewMessageForm';

function ChatPane() {
  return (
    <React.Fragment>
      <h2>Chat name</h2>
      <button>Rename</button>
      <MessageList />
      <NewMessageForm />
    </React.Fragment>
  );
};

export default NewMessageForm;