import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
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

const Signup = ({
  submitting,
  // handleSubmit,
  submitForm
}) => (
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

      <a id="oauth" href="#">Login with Google</a>
    </div>
  </div>
);


function google(){
  let url = 'https://accounts.google.com/o/oauth2/v2/auth';

  let query = {
    client_id: '444667393820-6rpjjjaepv6lu63oecpe61e6698bd01s.apps.googleusercontent.com',
    // redirect_url:process.env.REDIRECT_URI,
    redirect_uri: 'http://localhost:3001/oauth',
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

function handleSubmit(e){
  e.preventDefault();
  if(e.target.password !== e.target.password2){
    alert('Passwords do not match');
    return;
    // throw new Error("Passwords do not match");
  }

}

export default reduxForm({
  form: 'Signup',
  validate
})(Signup)