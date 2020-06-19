import React, { useEffect, component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import { getBorrowedRentalData, advanceBorrowedRentalState } from '../../reducers/rental.js';
import { withRouter } from 'react-router-dom';


const OpenBorrowed = props => {

  console.log('rentalprops', props);
  useEffect( () => {props.getBorrowedRental(props.user._id, props.signup.token)},[]);
  

  return(
    <div>
      <h4 className="text-primary">Borrow Requests</h4>
      <ul>
      {props.rental.borrowed && props.rental.borrowed.filter((val,ind) => {
        console.log(val.status);
        if(val.status === '1-borrowRequest' && val.openRental === true){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}><h5 className='text-info'>{request.text}</h5></li>
      })}
      </ul>
      <h4 className="text-primary">Currently Borrowed</h4>
      <ul>
      {props.rental.borrowed && props.rental.borrowed.filter((val,ind) => {
        if(val.status === '2-borrowApproved' && val.openRental === true){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}><h5 className='text-info'>{request.text}<button className='btn btn-fill btn-primary btn-marg-l' id={request.rental_id} onClick={() => advanceAndGet(request.rental_id, props.signup.token,props.user._id, props)}>Picked Up</button></h5></li>
      })}
      </ul>
      <h4 className="text-primary">Ropping Off</h4>
      <ul>
      {props.rental.borrowed && props.rental.borrowed.filter((val,ind) => {
        if(val.status === '3-returnOffer' && val.openRental === true){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}><h5 className='text-info'>{request.text}<button className='btn btn-fill btn-primary btn-marg-l' id={request.rental_id} onClick={() => advanceAndGet(request.rental_id, props.signup.token,props.user._id, props)}>Returned</button></h5></li>
      })}
      </ul>
      <h4 className="text-primary">Return To Be Acknowledged</h4>
      <ul>
      {props.rental.borrowed && props.rental.borrowed.filter((val,ind) => {
        if(val.status === '4-returnAck' && val.openRental === true){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}><h5 className='text-info'>{request.text}</h5></li>
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
  advanceBorrowRental: (_id, token, owner) => dispatch(advanceBorrowedRentalState(_id, token, owner)),
  getBorrowedRental: (_id,token) => dispatch(getBorrowedRentalData(_id,token)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OpenBorrowed));