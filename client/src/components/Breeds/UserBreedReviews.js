// import React, {useEffect, useContext} from "react";
// import { UserContext } from "../../contexts/UserContext";

// export default function BreedReviews(){
//     const {currentUser, setCurrentUser} = useContext(UserContext)

//     useEffect(() => {
//         console.log(currentUser)
//     })

//     useEffect(() =>{
//     if (currentUser) 
//     console.log(currentUser)
//     {
//     fetch(`http://localhost:3001/users/${currentUser.id}/my_profile`,{
//         method: 'GET',
//         headers: {
//             'Content-type': 'application/json',
//             uid: localStorage.uid
//         }
//     })
//     .then( r => {
//         if (r.ok){
//             r.json().then(dogBreedReviews => console.log(dogBreedReviews))
//          }
//         })
//       }
//      })
    
//     return(

//         <button onClick={ getUserBreedReviews}> Hit me for your Dog Reviews</button>
//     )
// }