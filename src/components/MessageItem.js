import React from 'react';

function MessageItem(props) {
  return (
    <React.Fragment>
      <div>
        <p>{props.message.content}</p>
      <img src={props.message.avatarImg} alt={`so and so's avatar`} />
      </div>
    </React.Fragment>
  );
};

export default MessageItem;