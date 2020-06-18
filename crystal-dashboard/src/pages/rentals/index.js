import React from 'react';
import {Route} from 'react-router-dom';
import OpenRentals from './openRentals.js';
import OpenBorrowed from './openBorrowed.js';
// import ArchivedRentals from './archivedRentals.js';


let Rentals = ({match}) => (
  <div className='content'>
    <div className='container-fluid'>
      <Route path={`${match.url}/loaned`} component={OpenRentals} />
      <Route path={`${match.url}/borrowed`} component={OpenBorrowed} />
    </div>
  </div>
)

export default Rentals;