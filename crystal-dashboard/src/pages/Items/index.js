import React from 'react';
import { connect } from 'react-redux';
import {getUserItemsAPI } from '../../reducers/item.js';

const TEST_USER_ID = "5ebdacde2958a28b90e76de8"

const Items = (props) => {
console.log('props from Items component', props)

    return (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="header">
              <h4 className="title">All of your items</h4>
            </div>
            <div className="content all-icons">
              <div className="row">
                {/* { iconData.map(iconName => (
                  <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6" key={iconName}>
                    <div className="font-icon-detail"><i className={iconName}></i>
                      <input type="text" defaultValue={iconName} />
                    </div>
                  </div>
                ))} */}
                {props.items.map((item, idx) => <div><h3>{item.item}</h3><p>{item.type}</p></div>)}
              </div>
              <button onClick={() => props.getUsersItems(TEST_USER_ID)}>Get the items</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)};

const mapStateToProps = state => {
    console.log('state.item.items', state.item.items)
    return ({
    items: state.item.items,
  })}

const mapDispatchToProps = (dispatch) => ({
    getUsersItems: (userId) => dispatch(getUserItemsAPI(userId))
  })


export default connect(mapStateToProps, mapDispatchToProps)(Items);