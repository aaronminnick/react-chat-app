import React from 'react';
import {connect} from 'react-redux';

function ChannelButton(props) {
  
  const handleChannelClick = () =>{
    const {dispatch} = props;
    const action = {type: 'SET_CURRENT_CHANNEL', currentChannelId: props.channel.id};
    dispatch(action);
  };
  
  const ChannelButtonStyles = {
    border: "none",
    borderRadius: "1em",
    backgroundColor: "rgba(0, 0, 0, .5)",
    color: "white",
    fontSize: "1.3em",
    margin: ".25em"
  }

  return (
    <button style={ChannelButtonStyles} onClick={handleChannelClick}>{props.channel.name}</button>
  );
};

ChannelButton = connect()(ChannelButton);

export default ChannelButton;