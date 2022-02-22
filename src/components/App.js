import React from 'react';
import ChannelList from './ChannelList';
import ButtonPane from './ButtonPane';
import ChatPane from './ChatPane';
import UserList from './UserList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useFirestore, useFirestoreConnect} from 'react-redux-firebase';
import {useSelector, connect} from 'react-redux';

const DEFAULT_CHANNEL_ID = "WNzO78XVlt5MgTVtE4KD";

function App(props) {
  // useFirestoreConnect({collection: "channels"});


  const {dispatch} = props;
  dispatch({type: "SET_CURRENT_CHANNEL", currentChannelId: DEFAULT_CHANNEL_ID});

  // const firestore = useFirestore();
  // // make a default channel if there are no channels
  // firestore.collection("channels").get().then(channels => {
  //   let action = {type: "SET_CURRENT_CHANNEL"};
  //   if (channels._delegate._snapshot.docChanges.length == 0) {
  //     firestore.collection("channels").add({
  //       name: "General Discussion"
  //     })
  //     .then(docRef => {
  //       action = {...action, currentChannelId: docRef.id}
  //       dispatch(action);
  //     });
  //   } else {
  //     console.log(channels._delegate._snapshot.docChanges[0].doc.key.path.segments[6]);
  //     action = {...action, currentChannelId: "WNzO78XVlt5MgTVtE4KD"}
  //     dispatch(action);
  //   }
  // });

  return (
    <React.Fragment>
      <Container>
        <Row>
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
        </Row>
      </Container>
    </React.Fragment>
  );
}

App = connect()(App);

export default App;