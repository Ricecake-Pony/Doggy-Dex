import React, {useState, useContext} from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

const baseURL= "http://localhost:3000/"
const loginURL = baseURL + 'login';

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {currentUser, setCurrentUser} = useContext(UserContext)
  const navigate = useNavigate()
  
  const resetForm = () => {
    setEmail("")
    setPassword("")
  }

  const loginInfo = {email, password}
   
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const login = (e) => {
    e.preventDefault()
  fetch(loginURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(loginInfo)
  })
    .then(r => r.json())
    .then(user => {
      if (!user.errors) {
      localStorage.setItem('uid', user.uid)
      setCurrentUser(user.user)
      console.log(user)
      navigate('/breeds')
      } else
      alert(user.errors)
    })
    resetForm()
  }

  return (
    <div>
      <Button variant="filled" sx={{fontSize: '185%', fontFamily: "Playfair", color:"#1F1A38"}} onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{color:"#1F1A38", fontFamily: 'Mulish'}} >
            To use this website, please login here. If you do not already have an account please signup <NavLink to='/signup'>here</NavLink>
          </DialogContentText>
          <form onSubmit={login}>
          <TextField
                required
                sx={{backgroundColor: "white", mt:1, mb: 1, display: "flex", justifyContent: 'center', mr: '25%'}}
                id="outlined-required"
                placeholder="email"
                label="Email Required"
                type='email' 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                />
        <TextField
                required
                sx={{backgroundColor: "white", mt:1, mb: 1, display: "flex", justifyContent: 'center', mr: '25%'}}
                id="outlined-required"
                label="Password Required"
                type='password' 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                />
            
        <Button sx={{display: "flex", alignItems: "start"}} type= 'submit'variant="contained" onClick={handleClose}>Login</Button>
        </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}