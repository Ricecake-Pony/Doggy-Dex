import React, {useState, useContext} from "react"

export default function LoginModal(){
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
        fetch('http://localhost:3001/login', {
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
            setCurrentUser(currentUser)
            localStorage.setItem("uid")
            console.log(user)
            } else
            alert(user.errors)
          })

          resetForm()
        }

    return(
        <>
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
      </>
    )
}