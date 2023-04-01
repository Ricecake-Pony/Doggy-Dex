import React, {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom"
// import LoginModal from './LoginModal/LoginModal'
import Breeds from './Breeds/Breeds';
import NavBar from './NavBar/NavBar';
import SignUp from './NavBar/SignUp';
import Home from './HomePage/Home';
import UserProfile from './NavBar/UserProfile';


const baseURL= "http://localhost:3001/"
const loginURL = baseURL + 'login';
const signUpURL = baseURL + 'signup';
const myProfileURL = baseURL + 'my_profile';
const breedsURL = baseURL + 'breeds';

function App() {
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [currentUser, setCurrentUser] = useState(null)

  

  const loginInfo = {email, password}

  const resetForm = () => {
    setEmail("")
    setPassword("")
  }

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
        console.log(user)
        } else
        alert(user.errors)
      })
      resetForm()
    }

    return (
    <div className="App">
        <NavBar/>
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
        <button type= 'submit'>Login</button>
        </form>
        <Breeds/>
        <Routes>
          <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/login" element={<LoginModal />} /> */}
          <Route exact path ="Signup" element={<SignUp signUpURL = {signUpURL} />} />
          <Route exact path ="my_profile" element={<UserProfile myProfileURL = {myProfileURL} />} />
          <Route exact path ="breeds" element={<Breeds breedsURL = {breedsURL} />} />
        </Routes> 
    </div>
  );
}

export default App;

// Prince has his onSubmit like so (loginInfo found on line 12):
// onSubmit={ () => props.login({loginInfo})} and he uses the login function what's the difference between my handleLogin and his?
// const handleLogin= (e) => {
  //   // debugger use debugger to see if your values are actually being saved onSubmit
  //   e.preventDefault()
  //   if (localStorage.uid)
  //   fetch(loginURL, {
    //     method: "POST",
    //     headers: {
      //       "Content-Type": "application/json",
      //        Accept: 'application/json'
      //     },
      //     body: JSON.stringify(loginInfo),
      //   })
      //   .then( r => r.json())
      //   .then(user => {
        //     if (!user.errors) {
          //       localStorage.uid = user.uid
          //       setCurrentUser(user.id)
          //       console.log(user)
          //       console.log(user.id)
          //       console.log("I'm submitting!")
          //     } else
          //       user.errors.forEach(error => alert(error));
          //   })
          // }
          
  // )