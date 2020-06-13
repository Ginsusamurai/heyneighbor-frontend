import React, { useContext, useEffect } from 'react';
import Header from './Header.js';
import { connect } from 'react-redux';
import { getRemoteData } from '../../reducers/item.js';

const NeighborMain = props => {
  console.log('props',props);

  // const loadItem = (e) => {
  //   e && e.preventDefaul();
  //   if(props.items && props.items.length === 0){
  //     props.getItems();
  //   }
  // }

  // loadItem();

  return(
      <Header />
  )
}


const mapStateToProps = state => ({
  items: state.items,
  item: state.item,
  state: state
})

const mapDispatchToProps = (dispatch) => ({
  getItems: () => dispatch(getRemoteData('item'))
})

export default connect(mapStateToProps, mapDispatchToProps)(NeighborMain);