import { AppBar, CssBaseline, Drawer, List, ListItem, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../../App';
import BookingList from '../BookingList/BookingList';
import Feedback from '../Feedback/Feedback';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [property, setProperty] = useState("bookings");
  const history = useHistory()
  const classes = useStyles();

  const handleBookings = () => {
    setProperty("bookings")
  }

  const handleReviews = () => {
    setProperty("reviews")
  }

  const handleLogOut = () => {
    setProperty("logout")
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Photo Story
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
              <ListItem button onClick={handleBookings}>
                <ListItemText primary="Your Bookings" />
              </ListItem>
              <ListItem button onClick={handleReviews}>
                <ListItemText primary="Your Feedback" />
              </ListItem>
              <ListItem button onClick={handleLogOut}>
                <ListItemText primary="Log Out" />
              </ListItem>
            
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {
          property === 'reviews' ? <Feedback></Feedback> :
          property === 'bookings' ? <BookingList></BookingList> :
          history.push('/')

        }
        
      </main>
    </div>
  );
};

export default Dashboard;