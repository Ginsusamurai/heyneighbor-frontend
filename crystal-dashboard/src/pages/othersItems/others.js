import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllItemsAPI } from '../../reducers/item.js';

let Others = props => {
  // getting all items
  useEffect(() => { props.getAllItems() }, []);

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
                      return (
                        <div key={item._id}>
                          <h3>{item.item}</h3>
                          <img src={item.image} alt="tool" />
                          <p>{item.type}</p>
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
  token: state.signup.token
});

const mapDispatchToProps = (dispatch) => ({
  getAllItems: () => dispatch(getAllItemsAPI()),
  // getUserItems: (userId, token) => dispatch(getUserItemsAPI(userId, token))
})

export default connect(mapStateToProps, mapDispatchToProps)(Others);