import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import UserInfo from './UserInfo';
import Nav from './Nav';
import backgroundImage2 from '../../assets/images/HeyNeighbor.PNG';

class SideBar extends Component {

  state = {};

  render() {
    let {
      location,
      backgroundColor,
      enableBackgroundImage,
      backgroundImage2
    } = this.props;

    return (
      
      <div className="sidebar" data-color={backgroundColor} data-image={backgroundImage2}>

        <div className="">
            <img src={'https://raw.githubusercontent.com/bnates/cool-react/master/HeyNeighbor.PNG'} alt="logo" className="" />

        </div>

        <div className="sidebar-wrapper">
          <UserInfo />
          <div className="line"></div>
          <Nav />
        </div>
        {/* <div
          className="sidebar-background"
          style={{
            backgroundImage2: enableBackgroundImage ? 'url(' + backgroundImage2 + ')' : null
          }}>
        </div> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
  backgroundColor: state.ThemeOptions.backgroundColor,
  backgroundImage2: state.ThemeOptions.backgroundImage2
});

export default withRouter(
  connect(mapStateToProps)(SideBar)
);