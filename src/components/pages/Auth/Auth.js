import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <h1>Inside Auth Component</h1>
        <button className="btn btn-success" onClick={this.loginClickEvent}>Google Login</button>
      </div>
    );
  }
}

export default Auth;
