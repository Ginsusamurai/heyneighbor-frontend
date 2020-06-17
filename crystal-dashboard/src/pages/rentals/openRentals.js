import React, { useEffect, component } from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import { getRentalData } from '../../reducers/rental.js';
import { withRouter } from 'react-router-dom';


const OpenRentals = props => {

  console.log('rentalprops', props);
  useEffect( () => {props.getRentals(props.user._id, props.signup.token)},[]);
  

  return(
    <div>
      <ul>
      {props.rental.map((val,ind) => {
        return <li key={ind}>{val}</li>
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
  getRentals: (_id) => dispatch(getRentalData(_id)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OpenRentals));