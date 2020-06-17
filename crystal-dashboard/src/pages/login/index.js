import React from 'react';
import Login from './login.js';
import { Route } from 'react-router-dom';


// let LoginPage = props => (
//   <div className='content'>
//     <div className='container-fluid'>
//       <Login  />
//     </div>
//   </div>
// )

// export default LoginPage;


let Forms = ({ match }) => (
  <div className="content">
    <div className="container-fluid">
      <Route path={`/loggedin`} render={props => {
        return <Login {...props} onSubmit={values => alert(JSON.stringify(values, null, 2))} />
      }} />
    </div>
  </div>
);

export default Forms;