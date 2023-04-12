import React, {useState, useEffect, useContext} from "react"
import { UserContext } from "../../contexts/UserContext";
import styled from "@emotion/styled"

const Card = styled.div `
    border: 3px solid green;
    margin: 10px;
    padding-left: 10px;
    
    `

const Image = styled.img`
/* background-x: center; */
border: 5px solid black;
height: auto;
width: 300px;
`


function UserReviewCard ( {review, onUpdateReview, onDeleteReview}){
    const [isEditing, setIsEditing] = useState(false); // add state variable for whether form is being edited
    const [note, setNote] = useState(review.note);
    const {currentUser, setCurrentUser} = useContext(UserContext);

    function showForm(){
        setIsEditing(true);
    }

    function resetInput(){
        setIsEditing(false);
        setNote(review.note);
    }
    
        

        function updateReviews(){
            fetch(`http://localhost:3001/users/${currentUser.id}/my_profile/${review.id}`,{
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                    uid: localStorage.uid
                 },
                 body:JSON.stringify({note})
            })
            .then( r => r.json())
            .then(updatedReview => {
                setNote(updatedReview.note); // update local state with new note value
                onUpdateReview(updatedReview); // notify parent component of the updated review
                setIsEditing(false)
              });
            }
    
            function deleteReviews() {
                fetch(`http://localhost:3001/users/${currentUser.id}/my_profile/${review.id}`, {
                  method: "DELETE",
                  headers: {
                    "Content-type": "application/json",
                    uid: localStorage.uid,
                  },
                })
                  .then((r) => r.json())
                  .then(() => onDeleteReview(review));
              }

        return(
            <>
             <Card>
                <Image src={review.breed.image_url}/>
                <h3> Dog Breed: {review.breed.name}</h3>
                {isEditing ? (
                    <div>
                        <input type="text" value={note} id="note" onChange={(e) => setNote(e.target.value)} />
                        <button onClick={updateReviews} >Save</button>
                        <button onClick={resetInput} >Cancel</button>
                    </div>
                ) : (
                    <div>
                        <p> {review.note} </p>
                        <button onClick={showForm} >Edit</button>
                    </div>
                )}
                  <button onClick={deleteReviews}>Delete</button>
            </Card>
            </>
        )
    }
    export default UserReviewCard;