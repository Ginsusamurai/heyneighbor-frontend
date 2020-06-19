import React from 'react';
import Others from './others.js';
import { Route } from 'react-router-dom';

let OthersTools = ({ match }) => (
  <div className="content">
    <div className="container-fluid">
      <Route path={`/others-items`} component={Others} />
    </div>
  </div>
);

export default OthersTools;