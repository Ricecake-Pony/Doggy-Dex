import React, {useState, useEffect} from 'react';
import Breeds from './Breeds/Breeds';

const baseURL= "http://localhost:3001/"
const loginURL = baseURL + 'login'

function App() {
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [currentUser, setCurrentUser] = useState(null)

  
  // useEffect( () => {
  //   if (localStorage.uid)
  //   fetch(loginURL, {
  //     headers: {
  //       'Content-type': 'application/json',
  //       'auth-token': localStorage.uid
  //     }})
  //     .then( r => r.json())
  //     .then(setCurrentUser)
  //   else
  //   console.log("No user found.")
  // }, [])

    // const login = () => {
    // fetch(loginURL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //     Accept: 'application/json'
    //   },
    //   body: JSON.stringify({
    //     email: 'trey@gmail.com',
    //     password: 'Testing!1'
    //   })
    // })
    //   .then(r => r.json())
    //   .then(user => {
    //     localStorage.uid = user.uid
    //     setCurrentUser(user.id)
    //   })
    // }

    const handleLogin= (e) => {
      e.preventDefault()
      fetch(loginURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      .then( r => r.json())
      .then(console.log)
    
    console.log("I'm submitting!")
      }
      // )

    
      
    

  return (
    <div className="App">
      <form onSubmit={handleLogin}>
      <input type='email' value= {email} onChange={ (e) => setEmail(e.target.value)} placeholder='email@gmail.com'></input>
      <input type= 'password' value= {password} onChange={ (e) => setPassword(e.target.value)} placeholder='password'></input>
      <button type= 'submit'>Login</button>
      </form>
      <Breeds/>
    </div>
  );
}

export default App;
