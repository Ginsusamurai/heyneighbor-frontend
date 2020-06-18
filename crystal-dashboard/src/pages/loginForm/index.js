import React from 'react';
import LoginForm from './loginForm.js';
import { Route } from 'react-router-dom';

let Forms = ({ match }) => (
  <div className="content">
    <div className="container-fluid">
      <Route path={`/login`} render={props => {
        return <LoginForm {...props} onSubmit={values => alert(JSON.stringify(values, null, 2))} />
      }} />
    </div>
  </div>
);

export default Forms;