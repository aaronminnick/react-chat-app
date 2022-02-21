import React, { Fragment } from 'react';
import ChannelList from './ChannelList';
import ButtonPane from './ButtonPane';
import ChatPane from './ChatPane';
import UserList from './UserList';
import {Col} from 'react-bootstrap/Col'

function App() {
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

export default App;