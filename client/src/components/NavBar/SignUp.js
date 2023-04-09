import React, {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";

 function SignUp( {signUpURL}){
        const [user, setUser] = useState(null);
        const [username, setUsername] = useState("");
        const [email, setEmail] = useState('')
        const [firstName, setFirstName] = useState('')
        const [password, setPassword] = useState('')
        const [imageUrl, setImageUrl] = useState('')
        const [passwordConfirmation, setPasswordConfirmation] = useState("");
        const [dogImage, setDogImage] = useState(null)
        const [errors, setErrors] = useState()
        let navigate = useNavigate();

        useEffect(() => {
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then(dogData => setDogImage(dogData.message))
        },[])

        const signUpInfo = {
            email: email,
            username: username,
            first_name: firstName,
            password: password,
            passwordConfirmation: passwordConfirmation,
            image_url: dogImage
        }

            const resetForm = () => {
                setUsername("")
                setEmail("")
                setPassword("")
                setPasswordConfirmation("")
                setFirstName("")
                setImageUrl("")
              }

        const submitProfile = (e) => {
            e.preventDefault()
            fetch(signUpURL,{
                method: 'POST',
                headers: {'Content-Type': 'application/json',
                Accept: 'application/json'    
            },
            body: JSON.stringify(signUpInfo)
            })
            .then(r => {
                if (r.ok) {
                  r.json().then(data => {
                    setUser(data)
                    resetForm()
                    alert('Sign Up Completed Successfully. Please Login')
                  })
                  navigate("/")
                } else {
                    r.json().then(errors => setErrors(errors),
                  alert("An Error Ocurred, Type: 422 (Unprocessable Entity)")
                )}
              })
          }


    return (
        <>
        <ul>Password Conditions
            <li> Must be at least 8 characters long</li>
            <li> Must contain one number at least (123)</li>
            <li> Must contain at least one lower case letter (abc)</li>
            <li> Must contain at least one upper case letter (ABC)</li>
            <li> Must contain at least one symbol (!@#)</li>
        </ul>
            <form onSubmit={submitProfile}>
                <input
                    id="email"
                    placeholder="email"
                    type='email' 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                />
                <br/>
                <input
                    id="password"
                    placeholder="password"
                    type='password' 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                />
                <br/>
                <input
                    class="password-confirmation"
                    type="password"
                    id="password_confirmation"
                    placeholder="password confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <br/>
                <input
                    type="text"
                    id="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                 />
                 <br/>
                <input
                    id="firstName"
                    placeholder="First Name"
                    type='text' 
                    onChange={(e) => setFirstName(e.target.value)} 
                    value={firstName}
                />
                <br/>
                {/* <input
                placeholder="imageUrl"
                type='text' 
                onChange={(e) => setImageUrl(e.target.value)} 
                value={imageUrl}
                /> */}
                <br/>
                <button type="submit" disabled={password !== passwordConfirmation || !username || !email || !firstName }>Create Profile</button>
            </form>
        </>
    )
}

export default SignUp;