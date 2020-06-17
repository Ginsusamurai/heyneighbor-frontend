import React, { useContext, useEffect } from 'react';
import Header from './Header.js';
import { connect } from 'react-redux';

import Review from '../review';
import MyItems from '../Items/Items'
import { setMobileNavVisibility } from '../../reducers/Layout';
import cx from 'classnames';
import NeighborSidebar from '../../components/neighborSidebar';
import { Route, Router, Link, Switch } from 'react-router-dom';
import Signup from '../signup';
import Login from '../login';
import Rentals from '../rentals'


const NeighborMain = ({ mobileNavVisibility, hideMobileMenu, history, props }) => {
  // console.log('props',props);

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
            <NeighborSidebar />

            <div className="main-panel">
             <Header />

             <Route path="/my-items" component={MyItems} />
             <Route path="/review/write" component={Review} />
             <Route path="/signup" component={Signup}/>
             <Route path="/loggedin" component={Login} />
             <Route path="/rentals" component={Rentals} />
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
  state: state
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(NeighborMain);