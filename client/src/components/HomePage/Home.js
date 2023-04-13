import React, { useEffect, useContext} from "react";
import { UserContext } from "../../contexts/UserContext";
import styled from "@emotion/styled";
import { Card } from "@mui/material";

const WelcomeHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Playfair';
    color: #1F1A38;
`


export default function Home(){
    const {currentUser}  = useContext(UserContext)
    // const [dogImage, setDogImage] = useState(null)
    useEffect(() => {
    console.log(currentUser)
    // console.log(currentUser.first_name)
    // console.log(user.image_url)
    })
    
    // useEffect(() => {
    //         fetch('https://dog.ceo/api/breeds/image/random')
    //         .then(r => r.json())
    //         .then(dogData => setDogImage(dogData.message))
    //     },[])

    return(

        < div>
            {currentUser ?
                <WelcomeHeader>

                {
                    currentUser ? ( <img src={currentUser.image_url} style={{width: 300, height: 'auto'}} />)  : (null)        
                }
                {
                    currentUser ? (  <h3> { currentUser && ( `Welcome Home ${currentUser.first_name}`) } </h3>)  : (null) 
                }
                </WelcomeHeader>
                : <></>
                }

        <Card sx={{ backgroundColor:"#F5A614", width: '50%', mr: "30%" , ml:"25%" , fontFamily: 'lato', display: 'flex', flexDirection: 'column', alignItems: 'center', mt: "5%"}}>
            Welcome to Doggy Dex, the one stop shop for you to find the best dog breed for your needs, Here you can find more about a dog's
            <ul>
                <li>Lifespan</li>
                <li>What they were bred for</li>
                <li>Reviews from other user's/owners about the dog breed</li>
                <li>And much more to come as well with recommended dog toys and dog equipment for training</li>
            </ul>

            <h3 style={{fontFamily: 'lato'}}>NOTE: You must log in to have access to the website's features.</h3>
        </Card>
        
                
        </div>
        
    )
}
