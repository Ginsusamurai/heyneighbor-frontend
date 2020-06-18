import {
  ItemActions
} from "../"

require('dotenv').config();

const superagent = require('superagent');
// const BACKEND_ROOT = process.env.BACKEND_ROOT;
const BACKEND_ROOT = 'http://localhost:3005';

// Effects
export function getAllItemsAPI() {
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/item`).then(data => {
      console.log(data);
      dispatch(ItemActions.getAllItemsSuccess(data.body.results))
    }).catch(err => dispatch(ItemActions.itemQueryFail(err)))
  }
}

export function getItemAPI() {
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/item/:ITEMid`).then(data => {
      console.log(data);
      dispatch(ItemActions.getItemSuccess(data.body.results))
    }).catch(err => dispatch(ItemActions.itemQueryFail(err)))
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
        dispatch(ItemActions.getAllItemsSuccess(data.body))
      }).catch(err => dispatch(ItemActions.itemQueryFail))
  }
}

export function addNewItemAPI() {
  return function (dispatch) {
    return superagent.post(`${BACKEND_ROOT}/item`).then(data => {
      console.log(data);
      dispatch(ItemActions.addNewItem(data.body.results))
    }).catch(err => dispatch(ItemActions.itemQueryFail))
  }
}

export function updateItemAPI() {
  return function (dispatch) {
    return superagent.put(`${BACKEND_ROOT}/item/:ITEMid`).then(data => {
      console.log(data)
      dispatch(ItemActions.updateItem(data.body.results))
    }).catch(err => dispatch(ItemActions.itemQueryFail))
  }
}

export function removeItemAPI() {
  return function (dispatch) {
    return superagent.delete(`${BACKEND_ROOT}/item/:ITEMid`).then(data => {
      console.log(data)
      dispatch(ItemActions.removeItem(data.body.results))
    }).catch(err => dispatch(ItemActions.itemQueryFail))
  }
}
