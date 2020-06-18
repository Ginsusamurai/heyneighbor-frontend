import React, { useEffect, component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import { getBorrowedRentalData, advanceBorrowedRentalState } from '../../reducers/rental.js';
import { withRouter } from 'react-router-dom';


const OpenBorrowed = props => {

  console.log('rentalprops', props);
  useEffect( () => {props.getRentals(props.user._id, props.signup.token)},[props.signup]);
  

  return(
    <div>
      Borrowed
      Requests
      <ul>
      {props.rental.borrowed.map((val,ind) => {
        return <li key={ind}>1ish {val.text}</li>
      })}
      {props.rental.borrowed.filter((val,ind) => {
        console.log(val.status);
        if(val.status === '1-borrowRequest'){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}>{request.text}</li>
      })}
      </ul>
      Currently Borrowed
      <ul>
      {props.rental.borrowed.filter((val,ind) => {
        if(val.status === '2-borrowApproved'){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}>{request.text}<button id={request.rental_id} onClick={() => props.advanceRental(request.rental_id, props.signup.token,props.user._id)}>Approve</button></li>
      })}
      </ul>
      Returned Offered
      <ul>
      {props.rental.borrowed.filter((val,ind) => {
        if(val.status === '3-returnOffer'){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}>{request.text}<button id={request.rental_id} onClick={() => props.advanceRental(request.rental_id, props.signup.token,props.user._id)}>Approve</button></li>
      })}
      </ul>
      Acknowledged Return
      <ul>
      {props.rental.borrowed.filter((val,ind) => {
        if(val.status === '4-returnAck'){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}>{request.text}<button id={request.rental_id}>Approve</button></li>
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
  getRentals: (_id) => dispatch(getBorrowedRentalData(_id)),
  advanceRental: (_id, token, owner) => dispatch(advanceBorrowedRentalState(_id, token, owner)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OpenBorrowed));