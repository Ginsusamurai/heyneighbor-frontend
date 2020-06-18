import React, { useEffect, component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import { getBorrowedRentalData, advanceBorrowedRentalState, getLentRentalData } from '../../reducers/rental.js';
import { withRouter } from 'react-router-dom';


const ArchivedRentals = props => {

  console.log('rentalprops', props);
  useEffect( () => {
    props.getBorrowedRental(props.user._id, props.signup.token);
    props.getRentals(props.user._id, props.signup.token);
  },[]);
  

  return(
    <div>
      Archived Borrowed Requests
      <ul>
      {props.rental.borrowed && props.rental.borrowed.filter((val,ind) => {
        console.log(val);
        if(val.openRental === false){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}>{request.text}</li>
      })}
      </ul>
      Archived Loan Requests
      <ul>
      {props.rental.loan && props.rental.loan.filter((val,ind) => {
        console.log(val.status);
        if(val.openRental === false){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}>{request.text}</li>
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

const advanceAndGet = (rental_id, token, user_id,props) => {
  console.log('inthe special', props);
  props.advanceBorrowRental(rental_id, token,user_id);
  props.getBorrowedRental(user_id, token);
}

const mapDispatchToProps = (dispatch) => ({
  getRentals: (_id) => dispatch(getLentRentalData(_id)),
  advanceBorrowRental: (_id, token, owner) => dispatch(advanceBorrowedRentalState(_id, token, owner)),
  getBorrowedRental: (_id,token) => dispatch(getBorrowedRentalData(_id,token)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArchivedRentals));