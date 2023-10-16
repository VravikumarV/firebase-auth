import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

export default function ProfileCardWithVerImg() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
        <Grid container wrap="nowrap" spacing={2}>        
            <CardMedia
              className={classes.cover}
              image='/images/SAN1001/SAN1001_2.jpeg'
              title="I prefer standing on my own toes!"
            />
            <Grid item xs>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                <Typography paragraph>
                  It's a pleasure introducing about myself. I have completed my Masters in Computers and working as an IT consultant with WFH flexibility. I am passionate about my work and aspirations towards my career goals. Still i am holding strong balance with my personal life.
                  I find my pleasure in simple things with an high thinking mindset, i value relations, family and friends. Live and let live is my principle. If you find me compatible and wish to take ahead feel free to reach out to me.
                  </Typography>
                  <Typography paragraph>
                  It's a pleasure introducing about myself. I have completed my Masters in Computers and working as an IT consultant with WFH flexibility. I am passionate about my work and aspirations towards my career goals. Still i am holding strong balance with my personal life.
                  I find my pleasure in simple things with an high thinking mindset, i value relations, family and friends. Live and let live is my principle. If you find me compatible and wish to take ahead feel free to reach out to me.
                  </Typography>
                </CardContent>
              </div>    
          </Grid>  
      </Grid>
    </Card>
  );
}
