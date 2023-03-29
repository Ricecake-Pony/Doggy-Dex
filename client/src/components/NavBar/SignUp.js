import React, {useEffect, useState} from "react"

 function SignUp( {signUpURL}){
        const [user, setUser] = useState(null);
        const [email, setEmail] = useState('')
        const [firstName, setFirstName] = useState('')
        const [password, setPassword] = useState('')
        const [imageUrl, setImageUrl] = useState('')
        const [dogImage, setDogImage] = useState(null)

        useEffect(() => {
            fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then(dogData => setDogImage(dogData.message))
        },[])

        const signUpInfo = {
            email: email,
            first_name: firstName,
            password: password,
            image_url: dogImage
        }

            const resetForm = () => {
                setEmail("")
                setPassword("")
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
            .then(r => r.json())
            .then(setUser)

            resetForm()
            alert(user.errors)
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
                <button type="submit">Create Profile</button>
            </form>
        </>
    )
}

export default SignUp;