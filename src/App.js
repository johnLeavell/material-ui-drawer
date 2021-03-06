import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Container, Typography, } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit'},
  link: { textDecoration: 'none', color: theme.palette.text.primary}
}))

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div style={{ display: 'flex'}}>
      <Drawer
        style={{ width: '220px' }}
        variant='persistent'
        anchor='left'
        open={true}
        classes={{ paper: classes.drawerPaper }}
      >
        <List>
          <Link to='/' className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon/>
            </ListItemIcon>
            <ListItemText primary="Home"/ >
          </ListItem>
          </Link>
          <Link to='/about' className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About"/ >
          </ListItem>
          </Link>
        </List>
      </Drawer>
      <Switch>
        <Route exact path='/'>
        <Container>
          <Typography variant='h4' gutterBottom>
            Home
          </Typography>
          <Typography>
          Welcome to Home
          </Typography>
        </Container>
        </Route>
        <Route exact path='/about'>
        <Container>
        <Typography variant='body1' gutterBottom>
            About
          </Typography>
        </Container>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
