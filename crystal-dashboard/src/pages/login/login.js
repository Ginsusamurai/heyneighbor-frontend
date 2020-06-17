import React, { useEffect, component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import { withRouter } from 'react-router-dom';
import { loginUser, saveMyUser, saveToken } from '../../reducers/user';

const Login = props => {

  console.log('login props', props, props.signup, cookie.load('token'));
  // if(props.signup === {} && cookie.load('token')){
  //   console.log('this is true');
  //   props.saveTheToken(cookie.load('token'));
  //   props.getUser(cookie.load('token'));
  // }


  useEffect(() => { props.saveTheToken(cookie.load('token')) }, []);
  useEffect(() => { props.getUser(cookie.load('token')) }, []);

  return (

    <span>hello</span>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));