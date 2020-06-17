require('dotenv').config();

const superagent = require('superagent');
const BACKEND_ROOT = process.env.BACKEND_ROOT;

export default function reducer (state = [], action){
  let {type, payload} = action;

  switch(type){
    case "GET RENTALS":{
      let state = payload;
      return state;
    }
    default:
      return state;
  }
}

export const myLentItems = payload => {
  return {
    type: "GET RENTALS",
    payload: payload,
  }
}

export const getRentalData = (_id,token) => dispatch => {
  return superagent.get(`${BACKEND_ROOT}/rentaldoc_pretty`)
    .set('Authorization', `Bearer ${token}`)
    .then(data => {
      dispatch(myLentItems(data.body));
    })
    .catch(e =>{
      console.log('rental get fail', e);
    })

}