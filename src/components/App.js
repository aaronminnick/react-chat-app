import React from 'react';
import ChannelList from './ChannelList';
import ButtonPane from './ButtonPane';
import ChatPane from './ChatPane';
import UserList from './UserList';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSelector, connect} from 'react-redux';

const DEFAULT_CHANNEL_ID = "WNzO78XVlt5MgTVtE4KD";

function App(props) {

  const {dispatch} = props;
  dispatch({type: "SET_CURRENT_CHANNEL", currentChannelId: DEFAULT_CHANNEL_ID});

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