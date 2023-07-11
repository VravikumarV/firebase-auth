import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { user } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {user.name}
        </TableCell>
        <TableCell align="right">{user.gothram}</TableCell>
        <TableCell align="right">{user.sakha}</TableCell>
        <TableCell align="right">{user.education}</TableCell>
        <TableCell align="right">{user.jobOccupation}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                User Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Family Background</TableCell>
                    <TableCell>Ed Qualification</TableCell>
                    <TableCell align="right">Professional</TableCell>
                    <TableCell align="right">Physical Characteristics</TableCell>
                    <TableCell align="right">Preferences</TableCell>
                    <TableCell align="right">Contact Details</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={user._id}>
                      <TableCell component="th" scope="row">{user.fatherName} {user.motherName} {user.siblings}</TableCell>
                      <TableCell>{user.education}</TableCell>
                      <TableCell>{user.jobOccupation}</TableCell>
                      <TableCell>{user.height}</TableCell>
                      <TableCell>{user.requirements}</TableCell>
                      <TableCell>{user.contactNumber} {user.altContactNumber} {user.siblings}</TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
/*
Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
*/

export default function CollapsibleTable(props) {

  const [users, setUsers] = React.useState({users: props.users});
  console.log(props.users);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Gothram</TableCell>
            <TableCell align="right">Sakha</TableCell>
            <TableCell align="right">Education</TableCell>
            <TableCell align="right">JobOccupation</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {props.users.map((user) => (
            <Row key={user._id} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}