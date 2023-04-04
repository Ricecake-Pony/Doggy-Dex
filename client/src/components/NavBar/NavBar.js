import { NavLink} from "react-router-dom"
import * as React from 'react';
import { useEffect, useContext } from "react";
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem } from '@mui/material';
import PetIcon from '@mui/icons-material/Pets';
import { UserContext } from "../../contexts/UserContext";
import LoginModal from "./LoginModal";
import styled from "@emotion/styled";

export default function NavBar({logOut}) {
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
         const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
         };
         const handleClose = () => {
           setAnchorEl(null);
         };
          console.log(currentUser)

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
            <NavLink className="link" to="/dog_products">
                Dog Products
            </NavLink>
            <NavLink className="link" to="/signup">SignUp</NavLink>
          </Typography>
          { currentUser ? 
              <Tooltip title="Open settings">
             <IconButton aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} sx={{ p: 0 }}>
                { currentUser ? (  <Avatar alt={currentUser.first_name} src={currentUser.image_url}/>) : (null) }
             </IconButton>
          </Tooltip>
           : <LoginModal/> }
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
            <NavLink className="link" to="/my_profile"> <MenuItem onClick={handleClose}>My Profile</MenuItem></NavLink>
            <NavLink className="link" to="/"> <MenuItem onClick={logOut}>Logout</MenuItem></NavLink>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
  }