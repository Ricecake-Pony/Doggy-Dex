import {Link, NavLink} from "react-router-dom"
import * as React from 'react';
import { useEffect, useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PetIcon from '@mui/icons-material/Pets';
import { UserContext } from "../../contexts/UserContext";

// const pages = [ 'Home', 'breeds','dog_products'];
// const settings = ['my_profile','Signup', 'Logout'];

export default function NavBar() {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
         const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
         };
         const handleClose = () => {
           setAnchorEl(null);
         };


    useEffect(() => {
        console.log(currentUser)
    }, [])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <PetIcon className="nav-icon"/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink className="link" to="/">
                Home
            </NavLink>
            <NavLink className="link" to="/breeds">
                Dog Breeds
            </NavLink>
            <NavLink className="link" to="/login">
                Login
            </NavLink>
          </Typography>
          <Tooltip title="Open settings">
             <IconButton aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} sx={{ p: 0 }}>
                { currentUser ? (  <Avatar alt={currentUser.first_name} src={currentUser.image_url}/>) : (null) }
             </IconButton>
          </Tooltip>
          <Menu
           className="nav-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}>
            <NavLink to="/my_profile"> <MenuItem onClick={handleClose}>Profile</MenuItem></NavLink>
            <NavLink to="/"> <MenuItem onClick={handleClose}>Logout</MenuItem></NavLink>
            <NavLink to="/signup"> <MenuItem onClick={handleClose}>SignUp</MenuItem></NavLink>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
  }