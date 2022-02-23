import React from "react";
import firebase from 'firebase/app';
import {Link} from 'react-router-dom';

function Signin() {

  const handleSignUp = (event) => {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(event.target.email.value, event.target.password.value)
      .then(() => console.log("successful sign up"))
      .catch((error) => console.log(error.message)); // replace with feedback to user
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(event.target.email.value, event.target.password.value)
      .then(()=>console.log("successful sign in"))
      .catch((error)=> console.log("You suck because of this: " + error.message));
  };

  return(
    <React.Fragment>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <input type="text" name="email" placeholder="email" required />
        <input type="text" name="password" placeholder="password" required />
        <button type="submit">Sign up</button>
      </form>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input type="text" name="email" placeholder="email" required />
        <input type="text" name="password" placeholder="password" required />
        <button type="submit">Sign in</button>
      </form>
      <Link to="/">Go back</Link>
    </React.Fragment>
  );
};

export default Signin;