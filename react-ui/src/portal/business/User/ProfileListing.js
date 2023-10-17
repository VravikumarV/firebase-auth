
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import mia1002 from "./images/SAN1001/SAN1002.jpeg";
import mia1003 from "./images/SAN1001/SAN1003.jpeg";
import mia1001 from "./images/SAN1001/SAN1001.jpeg";
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import SearchIcon from '@material-ui/icons/Search';
import Icon from '@material-ui/core/Icon';

import * as profileObj from './mocks/SAN1001.json';

const handleClick = () => {
  console.info('You clicked the Chip.');
};

const useChipStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));
const iconStyles = makeStyles((theme) => ({
  root: {
    '& > span': {
      margin: theme.spacing(2),
    },
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function ProfileListing() {
  const classes = useStyles();
  const chipClasses = useChipStyles();
  const iconClasses = iconStyles();
  return (          
    <div className={classes.root}>
          <div className={chipClasses.root}>
                      <SearchIcon color="primary" label="By"/>
                      <Chip 
                        variant="outlined" 
                        size="small" 
                        label="Religion" 
                        color="primary"
                        onClick={handleClick}
                        />                        
                      <Chip 
                        variant="outlined"
                        size="small" 
                        label="Community" 
                        color="primary"
                        onClick={handleClick}
                        />
                      <Chip
                        variant="outlined"
                        size="small"
                        label="Location" color="primary"
                        onClick={handleClick}
                      />
                      <Chip
                        variant="outlined"
                        size="small"
                        label="Astro" color="primary"
                        onClick={handleClick}
                      />
                      <Chip
                        variant="outlined"
                        size="small"
                        label="Education"  color="primary"
                        onClick={handleClick}
                      />
                      <Chip
                        variant="outlined"
                        size="small"
                        label="Career"  color="primary"
                        onClick={handleClick}
                      />
                      <Chip
                        variant="outlined"
                        size="small"
                        label="Hobbies" color="primary"
                        component="a"
                        href="#chip"
                        clickable
                        onClick={handleClick}
                      />
                      <Chip
                        variant="outlined"
                        size="small"
                        label="Life Style" color="primary"
                        clickable
                      />
            </div>
          <Divider/>      
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={mia1001} />
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography>{profileObj.basicinfo.name}, {profileObj.basicinfo.education}</Typography>
            <Typography>{profileObj.basicinfo.jobOccupation}, {profileObj.basicinfo.company}</Typography>
            <Typography>{profileObj.basicinfo.areaBelongsTo}</Typography>            
          </Grid>
          <Grid item>
            <div className={iconClasses.root}>
                <Avatar >
                  <SearchIcon/>
                </Avatar>
                <Avatar>
                  <Icon>star</Icon>
                </Avatar>
                <Avatar>
                  <SearchIcon />
                </Avatar>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={mia1003}/>
          </Grid>
          <Grid item xs>
            <Typography>{profileObj.basicinfo.name}, {profileObj.basicinfo.education}</Typography>
            <Typography>{profileObj.basicinfo.jobOccupation}, {profileObj.basicinfo.company}</Typography>
            <Typography>{profileObj.basicinfo.areaBelongsTo}</Typography>            
          </Grid>
          <Grid item>
                      <Chip
                        variant="outlined"
                        size="small"
                        label="Favourite"  color="primary"
                        onClick={handleClick}
                      /> 
                    <Chip
                        variant="outlined"
                        size="small"
                        label="Contact"  color="primary"
                        onClick={handleClick}
                      />
                      <Chip
                        variant="outlined"
                        size="small"
                        label="Ignore"  color="primary"
                        onClick={handleClick}
                      />                    
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={mia1002} />
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography>{profileObj.basicinfo.name}, {profileObj.basicinfo.education}</Typography>
            <Typography>{profileObj.basicinfo.jobOccupation}, {profileObj.basicinfo.company}</Typography>
            <Typography>{profileObj.basicinfo.areaBelongsTo}</Typography>            
          </Grid>
          <Grid item>
            <div className={iconClasses.root}>
                <Avatar >
                  <SearchIcon/>
                </Avatar>
                <Avatar>
                  <Icon>star</Icon>
                </Avatar>
                <Avatar>
                  <SearchIcon />
                </Avatar>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
