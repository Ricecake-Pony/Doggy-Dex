import React, {useEffect, useState, useContext} from "react";
import BreedReviews from "../Reviews/BreedReviews";
import { UserContext } from "../../contexts/UserContext";

export default function UserProfile () {
    const {currentUser, setCurrentUser} = useContext(UserContext)

    function getUserBreedReviews(){
    if (currentUser) 
    console.log(currentUser)
    {
    fetch(`http://localhost:3001/users/${currentUser.id}/my_profile`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            uid: localStorage.uid
        }
    })
    .then( r => {
        if (r.ok){
            r.json().then(dogBreedReviews => console.log(dogBreedReviews))
         }
        })
      }
     }
    
    return(

        <button onClick={ getUserBreedReviews}> Hit me for your Dog Reviews</button>
    )
}