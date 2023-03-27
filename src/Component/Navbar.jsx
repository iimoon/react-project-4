import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import Face6Icon from '@mui/icons-material/Face6';


const Navbar = () => {
  return (
    <Box class ="Navbar" sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="secondary">
      <Toolbar>
      <Face6Icon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
        >
        </IconButton>
        <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
          StudentApp
        </Typography>
        <Button id='nav' color="inherit"><Link to='/'>View</Link></Button>
        <Button id='nav' color="inherit"> <Link to='/addstudent'>AddStudent</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar