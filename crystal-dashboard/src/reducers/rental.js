require('dotenv').config();

const superagent = require('superagent');
const BACKEND_ROOT = process.env.BACKEND_ROOT;

export default function reducer (state = [{dog:'yes'}], action){
  let {type, payload} = action;

  switch(type){
    case "GET LOANS":{
      console.log('raw', payload, state);
      // let state = JSON.parse(JSON.stringify(state));
      // console.log('next state', state);
      state.loan = payload;
      return state;
    }
    case "GET BORROWED":{
      // let state = JSON.parse(JSON.stringify(state));
      state.borrowed = payload;
      console.log(state);
      return state;
    }
    case "ADVANCE RENTAL":{
      return state;
    }
    default:
      return state;
  }
}

export const myLentItems = payload => {
  return {
    type: "GET LOANS",
    payload: payload,
  }
}

export const advanceRental = () => {
  return {
    type: "ADVANCE RENTAL",
  }
}

export const myBorrowedItems = payload => {
  return {
    type: "GET BORROWED",
    payload: payload,
  }
}

export const advanceLoanRentalState = (_id, token, owner) => dispatch => {
  return superagent.put(`${BACKEND_ROOT}/rentaldoc/${_id}`)
    .set('Authorization', `Bearer ${token}`)
    .then( data => {
      dispatch(advanceRental());
      superagent.get(`${BACKEND_ROOT}/myLentItems/${_id}`)
        .set('Authorization', `Bearer ${token}`)
        .then(data => {
          dispatch(myLentItems(data.body));
        })
        .catch(e =>{
          console.log('rental get fail', e);
        })
    })
    .catch(e => {
      console.log('advanceRental', e);
    })
}

export const advanceBorrowedRentalState = (_id, token, owner) => dispatch => {
  return superagent.put(`${BACKEND_ROOT}/rentaldoc/${_id}`)
    .set('Authorization', `Bearer ${token}`)
    .then( data => {
      dispatch(advanceRental());
      superagent.get(`${BACKEND_ROOT}/myBorrowedItems/${_id}`)
        .set('Authorization', `Bearer ${token}`)
        .then(data => {
          dispatch(myLentItems(data.body));
        })
        .catch(e =>{
          console.log('rental get fail', e);
        })
    })
    .catch(e => {
      console.log('advanceRental', e);
    })
}

export const getBorrowedRentalData = (_id, token) => dispatch => {
  return superagent.get(`${BACKEND_ROOT}/borrowingItems/${_id}`)
    .set('Authorization', `Bearer ${token}`)
    .then(data => {
      dispatch(myBorrowedItems(data.body));
    })
    .catch(e =>{
      console.log('borrowed rental get fail', e);
    })
}

export const getLentRentalData = (_id,token) => dispatch => {
  return superagent.get(`${BACKEND_ROOT}/myLentItems/${_id}`)
    .set('Authorization', `Bearer ${token}`)
    .then(data => {
      dispatch(myLentItems(data.body));
    })
    .catch(e =>{
      console.log('loaned rental get fail', e);
    })

}