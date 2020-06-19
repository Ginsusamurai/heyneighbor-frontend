import React from 'react';
import Items from './items.js';
import { Route } from 'react-router-dom';

let Tools = ({ match }) => (
  <div className="content">
    <div className="container-fluid">
      <Route path={`/my-items`} component={Items} />
    </div>
  </div>
);

export default Tools;