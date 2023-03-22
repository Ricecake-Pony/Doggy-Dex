import {useState, useEffect} from 'react';
import Breeds from './Breeds';

const baseURL= "http://localhost:3001/"
const loginURL = baseURL + 'login'

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect( () => {
    if 
    (localStorage.uid)
    console.log("User found:", localStorage.uid)
    else
    console.log("No user found.")
  }, [])

    fetch(loginURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: 'trey@gmail.com',
        password: 'Testing!1'
      })
    })
      .then(r => r.json())
      .then(user => {
        localStorage.uid = user.uid
        setCurrentUser(user.id)
      })
      
    

  return (
    <div className="App">
      <Breeds/>
    </div>
  );
}

export default App;
