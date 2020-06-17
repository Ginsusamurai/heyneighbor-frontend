require('dotenv').config();

const superagent = require('superagent');
const BACKEND_ROOT = process.env.BACKEND_ROOT;
console.log('backend', BACKEND_ROOT);

let initialState = {
  isLoading: false,
  selectedItemId: null, // will be a string
  error: null,
  reviews: [],
};
// const initialState = [];
// initialState.push(anItem);


export default function reducer(state = initialState, {
  type,
  payload
}) {
  switch (type) {
    //Get all reviews
    case "GET ALL REVIEWS":
      state = {
        ...state
      };
      state.reviews = payload;
      state.isLoading = false
      return {
        state
      };
      case "GET REVIEW SUCCESS":
      state = {
        ...state
      };
      state.reviews = payload;
      state.isLoading = false
      return {
        state
      };
    case "REVIEW QUERY FAIL":
      console.log(payload, "Error Message")
      return state;

      // Get reviews for a specific user
    case "GET USER REVIEWS":
      state = {
        ...state
      };
      state.reviews = payload;
      state.isLoading = false
      return {
        state
      };
      // Get reviews b y a specific ID
    case "GET ITEM REVIEW":
      return {
        ...state,
      };
      // Get reviews by subject and type
    case "GET REVIEW BY SUBJECT & TYPE":
      return {
        ...state,
      };
      // Add a new review
    case "ADD NEW REVIEW":
      return {
        ...state,
      };
      // Update a current review
    case "UPDATE A REVIEW":
      return {
        ...state,
      };
      // Remove a review
    case "DELETE A REVIEW":
      return {
        ...state,
      };
    default:
      return state;
  }
}

export const getAllReviews = () => ({
  type: "GET ALL REVIEWS",
})
export const getReviewSuccess = (reviews) => ({
  type: "GET REVIEW SUCCESS",
  payload: reviews
})
export const reviewQueryFail = (error) => ({
  type: "REVIEW QUERY FAIL",
  payload: error
})
export const getUserReviews = (userID) => ({
  type: "GET USER REVIEWS",
  payload: userID
});
export const getItemReviews = (itemID) => ({
  type: "GET ITEM REVIEW",
  payload: itemID
})
export const getItemById = (reviewID) => ({
  type: "GET ITEM REVIEW",
  payload: reviewID
})
export const getReviewSubjectType = (SubjectID, TypeID) => ({
  type: "GET REVIEW BY SUBJECT & TYPE",
  payload: SubjectID, TypeID
})
export const addNewReview = () => ({
  type: "ADD NEW REVIEW",
})
export const updateReview = (itemID) => ({
  type: "UPDATE A REVIEW",
  payload: itemID
})
export const deleteReview = (itemID) => ({
  type: "DELETE A REVIEW",
  payload: itemID
})

// Effects
export function getAllReviewsAPI() {
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/review`).then(data => {
      console.log(data);
      dispatch(getReviewSuccess(data.body.results))
    }).catch(err => dispatch(reviewQueryFail(err)))
  }
}

export function getUserReviewsAPI() {
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/userReviews/:id`).then(data => {
      console.log(data);
      dispatch(getReviewSuccess(data.body.results))
    }).catch(err => dispatch(reviewQueryFail(err)))
  }
}

export function getItemReviewAPI() {
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/itemReviews/:id`).then(data => {
      console.log(data);
      dispatch(getReviewSuccess(data.body.results))
    }).catch(err => dispatch(reviewQueryFail))
  }
}

export function getReviewByIdAPI() {
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/review/:id`).then(data => {
      console.log(data);
      dispatch(get(data.body.results))
    }).catch(err => dispatch(reviewQueryFail))
  }
}

export function getReviewSubjectTypeAPI() {
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/item/:ITEMid`).then(data => {
      console.log(data)
      dispatch(getReviewSuccess(data.body.results))
    }).catch(err => dispatch(reviewQueryFail))
  }
}

export function removeItemAPI() {
  return function (dispatch) {
    return superagent.delete(`${BACKEND_ROOT}/item/:ITEMid`).then(data => {
      console.log(data)
      dispatch(removeItem(data.body.results))
    }).catch(err => dispatch(reviewQueryFail))
  }
}

export const getRemoteData = (endpoint) => dispatch => {
  return superagent.get(`${BACKEND_ROOT}/${endpoint}`)
    .then(data => {
      console.log("Needs implimentation");
      console.log(data);
      // dispatch(getAction(data.body.results));
    })
}


// REDUX:
// ACTIONS
// EFFECTS
// REDUCERS
// SELECTORS