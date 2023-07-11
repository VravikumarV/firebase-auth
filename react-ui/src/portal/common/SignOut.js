import React from 'react';

import firebase, { auth } from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { Button } from '@material-ui/core';


function SignOut() {
    var user = firebase.auth().currentUser;
    return (
        <div>
            <div><h1> {user.displayName}</h1>
            <h1> {user.email}</h1>
            <h1> {user.providerData.profile}</h1>
            </div>  
            <Button onClick={() => firebase.auth().signOut()}>Sign Out</Button> 
        </div>
        );
}
export default SignOut;