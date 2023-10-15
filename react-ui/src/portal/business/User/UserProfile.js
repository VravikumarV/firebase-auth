import React, { Component } from 'react';

import {TableContainer, Table, TableBody, TableHead, TableRow, TableCell} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import ReadOnlyDataTable from '../../../commons/ReadOnlyDataTable';
import CollapsibleTable from '../../../commons/CollapsibleTable';

class UserProfile extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          loginUsers: []
        }
        this.getData();
    }

     getData() {
      const response =  fetch('http://localhost:8181/api/signup/userprofiles/').then(response => {
          return response.json();
        });
        console.log('Response from server is :  n '+response);
        response.then(users => { 
          this.setState({
            error: null,
            isLoaded: true,
            loginUsers: users,
        });  
        },(error) => {
          this.setState({error: 'Could not connect to server'});
          console.log('UserProfile.error: '+error);
        });
    }
    

    render() {
      this.getData();
      const { error, isLoaded, loginUsers } = this.state;
      //console.log('UserProfile.render: '+error);
      if (error) {
        //console.log('Error during request processing ! ');
        return <div>Error: {error}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        console.log('UserProfile.render:  '+this.state.loginUsers)
        return <CollapsibleTable users={this.state.loginUsers}/>
      }
    }
}

export default UserProfile;