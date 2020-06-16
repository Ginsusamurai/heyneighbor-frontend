import React from 'react';
import { Route } from 'react-router-dom';
import Signup from './signup.js';
import getRemoteData from '../../reducers/signup';
import { connect } from 'react-redux';

const Forms = ({match}) => (
  <div className="content">
    <div className="container-fluid">
      {/* <Signup  /> */}
      {console.log('match', match)}
      <Route path={`/signup`} render={props => {
        return <Signup {...props} onSubmit={values => alert(JSON.stringify(values, null, 2))}/>
      }} />      
    </div>
  </div>
);

// const mapStateToProps = state => ({
//   signup: state.signup,
// })

// const mapDispatchToProps = (dispatch) => ({
//   signUpAction: () => dispatch(getRemoteData()),
// })


export default Forms;