import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemApiActions, selectAllItems } from "./store";
const TEST_USER_ID = "5ebdacde2958a28b90e76de8"

const Items = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(state => {
    console.log(state);
    return selectAllItems(state.items)
  })
  const handleGetAllItems = () => {
    dispatch(ItemApiActions.getAllItemsAPI());
  }

  const handleGetUserItems = () => {
    dispatch(ItemApiActions.getUserItemsAPI(TEST_USER_ID));
  }
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
                <button onClick={handleGetUserItems}>Get the items</button>
                <button onClick={handleGetAllItems}>Get aLL the items</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Items;