import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";

function BreedInfo () {
    const location = useLocation();
    const [breed, setBreed] = useState([])
    const [reviews, setReviews] = useState([])
    const [toggleReviews, setToggleReviews] = useState(false)
    const breedId = location.state.id
    
    const Card = styled.div `
    border: 3px solid green;
    margin: 10px;
    padding-left: 10px;
    `
    const Image = styled.img`
    background-x: center;
    border: 5px solid black;
    height: auto;
    width: 300px;
    `
    const ReviewsContainer = styled.div `
    border: 3px solid pink;
    `
    const ReviewLog = styled.div `
    border: 3px solid blue;
    `

    
    useEffect(() => {
        fetch("http://localhost:3001/breeds/")
        .then( r => r.json())
        .then(breedData => {
            
            const selectedBreed =  breedData.filter((breed) =>  breedId == breed.id)
            setBreed(selectedBreed[0])
        })
    }, [breedId])
    
    function getBreedReviews(){
        fetch(`http://localhost:3001/breeds/${breed.id}`)
        .then(r => r.json())
        .then(breedReviews => 
            setReviews(breedReviews.breed_reviews))
            return setToggleReviews(!toggleReviews) 
    }

    return(
        <>
        <Card>
        <Image breed = {breed} src= {breed.image_url}> 
          </Image>
          <br/>
        {breed.name}
            <ul>
                Temperament: {breed.temperament}
                <br/>
                Breed group: {breed.breed_group}
                <br/>
                Bred for: {breed.bred_for}
                <br/>
                Average Height: {breed.height_imperial} ({breed.height_metric})
                <br/>
                Average Weight: {breed.weight_imperial}  ({breed.weight_metric})
                <br/>
                Lifespan: {breed.lifespan}
            </ul>
        </Card>
        <button onClick={() => getBreedReviews()}> Click for Reviews</button>

        {toggleReviews ? 
        <ReviewsContainer>{reviews.map((review) => (
            <ReviewLog key={review.id}>
                <p>{review.note}</p>
            </ReviewLog>))}
        </ReviewsContainer> 
        : <></>}
        
        </>
    );
}

export default BreedInfo;