import React from 'react';
import {connect} from 'react-redux';

function MessageItem(props) {
  
  const userIsAuthor = props.message.author == props.user;
  const MessageItemStyle = {
    div: {
      margin: ".5em 1em",
      padding: "1em 1.5em",
      borderBottom: "2px solid gray",
      borderLeft: userIsAuthor ? "2px solid lightgray" : "none",
      borderRight: userIsAuthor ? "none" : "2px solid lightgray",
      borderRadius: userIsAuthor ? "2.5em 2.5em 2.5em 0" : "2.5em 2.5em 0 2.5em",
      backgroundColor: userIsAuthor ? "rgba(220, 225, 250, .8)" : "rgba(230, 250, 215, .8)",
      alignSelf: userIsAuthor ? "start" : "end",
      width: "fit-content",
      minWidth: "60%",
      maxWidth: "90%",
    },
    byline: {
      margin: ".2em"
    },
    content: {
      textAlign: "center",
      fontWeight: "600",
      margin: ".2em"
    }
  };  

  return (
    <React.Fragment>
      <div style={MessageItemStyle.div}>
        <p style={MessageItemStyle.byline}><em>{props.message.author}:</em></p>
        <p style={MessageItemStyle.content}>{props.message.content}</p>
      {/* <img src={props.message.avatarImg} alt={`so and so's avatar`} /> */}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    user: state.users.currentUser
  };
};

MessageItem = connect(mapStateToProps)(MessageItem);
export default MessageItem;