import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import UserReviewCard from "./UserReviewCard";

export default function UserProfile() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [userDogReviews, setUserDogReviews] = useState([]);

  useEffect(() => {
    if (currentUser) console.log(currentUser);
    {
      fetch(`http://localhost:3001/users/${currentUser.id}/my_profile`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          uid: localStorage.uid,
        },
      }).then((r) => {
        if (r.ok) {
          r.json().then((dogBreedReviews) =>
            setUserDogReviews(dogBreedReviews)
          );
        }
      });
    }
  }, []);

  function handleUpdateReview(updatedReview) {
    const updatedReviews = userDogReviews.map((review) => {
      if (review.id === updatedReview.id) {
        return updatedReview;
      }
      return review;
    });
    setUserDogReviews(updatedReviews);
  }

  function deleteReviews(review) {
    const updatedReviews = userDogReviews.filter(
      (userReview) => userReview.id !== review.id
    );
    setUserDogReviews(updatedReviews);
  }

  return (
    <>
      {userDogReviews.map((review) => (
        <UserReviewCard
          key={review.id}
          review={review}
          onUpdateReview={handleUpdateReview}
          setReviews={setUserDogReviews}
          onDeleteReview={deleteReviews}
        />
      ))}
    </>
  );
}
