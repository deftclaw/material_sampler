import React from 'react';
import { Box, Button, Container, Drawer, List, ListItem, ListItemIcon,
  ListItemText, makeStyles, Typography } from '@material-ui/core';
import Table from "./Table";
import 'victormono';
import { BrowserRouter as Router, Link } from "react-router-dom";
import HomeIcon from"@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary 
  }
}))

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" color="secondary" style={{ backgroundColor: '#1d1f21', height: '93vh', padding: '0.3em' }} gutterBottom>
        Material UI
        <br />
        <Button color="primary" variant="outlined" disableElevation>
          Hello World
        </Button>
        <Box mt={3}>
          <Table />
        </Box>
      </Typography>
      <Router>
        <div style={{ display: 'flex' }}>
          <Drawer
            style={{ width: '15em' }}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{ paper: classes.drawerPaper }} 
          >
            <List>
              <Link to="/" className={classes.link} color='primaryText'>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
            </List>
          </Drawer>
        </div>
      </Router>
    </Container>
  )
}

export default App;
