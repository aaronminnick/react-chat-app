import React from "react";
import firebase from 'firebase/app';
import {connect} from 'react-redux';
import {withFirestore} from 'react-redux-firebase';
import Container from 'react-bootstrap/Container';

function Signin(props) {

  const handleSignUp = (event) => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(event.target.email.value, event.target.password.value)
      .then(() => console.log(props.firebase.auth()))
      .catch((error) => console.log(error.message)); // replace with feedback to user
  };

  const handleSignIn = (event) => {
    const {dispatch} = props;
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(event.target.email.value, event.target.password.value)
      .then(()=> {
        dispatch({type: "SET_CURRENT_USER", currentUser: props.firebase.auth().currentUser.email})
      })
      .catch((error)=> console.log("You suck because of this: " + error.message));
  };
  const largerButton= {
    width: "4.5em",
    height: "4.5em",
    backgroundColor: "rgba(0, 0, 0, .5)",
    border: "none",
    borderRadius: "100%",
    color: "white",
    marginLeft: "calc(5% - 1em)",
    textAlign: "center",
    paddingBottom: ".2em"
  }

  return(
    <React.Fragment>
      <Container style={{display: "grid", alignContent: "center", justifyContent: "start", padding: "5%"}}>
        <div>
          <h1 style={{color: "white"}}>Welcome to React-Chat-App. Please sign in to chat.</h1>
          <h2 style={{color: "white"}}>Sign up</h2>
          <form onSubmit={handleSignUp}>
            <input type="text" name="email" placeholder="email" required />
            <input type="text" name="password" placeholder="password" required />
            <button style={largerButton} type="submit">Sign up</button>
          </form>
          <h2 style={{color: "white"}}>Sign In</h2>
          <form onSubmit={handleSignIn}>
            <input type="text" name="email" placeholder="email" required />
            <input type="text" name="password" placeholder="password" required />
            <button style={largerButton} type="submit">Sign in</button>
          </form>
        </div>
      </Container>
    </React.Fragment>
  );
};

Signin = connect()(Signin);
export default withFirestore(Signin); //take out wrapper when done troubleshoooting