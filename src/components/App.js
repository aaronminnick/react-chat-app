import React from 'react';
import ChannelList from './ChannelList';
import ButtonPane from './ButtonPane';
import ChatPane from './ChatPane';
import UserList from './UserList';
import Signin from "./Signin";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {connect} from 'react-redux';
import {withFirestore, isLoaded} from 'react-redux-firebase';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

const DEFAULT_CHANNEL_ID = "WNzO78XVlt5MgTVtE4KD";

function App(props) {

  const {dispatch} = props;
  dispatch({type: "SET_CURRENT_CHANNEL", currentChannelId: DEFAULT_CHANNEL_ID});

  const auth = props.firebase.auth();
  
  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    );
  }
  if (isLoaded(auth) && auth.currentUser == null) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={
            <React.Fragment>
              <p>try signing in you degenerate</p>
              <Link to="/signin">Sign In</Link>
            </React.Fragment>
          } />
          <Route path="/signin" element= {
            <Signin />
          } />
        </Routes>
      </Router>
    );
  }
  if (isLoaded(auth) && auth.currentUser != null) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={
            <Link to="/chat">Go to chat</Link>
          } />
          <Route path ="/chat" element={
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
          } />
        </Routes>
      </Router>
    );
  }
}

App = connect()(App);

export default withFirestore(App);