import React from 'react';
import { Route } from 'react-router-dom';
import Signup from './signup.js';


const Forms = ({match}) => (
  <div className="content">
    <div className="container-fluid">
      <Signup />      
    </div>
  </div>
);

export default Forms;