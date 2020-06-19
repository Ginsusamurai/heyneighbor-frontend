import {selectAllItems, getAllItemsAPI, getItemAPI, getUserItemsAPI, addNewItemAPI, updateItemAPI, updateItemAPI, removeItemAPI} from "../../reducers/item.js";
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
const TEST_USER_ID = "5ebdacde2958a28b90e76de8"
const Items = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(state => {
    console.log(state);
    return selectAllItems(state.items)
  })
  
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
                  {items.map((item) => <div key={item._id}><h3>{item.item}</h3><p>{item.type}</p></div>)}
                </div>
                <button onClick={() => props.getItems(props.token, props.id)}>Your Items</button>
                <button onClick={() => handleGetAllItems()}>All Items</button>
                <button onClick={() => props.handleGetItem(props.signup.token, props.id)}>Get Specific Item</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

const handleGetAllItems = () => {
  getAllItemsAPI();
}
const handleGetUserItems = (ITEMid, dispatch) => {
  dispatch(getUserItemsAPI(TEST_USER_ID));
}

// const handleAddNewItem = () => {
//   dispatch(addNewItemAPI());
// }
// const handleUpdateItemAPI = (ITEMid) => {
//   dispatch(updateItemAPI(ITEMid));
// }
// const handleRemoveItemAPI = (ITEMid) => {
//   dispatch(removeItemAPI(ITEMid))
// }
const mapStateToProps = state => ({
  user: state.user,
  signup: state.signup
})

const mapDispatchToProps = (dispatch) => ({

  getItems: (_id) => dispatch(handleGetUserItems(_id, dispatch)),
  updateItemAPI: (_id) =>  dispatch(updateItemAPI(_id)),
  handleGetItem: (_id) => dispatch(getItemAPI(_id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Items));