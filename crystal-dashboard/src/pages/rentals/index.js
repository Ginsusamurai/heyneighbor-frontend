import React from 'react';
import Router from 'react-router-dom';
import OpenRentals from './openRentals.js';
// import ArchivedRentals from './archivedRentals.js';


let Rentals = props => (
  <div className='content'>
    <div className='container-fluid'>
      <OpenRentals />
    </div>
  </div>
)

export default Rentals;