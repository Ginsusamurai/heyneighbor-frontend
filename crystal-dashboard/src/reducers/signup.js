require('dotenv').config();

const superagent = require('superagent');
const BACKEND_ROOT = process.env.BACKEND_ROOT;
const SIGNUP_ENDPOINT = process.env.SIGNUP_ENDPOINT;


export default function reducer(state = {}, action) {
  let { type, payload } = action;


  switch (type) {
    case "LOG IN": {

    }

    default:
      return state;

  }


}

export const getRemoteData = (formData) => dispatch => {
  let data = {}

  console.log('GOT REMOTE!');
  // return superagent
  //       .post(`${BACKEND_ROOT}/${SIGNUP_ENDPOINT}`)


  // .get(`${BACKEND_ROOT}/${SIGNUP_ENDPOINT}`)
  //   .then(data => {
  //     dispatch(getAction(data.body.results));
  //   });
}