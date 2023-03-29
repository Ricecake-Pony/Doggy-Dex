import React, {useContext} from "react";

export default function BreedReviews(){
    if (localStorage.uid)
    fetch('http://localhost:3001/users/my_reviews', {
        headers: {
            'Content-type' : 'application/json',
            'uid' : localStorage.uid
        },
    })
    .then( r => r.json())
    .then(dogBreeds => console.log(dogBreeds))
}