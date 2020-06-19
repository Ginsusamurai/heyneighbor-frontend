import React, { useEffect, component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import { getLentRentalData, advanceLoanRentalState, deactivateRental, endRental} from '../../reducers/rental.js';
import { withRouter } from 'react-router-dom';
import { saveMyUser } from '../../reducers/user.js';


const OpenRentals = props => {

  console.log('rentalprops', props);

  useEffect( () => {
    let user = cookie.load('user', true);
    console.log('cookie user', user);
    user && props.saveUser(user);
  },[props.rental])

  useEffect( () => {props.getRentals(props.user._id, props.signup.token)},[]);
  
  // useEffect( () => {
  //   let token = cookie.load('token');
  //   let user = props.user ? props.user : null;
    
    
  // },[])

  return(
    <div>
      <h4 className="text-primary">Loaned Requests</h4>
      <ul>
      {props.rental.loan && props.rental.loan.filter((val,ind) => {
        console.log(val.status);
        if(val.status === '1-borrowRequest' && val.openRental === true){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}><h5 className='text-primary'>{request.text}<button 
        className='btn btn-fill btn-primary' 
        id={request.rental_id} 
        onClick={
          () => advanceAndGet(request.rental_id, props.signup.token,props.user._id, props)}>
          Approve</button><button className='btn btn-fill btn-danger ' id={request.rental_id} onClick={() => cancelAndGet(request.rental_id, props.signup.token, props.user._id, props)}>Reject</button></h5></li>
      })}
      </ul>
      <h4 className="text-primary">Currently Borrowed</h4>
      <ul>
      {props.rental.loan && props.rental.loan.filter((val,ind) => {
        if(val.status === '2-borrowApproved' && val.openRental === true){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}><h5 className='text-primary'>{request.text}</h5></li>
      })}
      </ul>
      <h4 className="text-primary">Returned Offered</h4>
      <ul>
      {props.rental.loan && props.rental.loan.filter((val,ind) => {
        if(val.status === '3-returnOffer' && val.openRental === true){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}><h5 className='text-primary'>{request.text}</h5></li>
      })}
      </ul>
      <h4 className="text-primary">Acknowledged Return</h4>
      <ul>
      {props.rental.loan && props.rental.loan.filter((val,ind) => {
        if(val.status === '4-returnAck' && val.openRental === true){
          return val;
        }
      }).map((request,index) => {  
        return <li key={index}><h5 className='text-primary'>{request.text}<button className='btn btn-fill btn-primary' id={request.rental_id} onClick={() => advanceAndGet(request.rental_id, props.signup.token,props.user._id, props)}>Received</button></h5></li>
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
  console.log('inthe special', rental_id, token, user_id, props);
  props.advanceLoanRental(rental_id, token, user_id);
  props.getRentals(user_id, token);
}

const cancelAndGet = (rental_id, token, owner_id, props) => {
  props.endRental(rental_id, token, owner_id);
  props.getRentals(owner_id, token);
}

const mapDispatchToProps = (dispatch) => ({
  advanceLoanRental: (_id, token, owner) => dispatch(advanceLoanRentalState(_id, token, owner)),
  getRentals: (_id, token) => dispatch(getLentRentalData(_id, token)),
  saveUser: (payload) => dispatch(saveMyUser(payload)),
  endRental: (rental_id, token, owner_id) => dispatch(deactivateRental(rental_id, token,owner_id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OpenRentals));