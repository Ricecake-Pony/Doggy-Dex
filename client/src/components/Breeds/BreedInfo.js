import React, {useEffect, useState, useContext} from "react";
import { UserContext } from "../../contexts/UserContext";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import TextField from '@mui/material/TextField';

    const ReviewsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1rem;
    gap: 1rem;
    `
    const ReviewForm = styled.form `
        background-color: #F5A614;
        border: 1.5px black solid;
        margin-left: 25%;
        margin-right: 25%;
        padding-top: 1%;
        padding-bottom: 1%;
        display: flex;
        justify-content: space-evenly;
        `
    const FormInput = styled.input `
        display: inline-block;
         ::placeholder{
            text-align: center;
        };
        width: 210px;
        height: 50px;
    
    `

function BreedInfo () {
    const location = useLocation();
    const {currentUser, setCurrentUser} = useContext(UserContext)
    const [breed, setBreed] = useState([])
    const [reviews, setReviews] = useState([])
    const [toggleReviews, setToggleReviews] = useState(false)
    const [note, setNote] = useState('')
    const breedId = location.state.id

    
    const resetForm = () => {
        setNote("")
      }

    
      useEffect(() => {
        fetch("http://localhost:3001/breeds/", {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              uid: localStorage.uid,
            },})
        .then( r => r.json())
        .then(breedData => {
            
            const selectedBreed =  breedData.filter((breed) =>  breedId == breed.id)
            setBreed(selectedBreed[0])
        })
    }, [breedId])
    
    function getBreedReviews(){
        fetch(`http://localhost:3001/breeds/${breed.id}`, {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              uid: localStorage.uid,
            },})
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
            console.log("I submitted!")
        }
        
        return(
    <>

        <Card sx={{ maxWidth: '50%', margin: 5, backgroundColor: "#F5A614", marginLeft: '25%'}}>
            <CardMedia
                sx={{ height: 'auto', width: '110%'}}
                component="img"
                image={breed.image_url}
                title={breed.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" sx={{color:"#1F1A38", fontFamily: 'Mulish'}} component="div">
                {breed.name}
                </Typography>
                <Typography variant="body2" sx={{color:"#1F1A38", fontFamily: 'Lato'}}>
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
                <br/>
                <br/>
                    <Button variant="contained" sx={{ backgroundColor:'#28A4A4' }} onClick={() => getBreedReviews()}> Click for Reviews</Button>
                </Typography>
            </CardContent>
        </Card>
     
        <ReviewForm onSubmit={submitReviewForm}>
             <FormInput 
             type="text" 
             placeholder="Enter Your Thoughts on This Breed"
             onChange={ (e) => setNote(e.target.value)}
             />
            <Button sx={{ float: "left", backgroundColor:'#28A4A4' }} variant="contained" onClick={submitReviewForm} >Post Review</Button>
         </ReviewForm>

             {toggleReviews ? (
                 reviews.length > 0 ? (
                    <ReviewsContainer>
                      {reviews.map((review) => (
                        <Box
                          component="div"
                          sx={{ width: '48%', flex: '0 0 auto', mt: 3 }}
                          key={review.id}
                        >
                          <Card
                            variant="outlined"
                            sx={{
                              backgroundColor: '#F5A614',
                              mb: 1.5,
                              borderBlockColor: 'white',
                              mr: '35%',
                              ml: '10%',
                            }}
                          >
                            <Typography sx={{ color: '#1F1A38', fontFamily: 'Mulish' }}>
                              {review.note}
                            </Typography>
                            <Typography sx={{ color: '#1F1A38', fontFamily: 'Lato' }}>
                              Posted by {review.user.username}
                            </Typography>
                          </Card>
                        </Box>
                      ))}
                    </ReviewsContainer>
                  ) : (
                    <Card sx={{ maxWidth: '15%', margin: 5, backgroundColor: "#F5A614", marginLeft: '25%'}}>No reviews yet.</Card>
                  )
                ) : null}
        </>
    );
}

export default BreedInfo;
