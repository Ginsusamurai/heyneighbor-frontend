require('dotenv').config();

const superagent = require('superagent');
const BACKEND_ROOT = process.env.BACKEND_ROOT;
console.log('backend', BACKEND_ROOT);

let initialState = [{
  _owner:'12345',
  item:'hammer',
  type:'tool',
  documentation:'hammers.com',
  subCategory:'hand',
  description:'everything is a nail now',
  image:'hammer.jpg',
  active:true,
  _custodyId:'12345',
}];
// const initialState = [];
// initialState.push(anItem);


export default function reducer (state = [...initialState], action ){
  let {type, payload} = action;

  switch(type){
    case "GET ITEMS":{
      let state = [...payload];
      return { state };
    }
    default:
      return state;
  }
}

export const getAction = payload => {
  return {
    type: "GET ITEMS",
    payload: payload
  }
}

export const getRemoteData = (endpoint) => dispatch => {
  return superagent.get(`${BACKEND_ROOT}/${endpoint}`)
    .then(data => {
      dispatch(getAction(data.body.results));
    })
}