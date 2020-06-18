import React from 'react';
import { connect } from 'react-redux';
import { loginUser, saveToken } from '../../reducers/user';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import cookie from 'react-cookies';
require('dotenv').config();

const superagent = require('superagent');
const base64 = require('base-64');
const BACKEND_ROOT = process.env.BACKEND_ROOT;


let LoginForm = props => {
  const { submitting } = props;

  const handleSubmit = e => {
    e.preventDefault();
    const basic = base64.encode(`${e.target.userName.value}:${e.target.password.value}`);
    superagent
      .post(`${BACKEND_ROOT}/signin`)
      .set('Authorization', `Basic ${basic}`)
      .then(result => {
        console.log(result);
        props.saveTheToken(result.text);
        props.getUser(result.text);
        cookie.save('token', result.text);
        cookie.save('_id', 'hello');
      })
  }

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


LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default reduxForm({ form: 'LoginForm' })(LoginForm);