import React, {useEffect, useState} from "react"
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import styled from "@emotion/styled";

const FormContainer = styled.div `
    display: flex;
    justify-content: center;

`

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
                  alert(errors.errors)
                )}
              })
          }


    return (
        <>
        <FormContainer>
            <Card sx={{m: 10, width: 350, backgroundColor: "#F5A614"}}>
            <Typography sx={{color:"#1F1A38", fontFamily: 'Mulish'}}>

            <ul>Password Conditions
                <li> Must be at least 8 characters long</li>
                <li> Must contain one number at least (123)</li>
                <li> Must contain at least one lower case letter (abc)</li>
                <li> Must contain at least one upper case letter (ABC)</li>
                <li> Must contain at least one symbol (!@#)</li>
            </ul>
            </Typography>
            <form onSubmit={submitProfile}>

                    <TextField
                required
                sx={{backgroundColor: "white", mt:1, mb: 1, display: "flex", justifyContent: 'center', ml:"10%", mr: "10%"}}
                id="outlined-required"
                placeholder="email"
                label="Email Required"
                type='email' 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                />
                <TextField
                required
                sx={{backgroundColor: "white", mt:1, mb: 1, display: "flex", justifyContent: 'center', ml:"10%", mr: "10%"}}
                id="outlined-required"
                label="Username Required"
                type='text' 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                required
                sx={{backgroundColor: "white", mt:1, mb: 1, display: "flex", justifyContent: 'center', ml:"10%", mr: "10%"}}
                id="outlined-required"
                label="First Name Required"
                type='text' 
                onChange={(e) => setFirstName(e.target.value)} 
                value={firstName}
                />
                <TextField
                required
                sx={{backgroundColor: "white", mt:1, mb: 1, display: "flex", justifyContent: 'center', ml:"10%", mr: "10%"}}
                id="outlined-required"
                label="Password Required"
                type='password' 
                onChange={(e) => setPassword(e.target.value)} 
                value={password}
                />
        
                <TextField
                required
                sx={{backgroundColor: "white", mt:1, mb: 1, display: "flex", justifyContent: 'center', ml:"10%", mr: "10%"}}
                id="outlined-required"
                label="Password Confirmation Required"
                type='password' 
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />


                    <Button type="submit" sx={{ backgroundColor:'#28A4A4' }} variant="contained" disabled={password !== passwordConfirmation || !username || !email || !firstName } sx={{display: "flex", justifyContent: 'center', ml:"27.5%"}}>Create Profile</Button>
                </form>
                </Card>
            </FormContainer>
        </>
    )
}

export default SignUp;