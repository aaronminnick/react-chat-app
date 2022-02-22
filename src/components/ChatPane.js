import React from 'react';
import {connect} from 'react-redux';
import MessageList from './MessageList';
import NewMessageForm from './NewMessageForm';

function ChatPane(props) {

  console.log("current channel id: " + props.currentChannelId);
 
  return (
    <React.Fragment>
      <h2>{null}</h2>
      <button>Rename</button>
      <MessageList channelId={props.currentChannelId} />
      <NewMessageForm channelId={props.currentChannelId}/>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    currentChannelId: state.channels.currentChannelId,
  }
};

ChatPane = connect(mapStateToProps)(ChatPane);
export default ChatPane;