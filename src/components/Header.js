import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const Header = (props) => {
  const handleClick = (e) => {
    fetch(`https://reqres.in/api/users?page=1`)
      .then((response) => response.json())
      .then((actualData) => {
        // console.log(actualData)
        props.handleClick(actualData)
      }).catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Praveen
            </Typography>
          </IconButton>
          <Button color="inherit" onClick={handleClick}>Get users</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header