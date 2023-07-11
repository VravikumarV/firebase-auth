import React, { Component } from 'react';
import './App.css';
import firebase, { auth } from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { Home } from './portal/common/Home';

const config = {
  apiKey: "AIzaSyCuGCsPq9FQJv8jFVqxAwNCaVv58py4GIU",
  authDomain: "omkruthidesigners-e79fa.firebaseapp.com"
}


const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

firebase.initializeApp(config);

class App extends Component {

  state={isSignedIn:false}

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
    console.log("In componentDidMount:  ");
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
    console.log("In componentDidMount:  ");
  }

  
  logout() {

    var user = firebase.auth().currentUser;
console.log(user);
if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}
    auth.signOut();
    console.log("In logout:  ");
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <React.Fragment>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
        </React.Fragment>
      );
    } else { 
      return (
        <React.StrictMode>
          <Home/>
        </React.StrictMode>
      );
    }
  }
};

export default App;
