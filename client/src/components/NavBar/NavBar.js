import { Link as RouterLink} from "react-router-dom"
import * as React from 'react';
import { useContext } from "react";
import { IconButton, Menu, Avatar, Tooltip, MenuItem } from '@mui/material';
import PetIcon from '@mui/icons-material/Pets';
import { UserContext } from "../../contexts/UserContext";
import LoginModal from "./LoginModal";

import styled from "@emotion/styled";

const AppBar = styled.div`
position: absolute top;
 background-color: #F6AE2D;
 width: 100%;
display: flex;
flex-direction: row;
align-items: space-evenly;
justify-content: space-around;
font-family:'Playfair Display', serif;

`
const Link = styled(RouterLink)`
text-decoration: none;
font-size: 36px;
color: #1f1a38;
`

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

  return (
      <AppBar >
          <PetIcon className="nav-icon" sx={{fontSize: '300%'}}/>
            <Link className="link" to="/" >
                Home
            </Link>
            <Link className="link" to="/breeds" >
                Dog Breeds
            </Link>
            <Link className="link" to="/dog_products">
                Dog Products
            </Link>
            <Link className="link" to="/signup">SignUp</Link>
          { currentUser ? 
              <Tooltip title="Open settings">
             <IconButton  aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} sx={{ p: 0 }}>
                { currentUser ? (  <Avatar alt={currentUser.first_name} src={currentUser.image_url} sx={{ width: 'auto', height: 60 }}/>) : (null) }
             </IconButton>
          </Tooltip>
           : <LoginModal sx={{fontSize: '300%'}}/> }
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
            <Link className="link" to="/my_profile"> <MenuItem onClick={handleClose}>My Profile</MenuItem></Link>
            <Link className="link" to="/"> <MenuItem onClick={logOut}>Logout</MenuItem></Link>
          </Menu>
      </AppBar>
  );
  }