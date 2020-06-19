import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';


class Nav extends Component {

  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          {/* <Link to="/">
            <i className="pe-7s-graph"></i>
            {/* <p>Dashboard</p> */}
           
        </li>
        <li className={this.isPathActive('/items') || this.state.itemMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ itemMenuOpen: !this.state.itemMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-plugin"></i>
            <p>
              Items
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.itemMenuOpen}>
            <div>
              <ul className="nav">
                <li id="interesting" className={this.isPathActive('/components/buttons') ? 'active' : null}>
                  <Link to="/my-items">My Items</Link>
                </li>
                <li className={this.isPathActive('/components/buttons') ? 'active' : null}>
                  <Link to="/others-items">Others Items</Link>
                </li>
                <li className={this.isPathActive('/components/grid') ? 'active' : null}>
                  <Link to="/add-item">Add Item</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/reviews') || this.state.reviewMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ reviewMenuOpen: !this.state.reviewMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-news-paper"></i>
            <p>
              Reviews
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.reviewMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/my-reviews') ? 'active' : null}>
                  <Link to="/my-reviews">My Reviews</Link>
                </li>
                <li className={this.isPathActive('/reviews-of-me') ? 'active' : null}>
                  <Link to="/reviews-of-me">Reviews of me</Link>
                </li>
                <li className={this.isPathActive('reviews-of-my-items') ? 'active' : null}>
                  <Link to="reviews-of-my-items">Reviews of my Items</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
        <li className={this.isPathActive('/rentals') || this.state.rentalMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ rentalMenuOpen: !this.state.rentalMenuOpen })}
            data-toggle="collapse">
            <i className="pe-7s-note2"></i>
            <p>
              Rentals
            <b className="caret"></b>
            </p>
          </a>
          <Collapse in={this.state.rentalMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/rentals/loan') ? 'active' : null}>
                  <Link to="/rentals/loaned">My Loans</Link>
                </li>
                <li className={this.isPathActive('/rentals/borrow') ? 'active' : null}>
                  <Link to="/rentals/borrowed">My Borrows</Link>
                </li>
                <li className={this.isPathActive('/rentals/archive') ? 'active' : null}>
                  <Link to="/rentals/archived">Archived</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>


        {/* <li className={this.isPathActive('/tables') || this.state.tableMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ tableMenuOpen: !this.state.tableMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-news-paper"></i>
            <p>Tables <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.tableMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/tables/regular-tables') ? 'active' : null}>
                  <Link to="/tables/regular-tables">Regular Table</Link>
                </li>
                <li className={this.isPathActive('/tables/extended-tables') ? 'active' : null}>
                  <Link to="/tables/extended-tables">Extended Tables</Link>
                </li>
                <li className={this.isPathActive('/tables/fixed-data-table') ? 'active' : null}>
                  <Link to="/tables/react-bootstrap-table">React Bootstrap Table</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li> */}
        {/* <li className={this.isPathActive('/maps') || this.state.mapMenuOpen ? 'active' : null}>
          <a onClick={() => this.setState({ mapMenuOpen: !this.state.mapMenuOpen })} data-toggle="collapse">
            <i className="pe-7s-map-marker"></i>
            <p>Map <b className="caret"></b></p>
          </a>
          <Collapse in={this.state.mapMenuOpen}>
            <div>
              <ul className="nav">
                <li className={this.isPathActive('/maps/google-map') ? 'active' : null}>
                  <Link to="/maps/google-map">Google Map</Link>
                </li>
                <li className={this.isPathActive('/maps/vector-map') ? 'active' : null}>
                  <Link to="/maps/vector-map">Vector Map</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li> */}
        {/* <li className={this.isPathActive('/charts') ? 'active' : null}>
          <Link to="/charts">
            <i className="pe-7s-graph"></i>
            <p>Charts</p>
          </Link>
        </li> */}
        {/* <li className={this.isPathActive('/calendar') ? 'active' : null}>
          <Link to="/calendar">
            <i className="pe-7s-date"></i>
            <p>Calendar</p>
          </Link>
        </li> */}
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);