import React, {useState} from "react"

export default function( {signUpURL}){
        const [email, setEmail] = useState('')
        const [firstName, setFirstName] = useState('')
        const [password, setPassword] = useState('')
        const [imageUrl, setImageUrl] = useState('')

        const signUpInfo = {
            email,
            firstName,
            password,
            imageUrl
        }

            const resetForm = () => {
                setEmail("")
                setPassword("")
              }

        const submitProfile = (e) => {
            debugger
            e.preventDefault()
            fetch(signUpURL,{
                method: 'POST',
                headers: {'Content-Type': 'application/json',
                Accept: 'application/json'    
            },
            body: JSON.stringify(signUpInfo)
            })
            .then(r => r.json())
            .then(console.log)
            console.log("I submitted a profile!")
        }

    return (
        <form typeof="submit">
            <input
            placeholder="email"
            type='email' 
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            />
            <input
            placeholder="password"
            type='password' 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            />
            <input
            placeholder="firstname"
            type='text' 
            onChange={(e) => setFirstName(e.target.value)} 
            value={firstName}
            />
            <input
            placeholder="imageurl"
            type='text' 
            onChange={(e) => setImageUrl(e.target.value)} 
            value={imageUrl}
            />
            <button onSubmit={submitProfile}>Create Profile</button>
        </form>
    )
}