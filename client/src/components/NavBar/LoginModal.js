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

const baseURL= "http://localhost:3001/"
const loginURL = baseURL + 'login';

export default function LoginModal() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [currentUser, setCurrentUser] = useState(null)
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
      localStorage.uid = user.uid
      setCurrentUser(user.user)
      console.log(user.user)
      navigate('/breeds')
      } else
      alert(user.errors)
    })
    resetForm()
  }

  return (
    <div>
      <Button variant="filled" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To use this website, please login here. If you do not already have an account please signup <NavLink to='/signup'>here</NavLink>
          </DialogContentText>
          <form onSubmit={login}>
          <input 
            id='email'
            type='email' 
            value= {email} 
            onChange={ (e) => setEmail(e.target.value)} 
            placeholder='email@gmail.com'
            />
        <br/>
          <input 
            id='password'
            name='password' 
            type='password' 
            value= {password} 
            onChange={ (e) => setPassword(e.target.value)} 
            placeholder='password'
            />
            <br/>
        <button type= 'submit' onClick={handleClose}>Login</button>
        </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}