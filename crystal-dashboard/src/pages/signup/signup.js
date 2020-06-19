/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect, dispatch } from 'react-redux';
import renderField from 'components/FormInputs/renderField';
import { createUser } from '../../reducers/signup';
import { withRouter } from 'react-router-dom';

require('dotenv').config();


const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  }
  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password2.length < 6) {
    errors.password2 = 'Must be 6 characters or more';
  }
  return errors;
};

var Signup = props => {
  const { submitting,
    // handleSubmit,
    submitForm, state } = props;
  // console.log('signupProps', props);

  function handleSubmit(e) {
    e.preventDefault();
    console.log('myPROPS!', props);
    if (e.target.password.value !== e.target.password2.value) {
      alert('Passwords do not match');
      return;
      // throw new Error("Passwords do not match");
    }
    let formData = {
      email: e.target.email.value,
      userName: e.target.userName.value,
      password: e.target.password.value,
      address: e.target.address.value,
    }
    // console.log(formData);
    props.doSignup(formData);
  }



  return (
    <div className="card">
      <div className="header">
        <h4>Sign Up</h4>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="control-label">Email</label>
            <Field
              name="email"
              type="email"
              required="true"
              component={renderField} />
          </div>

          <div className="form-group">
            <label className="control-label">Address</label>
            <Field
              name="address"
              type="text"
              required="true"
              component={renderField} />
          </div>

          <div className="form-group">
            <label className="control-label">Username</label>
            <Field
              name="userName"
              type="text"
              required="true"
              component={renderField} />
          </div>

          <div className="form-group">
            <label className="control-label">Password</label>
            <Field
              name="password"
              type="password"
              required="true"
              component={renderField} />
          </div>

          <div className="form-group">
            <label className="control-label">Confirm Password</label>
            <Field
              name="password2"
              type="password"
              required="true"
              component={renderField} />
          </div>

          <button type="submit" className="btn btn-fill btn-info" disabled={submitting}>Submit</button>
        </form>

        <a id="oauth" href="#"><button className="btn btn-fill btn-info" onClick={google}>Login with Google</button></a>    </div>
    </div>
  )
};


function google() {
  let url = 'https://accounts.google.com/o/oauth2/v2/auth';

  console.log(process.env);
  let query = {
    client_id: '444667393820-6rpjjjaepv6lu63oecpe61e6698bd01s.apps.googleusercontent.com',
    redirect_uri: `${process.env.BACKEND_ROOT}/oauth`,
    // redirect_uri: 'http://localhost:3000/oauth',
    scope: 'https://www.googleapis.com/auth/drive.metadata.readonly',
    state: 'path-through value',
    include_granted_scopes: 'true',
    response_type: 'code',
  }

  let qs = Object.keys(query).map((val) => {
    return `${val}=` + encodeURIComponent(query[val])
  }).join('&');

  let formattedURL = `${url}?${qs}`;
  let link = document.getElementById('oauth');

  link.setAttribute('href', formattedURL);
}

function handleSubmit(e) {
  e.preventDefault();
  if (e.target.password.value !== e.target.password2.value) {
    alert('Passwords do not match');
    return;
    // throw new Error("Passwords do not match");
  }
  let formData = {
    email: e.target.email.value,
    userName: e.target.userName.value,
    password: e.target.password.value,
    address: e.target.address.value,
  }
  console.log(formData);
  // props.signup(formData);
}

const mapStateToProps = state => ({
  signupState: state.signup,
  authState: state.Auth
})

const mapDispatchToProps = (dispatch) => ({
  doSignup: (userDetails) => dispatch(createUser(userDetails)),

})


// Signup = reduxForm({form: 'Signup',validate})(Signup)
Signup = connect(mapStateToProps, mapDispatchToProps)(Signup);


export default withRouter(reduxForm({ form: 'Signup', validate })(Signup));

// export default reduxForm({form: 'Signup',validate})(Signup);
