import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";

function BreedInfo () {
    const location = useLocation();
    const [breeds, setBreeds] = useState([])
    const [reviews, setReviews] = useState([])
    const breedId = location.state.id
    // console.log(breedId)

    
    useEffect(() => {
        fetch("https://api.thedogapi.com/v1/breeds")
        .then( r => r.json())
        .then(breedData => {
            
            const selectedBreed =  breedData.filter((breed) =>  breedId == breed.id)
            setBreeds(selectedBreed[0])
        })
    }, [])
    
    function getBreedReviews(){
        fetch(`http://localhost:3001/breeds/${breeds.id}`)
        .then(r => r.json())
        .then(breedReviews => 
            setReviews(breedReviews.breed_reviews)
            )
    }

    return(
        <>
        {console.log(reviews)}
        {breeds.name}
        {/* {breeds.breed_reviews} */}
        <button onClick={() => getBreedReviews()}> Click for Reviews</button>
        </>
    );
}

export default BreedInfo;