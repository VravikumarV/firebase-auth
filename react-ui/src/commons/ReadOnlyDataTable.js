import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import MoreHoriz from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
});


export default function ReadOnlyDataTable(props) {
  const classes = useStyles();

  const [users, setUsers] = React.useState({users: props.users});

  console.log(props.users);
  return (
      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Gothram</TableCell>
            <TableCell align="right">Sakha</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Education</TableCell>
            <TableCell align="right">JobOccupation</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
    {props.users.map((user) => (
        <TableRow key={user.userId}>
          <TableCell style={{ width: 160 }} align="right">
            {user.name}
          </TableCell><TableCell component="th" scope="row">
            {user.gothram}
          </TableCell>
          <TableCell style={{ width: 160 }} align="right">
            {user.sakha}
          </TableCell>
          <TableCell style={{ width: 160 }} align="right">
            {user.dob}
          </TableCell>
          <TableCell style={{ width: 160 }} align="right">
            {user.education}
          </TableCell>
          <TableCell style={{ width: 160 }} align="right">
            {user.jobOccupation}
          </TableCell>
          <TableCell style={{ width: 160 }} align="right">
              <MoreHoriz/>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
      </Table>
    </TableContainer>
      );
}