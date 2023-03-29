import React, {useEffect, useState, createContext} from "react";

const UserContext = createContext()
const baseURL= "http://localhost:3001/"
// const loginURL = baseURL + 'login';

const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    
    useEffect( () => {
        if (localStorage.uid)
    fetch('http://localhost:3001/autologin', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(localStorage.uid)
      })
      .then(res => { if(res.ok) {
        res.json()
        .then(user => {
          setCurrentUser(user)
          console.log("User Found:", localStorage.uid)
        }
      )}
    })
   else {
    console.log('No User Found');
    
    };
    },[])

return ( <UserContext.Provider value={{currentUser, setCurrentUser}}>
    {children}
</UserContext.Provider>

); 


}

export {UserContext, UserProvider}