

import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles, styled } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import * as profileObj from './mocks/SAN1001.json';
import Divider from '@material-ui/core/Divider';

// Ref : https://v4.mui.com/components/cards/

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const cardStyles = makeStyles((theme) => ({
  Card: {
    width: '100%',
    height: '70%',
    margin: 'auto'
  },
  Media: {
    width: '100%',
    height: '25%',
    objectFit: 'contain'
  }
}));

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function ImageProfileCards() {
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();
  const cardClasses = cardStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={cardClasses.Card} >
      <CardHeader
        avatar={
          <Avatar alt={profileObj.profileId} src='/images/SAN1001/SAN1001_4.jpeg' className={classes.large} />
        }
        action={
          <IconButton aria-label="settings">
              <MoreVertIcon />
          </IconButton>
        }
        title={profileObj.profileId}
        subheader="September 14, 2016"
      />
      <CardMedia className={cardClasses.Media} 
        component="img"
        image='/images/SAN1001/SAN1001_5.jpeg'
        alt={profileObj.profileId}
      />
      <CardContent>
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
      <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>   
      </CardActions>
    </Card>
  );
}
