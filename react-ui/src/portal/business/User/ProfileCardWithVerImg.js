import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

import * as profileObj from './mocks/SAN1001.json';

// Ref :  https://v4.mui.com/components/cards/

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


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const handleClick = () => {
  console.info('You clicked the Chip.');
};

export default function ProfileCardWithVerImg() {
  const classes = useStyles();
  const chipClasses = useChipStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
        <Grid container wrap="nowrap" spacing={2}>  
            <CardMedia
              className={classes.cover}
              image='/images/SAN1001/SAN1002.jpeg'
              title="I prefer standing on my own toes!"
            />
            <Grid item xs>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <div className={chipClasses.root}>
                      <Chip 
                        variant="outlined" 
                        size="small" 
                        label="Gallery" 
                        color="primary"
                        onClick={handleClick}
                        />                        
                      <Chip 
                        variant="outlined" 
                        size="small" 
                        label="Basic Profile" 
                        color="primary"
                        onClick={handleClick}
                        />
                      <Chip
                        variant="outlined"
                        size="small"
                        label="Religion" color="primary"
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
                        label="Education / Career"  color="primary"
                        onClick={handleClick}
                      />
                      <Chip
                        variant="outlined"
                        size="small"
                        label="Family"  color="primary"
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
                        label="Preferences" color="primary"
                        clickable
                      />
                    </div>
                  <Divider/>
                    <Typography variant="body2" align="left" color="text.secondary">
                      About Me:
                    </Typography>
                      <Typography paragraph>
                        {profileObj.basicinfo.aboutMe}
                      </Typography>
                  <Divider/>
                      <Typography variant="body2" align="left" color="text.secondary">
                        What i am looking for:
                      </Typography>
                      <Typography paragraph>
                        {profileObj.basicinfo.aboutMyBetterHalf}
                      </Typography>
                  <Divider />
                </CardContent>
              </div>    
          </Grid>  
      </Grid>
    </Card>
  );
}
