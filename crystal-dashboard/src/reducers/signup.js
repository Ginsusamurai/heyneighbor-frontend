require('dotenv').config();
console.log('dirnname', __dirname, process.cwd());
console.log(process.env);

const superagent = require('superagent');
const BACKEND_ROOT = process.env.BACKEND_ROOT;
const SIGNUP_ENDPOINT = process.env.SIGNUP_ENDPOINT;

export default function reducer(state = {}, action) {
  let {type, payload} = action;


  switch(type){
    case "SAVE TOKEN":{
      let state = {...state};
      state.token = payload;
      return state;
    }

    default:
      return state;

  }


}

export const createUser = (formData) => dispatch => {
  return superagent
          .post(`${BACKEND_ROOT}/${SIGNUP_ENDPOINT}`)
          .send(formData)
          .then( results => {
            dispatch(saveToken(results.text))
          })
          .catch(e => {
            alert(e);
            console.log(e);
          });

  // console.table(formData);
  // console.log(BACKEND_ROOT, SIGNUP_ENDPOINT);
  // console.log('GOT REMOTE!');
  // let token;
  // superagent
  //       .post(`${BACKEND_ROOT}/${SIGNUP_ENDPOINT}`)
  //       .send(formData)
  //       .then(results => {
  //         console.log(results);
  //         return results.text;
  //       })
  //       .catch(e =>
  //         console.log('signup reducer', e)
  //       )
  // superagent
  //   .get(`${BACKEND_ROOT}/getMyUser`)
  //   .set('Authorization', `Bearer ${token}`)
  //   .then( results => {
  //     console.log(results)
  //     dispatch(populateUser(results));
  //   })
  //   .catch(e => {
  //     console.log('populate user', e)
  //   })

  // .get(`${BACKEND_ROOT}/${SIGNUP_ENDPOINT}`)
  //   .then(data => {
  //     dispatch(getAction(data.body.results));
  //   });
}

export const saveToken = payload => {
  return {
    type:"SAVE TOKEN",
    payload:payload,
  }
}