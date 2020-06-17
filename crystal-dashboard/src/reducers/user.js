import cookie from 'react-cookies';

require('dotenv').config();
console.log(process.env);

const superagent = require('superagent');
const BACKEND_ROOT = process.env.BACKEND_ROOT;
const LOGGEDIN_ENDPOINT = process.env.LOGGEDIN_ENDPOINT;

export default function reducer(state = {}, action) {
  let {type, payload} = action;


  switch(type){
    // case "SAVE TOKEN":{
    //   console.log('user', payload);
    //   let state = {...state};
    //   state.token = payload;
    //   return state;
    // }
    case "SAVE MY USER": {
      let state = JSON.parse(payload);
      return state;
    }
    default:
      return state;

  }


}

export const loginUser = (token) => dispatch => {
  return superagent
          .get(`${BACKEND_ROOT}/getMyUser`)
          .set('Authorization', `Bearer ${token}`)
          .then( results => {
            dispatch(saveMyUser(results.text))
          })
          .catch(e => {
            alert(e);
            console.log(e);
          });
  
  
}

export const saveMyUser = payload => {
  return {
    type:"SAVE MY USER",
    payload: payload,
  }
}

export const saveToken = payload => {
  return {
    type:"SAVE TOKEN",
    payload:payload,
  }
}