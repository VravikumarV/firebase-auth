import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import FileUpload from '../../commons/FileUpload';
import UserProfile from "../business/User/UserProfile";
import Demographics from "../business/User/Demographics";
import ProfileCardWithVerImg from '../business/User/ProfileCardWithVerImg';
import ProfileCardWithHorImg from '../business/User/ProfileCardWithHorImg';
import RowwiseImageList from '../business/User/RowwiseImageList';
import PreferencesTabFilters from '../business/User/PreferencesTabFilters';
import ProfileAvatarGrouping from '../business/User/ProfileAvatarGrouping';
import ProfileListing from '../business/User/ProfileListing';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const routes = [
  {
    path: "/userProfile",
    exact: true,
    sidebar: () => <div><UserProfile/></div>,
    main: () => <h2>UserProfile</h2>
  },
  {
    path: "/demographics",
    sidebar: () => <div><Demographics/></div>,
    main: () => <h2>Demographics</h2>
  },
  {
    path: "/preferences",
    sidebar: () => <div>Preferences!</div>,
    main: () => <h2>Preferences</h2>
  },
  {
      path: "/uploadfiles",
        sidebar: () => <div><FileUpload/></div>,
      main: () => <h2>Upload Files</h2>
    },
    {
      path: "/ProfileAvatarGrouping",
      exact: true,
      sidebar: () => <div><ProfileAvatarGrouping/></div>,
      main: () => <h2>ProfileAvatarGrouping</h2>
    },
    {
      path: "/PreferencesTabFilters",
      sidebar: () => <div><PreferencesTabFilters/></div>,
      main: () => <h2>PreferencesTabFilters</h2>
    },
    {
      path: "/ProfileImagesSingleRowListing",
      sidebar: () => <div>ProfileImagesSingleRowListing</div>,
      main: () => <h2>ProfileImagesSingleRowListing</h2>
    },
    {
        path: "/RowwiseImageList",
          sidebar: () => <div><RowwiseImageList/></div>,
        main: () => <h2>RowwiseImageList</h2>
      },
      {
        path: "/ProfileCardWithVerImg",
        sidebar: () => <div><ProfileCardWithVerImg/></div>,
        main: () => <h2>ProfileCard - H</h2>
      },
      {
        path: "/ProfileCardWithHorImg",
        sidebar: () => <div><ProfileCardWithHorImg/></div>,
        main: () => <h2>ProfileCard - V</h2>
      },
      {
        path: "/ProfileListing",
        sidebar: () => <div><ProfileListing/></div>,
        main: () => <h2>ProfileListing</h2>
      }    
];


export default function SideMenu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
      setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawer}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>


        </div>
        <Divider />
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
              <Link to="/demographics">Demographics</Link>
            </li>
            <li>
              <Link to="/userProfile">User Profile</Link>
            </li>
            <li>
              <Link to="/preferences">Preferences</Link>
            </li>
            <li>
              <Link to="/uploadfiles">Upload Files</Link>
            </li>
          <li>
              <Link to="/profileListing">Profile Listing</Link>
            </li>
            <li>
              <Link to="/ProfileCardWithHorImg">H Profile Card</Link>
            </li>
            <li>
              <Link to="/ProfileCardWithVerImg">V Profile Card</Link>
            </li>
            <li>
              <Link to="/RowwiseImageList">Rowwise ImageList</Link>
            </li>
            <li>
              <Link to="/ProfileImagesSingleRowListing">Images SingleRow Listing</Link>
            </li>
            <li>
              <Link to="/PreferencesTabFilters">PreferencesTabFilters</Link>
            </li>
            <li>
              <Link to="/ProfileAvatarGrouping">ProfileAvatarGrouping</Link>
            </li>
          </ul>
      </Drawer>
        <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
      </Router>
    </div>
  );
}
