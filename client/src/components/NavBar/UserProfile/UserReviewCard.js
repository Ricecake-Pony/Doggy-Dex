import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import styled from "@emotion/styled";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: end;
align-items: end;

`

function UserReviewCard({ review, onUpdateReview, onDeleteReview }) {
  const [isEditing, setIsEditing] = useState(false); // add state variable for whether form is being edited
  const [note, setNote] = useState(review.note);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  function showForm() {
    setIsEditing(true);
  }

  function resetInput() {
    setIsEditing(false);
    setNote(review.note);
  }

  function updateReviews() {
    fetch(
      `http://localhost:3001/users/${currentUser.id}/my_profile/${review.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          uid: localStorage.uid,
        },
        body: JSON.stringify({ note }),
      }
    )
      .then((r) => r.json())
      .then((updatedReview) => {
        setNote(updatedReview.note); // update local state with new note value
        onUpdateReview(updatedReview); // notify parent component of the updated review
        setIsEditing(false);
      });
  }

  function deleteReviews() {
    fetch(
      `http://localhost:3001/users/${currentUser.id}/my_profile/${review.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          uid: localStorage.uid,
        },
      }
    )
      .then((r) => r.json())
      .then(() => onDeleteReview(review));
  }

  return (
    <>
      <div>

          <Card sx={{ maxWidth: 270, marginLeft: 18, marginTop: 5, backgroundColor: "#F5A614" }}>
          <CardMedia
            sx={{ height: 'auto', width: 275}}
            component="img"
            image={review.breed.image_url}
            title={review.breed.name}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" sx={{color:"#1F1A38", fontFamily: 'Mulish'}} component="div">
            Dog Breed: {review.breed.name}
            </Typography>
          </CardContent>
                <ButtonContainer>
            {isEditing ? (
              <div>
                <input
                  type="text"
                  value={note}
                  id="note"
                  onChange={(e) => setNote(e.target.value)}
                  />
                <Button variant="contained" size="small" onClick={updateReviews}>Save</Button>
                <Button variant="contained" size="small" onClick={resetInput}>Cancel</Button>
              </div>
            ) : (
              <div>
                <p> Your Review was: "{review.note}" </p>

                <Button variant="contained" sx={{width: "100%"}} size="small" onClick={showForm}>Edit</Button>
                
              </div>
            )}
            
            <Button variant="contained" size="small" sx={{width: "130%"}} onClick={deleteReviews}>Delete</Button>
            </ButtonContainer>
          </Card>
      </div>
    </>
  );
}
export default UserReviewCard;
