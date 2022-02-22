import React from 'react';
import ChannelList from './ChannelList';
import ButtonPane from './ButtonPane';
import ChatPane from './ChatPane';
import UserList from './UserList';
import Col from 'react-bootstrap/Col';
import {useFirestoreConnect, isEmpty, useFirestore, useFirebase} from 'react-redux-firebase';
import {useSelector, connect} from 'react-redux';

function App(props) {
  useFirestoreConnect({collection: "channels"});
  const firestore = useFirestore();
  const {dispatch} = props;
  // make a default channel if there are no channels
  firestore.collection("channels").get().then(channels => {
    if (channels._delegate._snapshot.docChanges.length == 0) {
      let action = {type: "SET_CURRENT_CHANNEL"};
      firestore.collection("channels").add({
        name: "General Discussion"
      })
      .then(docRef => {
        action = {...action, currentChannelId: docRef.id}
        dispatch(action);
      });
    }
  });

  return (
    <React.Fragment>
      <Col className="col-3">
        <ChannelList />
        <ButtonPane />
      </Col>
      <Col className="col-6">
        <ChatPane />
      </Col>
      <Col className="col-3">
        <UserList />
      </Col>
    </React.Fragment>
  );
}

App = connect()(App);

export default App;