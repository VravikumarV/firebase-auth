

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import ShareIcon from '@mui/icons-material/Share';
//import MoreVertIcon from '@mui/icons-material/MoreVert';

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

export default function ImageProfileCards() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            MoreVertIcon
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="../../../images/SAN1001/SAN1001_2.jpg"
        alt="RK"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        <Typography paragraph>
          It's a pleasure introducing about myself. I have completed my Masters in Computers and working as an IT consultant with WFH flexibility. I am passionate about my work and aspirations towards my career goals. Still i am holding strong balance with my personal life.
          I find my pleasure in simple things with an high thinking mindset, i value relations, family and friends. Live and let live is my principle. If you find me compatible and wish to take ahead feel free to reach out to me.
          </Typography>
          <Typography paragraph>
          It's a pleasure introducing about myself. I have completed my Masters in Computers and working as an IT consultant with WFH flexibility. I am passionate about my work and aspirations towards my career goals. Still i am holding strong balance with my personal life.
          I find my pleasure in simple things with an high thinking mindset, i value relations, family and friends. Live and let live is my principle. If you find me compatible and wish to take ahead feel free to reach out to me.
          </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          FavoriteIcon
        </IconButton>
        <IconButton aria-label="share">
          ShareIcon
        </IconButton>      
      </CardActions>
    </Card>
  );
}
