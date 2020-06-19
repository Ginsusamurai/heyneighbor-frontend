import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import UserInfo from './UserInfo';
import Nav from './Nav';
import backgroundImage2 from '../../../src/assets/images/HeyNeighbor.PNG';


class SideBar extends Component {

  state = {};

  render() {
    let {
      location,
      backgroundColor,
      enableBackgroundImage,
      backgroundImage
    } = this.props;

    return (
      <div className="sidebar" data-color={backgroundColor} data-image={backgroundImage}>

        <div className="brand">
            <img src={'http://raw.githubusercontent.com/bnates/cool-react/master/HeyNeighbor.PNG'} alt="logo" className="logo" />       
        </div>

        <div className="sidebar-wrapper">
          <UserInfo />
          <div className="line"></div>
          <Nav />
        </div>
        <div
          className="sidebar-background"
          style={{
            backgroundImage: enableBackgroundImage ? 'url(' + backgroundImage + ')' : null
          }}>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
  backgroundColor: state.ThemeOptions.backgroundColor,
  backgroundImage: state.ThemeOptions.backgroundImage
});

export default withRouter(
  connect(mapStateToProps)(SideBar)
);