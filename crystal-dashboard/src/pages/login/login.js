import React, { useEffect, component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import { loginUser, saveMyUser, saveToken } from '../../reducers/user';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
require('dotenv').config();

const superagent = require('superagent');
const base64 = require('base-64');
const BACKEND_ROOT = process.env.BACKEND_ROOT;

let Login = props => {
  const { submitting, submitForm, state } = props;
  console.log('login props', props, props.signup, cookie.load('token'));
  // if(props.signup === {} && cookie.load('token')){
  //   console.log('this is true');
  //   props.saveTheToken(cookie.load('token'));
  //   props.getUser(cookie.load('token'));
  // }

  const handleSubmit = e => {
    e.preventDefault();
    const basic = base64.encode(`${e.target.userName.value}:${e.target.password.value}`);
    superagent
      .post(`${BACKEND_ROOT}/signin`)
      .set('Authorization', `Basic ${basic}`)
      .then(result => {
        console.log('-----result------', result)
      })
  }

  useEffect(() => { props.saveTheToken(cookie.load('token')) }, []);
  useEffect(() => { props.getUser(cookie.load('token')) }, []);

  return (
    <div className="card">
      <div className="header">
        <h4>Log In</h4>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="control-label">Username</label>
            <Field
              name="userName"
              type="text"
              required="true"
              component={renderField} />
          </div>

          <div className="form-group">
            <label className="control-label">password</label>
            <Field
              name="password"
              type="password"
              required="true"
              component={renderField} />
          </div>

          <button type="submit" className="btn btn-fill btn-info" disabled={submitting}>Log in</button>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  signup: state.signup,
});

const mapDispatchToProps = (dispatch) => ({
  saveTheToken: (token) => dispatch(saveToken(token)),
  getUser: (token) => dispatch(loginUser(token)),
})


Login = connect(mapStateToProps, mapDispatchToProps)(Login);

export default reduxForm({ form: 'Login' })(Login);