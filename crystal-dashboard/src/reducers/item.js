require('dotenv').config();

const superagent = require('superagent');
const BACKEND_ROOT = process.env.BACKEND_ROOT;

/**
 * interface Tool {
 *  _owner: string
 *  item: string
 *  type: string
 *  documentation: string
 *  subCategory: string
 *  description: string
 *  image: string
 *  active: boolean
 *  _custodyId: string
 *
 * }
 */

let initialState = {
  isLoading: false,
  selectedItemId: null, // will be a string
  error: null,
  items: [],
};
// const initialState = [];
// initialState.push(anItem);


export default function reducer(state = initialState, {
  type,
  payload
}) {
  switch (type) {
    case "GET ALL ITEMS SUCCESS":

      // filter out items that already exist
      // const items = Object.entries([...state.items, ...payload].reduce((itemsAcc, item) => {
      //   if (!itemsAcc[item._id]) {
      //     return {...itemsAcc, [item._id]: item }
      //   } else {
      //   return itemsAcc
      // }
      // }, {}))
      return {
        ...state, items: [...state.items, ...payload], isLoading: false
      };
    case "ITEM QUERY FAIL":
      console.log(payload, "Error Message")
      return state;

    // Get a specific item with ITEMid
    case "GET ITEM":

      return {
        ...state, selectedItemId: payload
      };
    // Get specific items based on OWNERid
    case "GET USER ITEMS":
      return {
        ...state,
      };
    // Create a new item
    case "ADD NEW ITEM":
      return {
        ...state,
      };
    // Update an item by ID
    case "UPDATE ITEM":
      return {
        ...state,
      };
    // remove an item by ID
    case "REMOVE ITEM":
      return {
        ...state,
      };
    default:
      return state;
  }
}

// ACTIONS
// Alternate way of writing actions
//export const getItem = (itemID) => {
//  return {
//    type = "GET ITEM",
//    payload = itemID
//  }
//}
export const getAllItems = () => ({
  type: "GET ALL ITEMS",
})
export const getAllItemsSuccess = (items) => ({
  type: "GET ALL ITEMS SUCCESS",
  payload: items
})
export const itemQueryFail = (error) => ({
  type: "ITEM QUERY FAIL",
  payload: error
})
export const getItem = (itemID) => ({
  type: "GET ITEM",
  payload: itemID
});

export const getItemSuccess = (item) => ({
  type: "GET ITEM SUCCESS",
  payload: item
})

export const getUserItems = (ownerID) => ({
  type: "GET USER ITEMS",
  payload: ownerID
})

export const addNewItem = (newItem) => ({
  type: "ADD NEW ITEM",
  payload: newItem
});

export const addNewItemSuccess = (newItemFromDb) => ({
  type: "ADD NEW ITEM SUCCESS",
  payload: newItemFromDb
});

export const updateItem = (item) => ({
  type: "UPDATE ITEM",
  payload: item
})

export const removeItem = (itemID) => ({
  type: "REMOVE ITEM",
  payload: itemID
})

// Effects
export function getAllItemsAPI() {
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/item`).then(data => {
      console.log('-----data.body----', data.body);
      dispatch(getAllItemsSuccess(data.body))
    }).catch(err => dispatch(itemQueryFail(err)))
  }
}

export function getItemAPI() {
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/item/:ITEMid`).then(data => {
      // console.log('-----data-----', data.body);
      dispatch(getItemSuccess(data.body.results))
    }).catch(err => dispatch(itemQueryFail(err)))
  }
}

export function getUserItemsAPI(ownerId, token) {
  console.log('getUserItemsAPI called', `${BACKEND_ROOT}/itemByOwner/${ownerId}`)
  return function (dispatch) {
    return superagent.get(`${BACKEND_ROOT}/itemByOwner/${ownerId}`)
      .set({
        'Authorization': `Bearer ${token}`
      })
      .then(data => {
        console.log('data from getUsersItems', data.body);
        dispatch(getAllItemsSuccess(data.body));
      }).catch(err => dispatch(itemQueryFail))
  }
}

export function addNewItemAPI() {
  return function (dispatch) {
    return superagent.post(`${BACKEND_ROOT}/item`).then(data => {
      console.log(data);
      dispatch(addNewItem(data.body.results))
    }).catch(err => dispatch(itemQueryFail))
  }
}

export function updateItemAPI() {
  return function (dispatch) {
    return superagent.put(`${BACKEND_ROOT}/item/:ITEMid`).then(data => {
      console.log(data)
      dispatch(updateItem(data.body.results))
    }).catch(err => dispatch(itemQueryFail))
  }
}

export function removeItemAPI() {
  return function (dispatch) {
    return superagent.delete(`${BACKEND_ROOT}/item/:ITEMid`).then(data => {
      console.log(data)
      dispatch(removeItem(data.body.results))
    }).catch(err => dispatch(itemQueryFail))
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