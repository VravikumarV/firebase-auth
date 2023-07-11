import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
  },
});

export function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Trade Mark" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="About Us" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Contact Us" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="T&C" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
