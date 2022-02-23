import React from 'react';
import {connect} from 'react-redux';
import {useFirestoreConnect, isLoaded} from 'react-redux-firebase';
import ChannelButton from './ChannelButton';

function ChannelList(props) {

  useFirestoreConnect({collection: "channels", orderBy: ["name", "desc"]});

  let channelList;
  (isLoaded(props.channels)) ?
    channelList = props.channels.map(c =>{
      console.log(c);
      return <ChannelButton channel={c}
      key={c.id} />;}) :
    channelList = <p>Loading...</p>;

  const ChannelListStyle = {
    overflowY: "scroll",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column-reverse"
  }

  return (
    <div style={ChannelListStyle}>
      {channelList}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentChannelId: state.channels.currentChannelId,
    channels: state.firestore.ordered.channels
  };
};

ChannelList = connect(mapStateToProps)(ChannelList);

export default ChannelList;