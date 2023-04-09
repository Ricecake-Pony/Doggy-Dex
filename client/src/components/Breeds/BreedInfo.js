import React, {useEffect, useState, useContext} from "react";
import { UserContext } from "../../contexts/UserContext";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";

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
    const ReviewForm = styled.form `
        border: 5px black dotted;
        margin-left: 25%;
        margin-right: 25%;
        padding-top: 1%;
        padding-bottom: 1%;
        display: flex;
        justify-content: center;
        `
    const FormInput = styled.input `
        display: inline-block;
         ::placeholder{
            text-align: center;
         };
    
    `

function BreedInfo () {
    const location = useLocation();
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const [breed, setBreed] = useState([])
    const [reviews, setReviews] = useState([])
    const [toggleReviews, setToggleReviews] = useState(false)
    const [note, setNote] = useState('')
    const breedId = location.state.id

    // const [reviewForm, setReviewForm] = useState({
    //     //     note: '',
    //     //     user_id: currentUser,
    //     //     breed_id: breedId

    // })

    
    const resetForm = () => {
        setNote("")
      }

    
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
        
        function submitReviewForm(e){
            
            const reviewInfo = {
                note,
                user_id: currentUser.id,
                breed_id: breedId
            }
            
            e.preventDefault()
            fetch(`http://localhost:3001/breeds/${breed.id}`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    uid: localStorage.uid
                },
                body: JSON.stringify(reviewInfo)
            })
            resetForm()
        }
        
        return(
        <>
        {console.log(reviews)}
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
                    <p>By: {review.user.username}</p>
                 </ReviewLog>))}
             </ReviewsContainer> 
             : <></>}

        <ReviewForm onSubmit={submitReviewForm}>
             <br/>
             <FormInput 
             type="text" 
             placeholder="Enter Your Thoughts on This Breed"
             onChange={ (e) => setNote(e.target.value)}
             />
             <button type="submit"> Post Review</button>
         </ReviewForm>
         
        
        </>
    );
}

export default BreedInfo;

{/* <StyledForm onSubmit={this.onSubmit}>
<StyledInput
 required
 type="email"
 name="email"
 placeholder="Email"
 data-testid="login-input"
 onChange={this.onChange}
/>
<Button type="submit">Log in</Button>
</StyledForm> */}