import React, { useEffect, component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import { getLentRentalData, advanceLoanRentalState } from '../../reducers/rental.js';
import { withRouter } from 'react-router-dom';
import { saveMyUser } from '../../reducers/user.js';


const OpenRentals = props => {

  console.log('rentalprops', props);

  useEffect( () => {
    let user = cookie.load('user', true);
    console.log('cookie user', user);
    user && props.saveUser(user);
  },[props.rental])

  useEffect( () => {props.getRentals(props.user._id, props.signup.token)},[props.signup]);
  
  // useEffect( () => {
  //   let token = cookie.load('token');
  //   let user = props.user ? props.user : null;
    
    
  // },[])

  return(
    <div>
      Loaned
      Requests
      <ul>
      {props.rental.loan && props.rental.loan.filter((val,ind) => {
        console.log(val.status);
        if(val.status === '1-borrowRequest'){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}>{request.text}<button id={request.rental_id} onClick={() => props.advanceRentalState(request.rental_id, props.signup.token,props.user._id)}>Approve</button></li>
      })}
      </ul>
      Currently Borrowed
      <ul>
      {props.rental.loan && props.rental.loan.filter((val,ind) => {
        if(val.status === '2-borrowApproved'){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}>{request.text}</li>
      })}
      </ul>
      Returned Offered
      <ul>
      {props.rental.loan && props.rental.loan.filter((val,ind) => {
        if(val.status === '3-returnOffer'){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}>{request.text}</li>
      })}
      </ul>
      Acknowledged Return
      <ul>
      {props.rental.loan && props.rental.loan.filter((val,ind) => {
        if(val.status === '4-returnAck'){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}>{request.text}<button id={request.rental_id} onClick={() => props.advanceRentalState(request.rental_id, props.signup.token,props.user._id)}>Approve</button></li>
      })}
      </ul>
    </div>
  )

}

const mapStateToProps = state => ({
  user: state.user,
  signup: state.signup,
  rental: state.rental,
})

const mapDispatchToProps = (dispatch) => ({
  getRentals: (_id) => dispatch(getLentRentalData(_id)),
  advanceRental: (_id, token, owner) => dispatch(advanceLoanRentalState(_id, token, owner)),
  saveUser: (payload) => dispatch(saveMyUser(payload)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OpenRentals));