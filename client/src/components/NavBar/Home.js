import React, { useContext} from "react";
import { UserContext } from "../App";

export default function Home(){
    const user  = useContext(UserContext)
    // const [dogImage, setDogImage] = useState(null)
    // useEffect(() => {
    //   console.log(user)
    // })
    
    // useEffect(() => {
    //         fetch('https://dog.ceo/api/breeds/image/random')
    //         .then(r => r.json())
    //         .then(dogData => setDogImage(dogData.message))
    //     },[])

    return(
        <>
        <h3>{ user && user.user && ( `Welcome Home ${user.user.first_name}`) } </h3>
        <img src={user && user.user.image_url} alt='random dog image' style={{height: 'auto', width: '300px' }}/>
        </>
    )
}
