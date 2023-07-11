import React from "react";

import { Footer } from "./Footer";

import SideMenu from "./SideMenu";
import MyAppBar from "./HeaderAppBar";
import UserProfile from "../business/User/UserProfile";

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export function Home() {
  const classes = useStyles();

    return (
      <React.Fragment>
      <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper className={classes.paper}><MyAppBar/></Paper>
        </Grid>
        <Grid item xs={3} sm={12}>
          <Paper className={classes.paper}><SideMenu/></Paper>
        </Grid>
        <Grid item xs={9} sm={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}><Footer/></Paper>
        </Grid>
        </Grid>
    </div></React.Fragment>
    );
  }