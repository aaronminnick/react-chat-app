import React from 'react';
import {connect} from 'react-redux';

function ChannelButton(props) {
  
  const handleChannelClick = () =>{
    const {dispatch} = props;
    const action = {type: 'SET_CURRENT_CHANNEL', currentChannelId: props.channel.id};
    dispatch(action);
  };
  
  return (
    <button onClick={handleChannelClick}>{props.channel.name}</button>
  );
};

ChannelButton = connect()(ChannelButton);

export default ChannelButton;