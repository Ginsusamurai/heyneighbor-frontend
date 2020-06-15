import React, { useContext, useEffect } from 'react';
import Header from './Header.js';
import { connect } from 'react-redux';
import { getRemoteData } from '../../reducers/item.js';
import Review from '../review';
import { setMobileNavVisibility } from '../../reducers/Layout';
import cx from 'classnames';
import SideBar from '../../components/neighborSidebar';
import { Route, Router } from 'react-router-dom';



const NeighborMain = ({ mobileNavVisibility, hideMobileMenu, history, props }) => {
  console.log('props',props);

  // const loadItem = (e) => {
  //   e && e.preventDefaul();
  //   if(props.items && props.items.length === 0){
  //     props.getItems();
  //   }
  // }

  // loadItem();

  return(
    <div className={cx({
      'nav-open': mobileNavVisibility === true
    })}>

    <div className="content">
      <div className="container-fluid">
        <div className="wrapper">
          <div className="close-layer" onClick={hideMobileMenu}></div>
            <SideBar />

            <div className="main-panel">
             <Header />
             <Route path="/review/write" component={Review} />
            {/* <Route exact path="/" component={Dashboard} />
            <Route path="/components" component={Components} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/forms" component={Forms} />
            <Route path="/tables" component={Tables} />
            <Route path="/maps" component={MapsPage} />
            <Route path="/charts" component={Charts} />
            <Route path="/calendar" component={Calendar} /> */}
            {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
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