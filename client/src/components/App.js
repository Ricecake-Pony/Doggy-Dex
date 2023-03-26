import React, {useState, useEffect, createContext} from 'react';
import Breeds from './Breeds/Breeds';
import { Route, Routes } from "react-router-dom"
import LoginModal from './LoginModal/LoginModal'
import SignUp from './NavBar/SignUp';
import Home from './NavBar/Home';
import NavBar from './NavBar/NavBar';

const baseURL= "http://localhost:3001/"
const loginURL = baseURL + 'login';
const signUpURL = baseURL + '/signup'

export const UserContext = createContext();

function App() {
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [currentUser, setCurrentUser] = useState(null)
  // const [loggedUser, setLoggedUser] = useState()
  

  const loginInfo = {email, password}

  const resetForm = () => {
    setEmail("")
    setPassword("")
  }
  
  useEffect( () => {
    if (localStorage.uid)
    fetch(loginURL, {
      headers: {
        'Content-type': 'application/json',
        'auth-token': localStorage.uid
      }})
      .then( r => r.json())
      .then(setCurrentUser)
    else
    console.log("No user found.")
  }, [])

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
        
        setCurrentUser(user)
        console.log(currentUser)
        } else
        alert(user.errors)
      })
      resetForm()
    }

    return (
    <div className="App">
      <UserContext.Provider value={currentUser }>
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
        <Route exact path="/login" element={<LoginModal />} />
            <Route
              exact path ="/signup"
              element={<SignUp signUpURL={signUpURL} />}
              />
        </Routes> 
    </UserContext.Provider>
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