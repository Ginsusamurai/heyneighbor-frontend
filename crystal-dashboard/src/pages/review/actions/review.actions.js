export const getAllReviews = () => ({
    type: "GET ALL REVIEWS",
});
export const getUserReviews = (userID) => ({
    type: "GET USER REVIEWS",
    payload: userID
});
export const getItemReviews = (itemID) => ({
    type: "GET ITEM REVIEWS",
    payload: itemID
});
export const getReviewSuccess = (review) => ({
    type: "GET REVIEW SUCCESS",
    payload: review
});
export const ReviewQueryFail = (error) => ({
    type: "REVIEW QUERY FAIL",
    payload: error
});
export const getAReview = (reviewID) => ({
    type: "GET A REVIEW",
    payload: reviewID
});
export const getReviewTypeSubject = (typeID, subjectID) => ({
    type: "REVIEW BY TYPE & SUBJECT",
    payload: typeID, subjectID
});
export const postReview = () => ({
    type: "ADD NEW REVIEW",
    payload: newItemFromDb
});
export const updateReview = (reviewID) => ({
    type: "UPDATE REVIEW",
    payload: reviewID
});
export const removeReview = (reviewID) => ({
    type: "REMOVE REVIEW",
    payload: reviewID
});