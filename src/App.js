import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit'}
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
        
      </Drawer>

      </div>
    </Router>
  );
}

export default App;
