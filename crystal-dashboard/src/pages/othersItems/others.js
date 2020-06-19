import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllItemsAPI } from '../../reducers/item.js';
import { rentalCreate } from '../../reducers/rental.js';
import { Link } from 'react-router-dom';

let Others = props => {
  // getting all items
  useEffect(() => { props.getAllItems() }, []);
  console.log('others props', props);
  return (
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4 className="title">Items you can borrow</h4>
              </div>
              <div className="content all-icons">
                <div className="row">
                  {props.items.items.map((item) => {
                    if (item._owner !== props.ownerId) {
                      console.log('item', item);
                      return (
                        <div key={item._id}>
                          <h3>{item.item}</h3>
                          <img src={item.image} alt="item" class="imageSize"/>
                          <p>{item.type}
                          <Link to="/rentals/borrowed">
                            <button
                            visibility={item._custodyId === item._owner ? 'visible' : 'hidden'} 
                            className="btn btn-fill btn-primary btn-sm btn-marg-l"
                            onClick={() => props.createRental(props.signup.token, props.user._id, item._owner, item._id)}>
                            Request Borrow
                          </button>
                          </Link>
                          </p>
                        </div>
                      )
                    }
                  }
                  )}
                </div>
                {/* <button onClick={handleGetUserItems}>Get the items</button>
                <button onClick={handleGetAllItems}>Get aLL the items</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = state => ({
  items: state.items,
  ownerId: state.user._id,
  token: state.signup.token,
  signup: state.signup,
  user: state.user,
  rental: state.rental,
});

const mapDispatchToProps = (dispatch) => ({
  createRental: (token, borrower_id, owner_id, item_id) => {
    console.log('in props', token, borrower_id, owner_id, item_id)
    dispatch(rentalCreate(token, borrower_id, owner_id, item_id))},
  getAllItems: () => dispatch(getAllItemsAPI()),
  // getUserItems: (userId, token) => dispatch(getUserItemsAPI(userId, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Others);