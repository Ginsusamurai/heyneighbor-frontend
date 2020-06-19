import { ReviewActions } from"../actions/review.actions"
require('dotenv').config();
const superagent = require('superagent');
const BACKEND_ROOT = process.env.BACKEND_ROOT;
// const BACKEND_ROOT = 'http://localhost:3005';

// Effects
export function getAllReviewsAPI() {
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/review`).then(data => {
      console.log(data);
      dispatch(ReviewActions.getReviewSuccess(data.body.results))
    }).catch(err => dispatch(ReviewActions.reviewQueryFail(err)))
  }
}
export function getUserReviewsAPI() {
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/userReviews/:id`).then(data => {
      console.log(data);
      dispatch(ReviewActions.getReviewSuccess(data.body.results))
    }).catch(err => dispatch(ReviewActions.reviewQueryFail(err)))
  }
}
export function getUserItemsAPI(ownerId) {
  console.log('getUserItemsAPI called', `${BACKEND_ROOT}/itemByOwner/${ownerId}`)
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/itemByOwner/${ownerId}`)
      .set({
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkFsZXg5OSIsImlhdCI6MTU5MjM2MjU5M30.w8idbipJw5P2pKrzZiwE4DI1I08-C-ixqHXEv0MLMyc'
      })
      .then(data => {
        console.log('data from getUsersItems', data.body);
        dispatch(ReviewActions.getAllItemsSuccess(data.body))
      }).catch(err => dispatch(ReviewActions.itemQueryFail))
  }
}

export function addNewItemAPI() {
  return function (dispatch) {
    return superagent.post(`${BACKEND_ROOT}/item`).then(data => {
      console.log(data);
      dispatch(ReviewActions.addNewItem(data.body.results))
    }).catch(err => dispatch(ReviewActions.itemQueryFail))
  }
}

export function updateItemAPI() {
  return function (dispatch) {
    return superagent.put(`${BACKEND_ROOT}/item/:ITEMid`).then(data => {
      console.log(data)
      dispatch(ReviewActions.updateItem(data.body.results))
    }).catch(err => dispatch(ReviewActions.itemQueryFail))
  }
}

export function removeItemAPI() {
  return function (dispatch) {
    return superagent.delete(`${BACKEND_ROOT}/item/:ITEMid`).then(data => {
      console.log(data)
      dispatch(ReviewActions.removeItem(data.body.results))
    }).catch(err => dispatch(ReviewActions.itemQueryFail))
  }
}
