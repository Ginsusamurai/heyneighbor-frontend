import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter, Link } from 'react-router-dom';
import renderField from 'components/FormInputs/renderField';
import _ from 'lodash';
import { addNewItemAPI, getAllItemsSuccess, itemQueryFail } from '../../reducers/item.js';
const superagent = require('superagent');
require('dotenv').config();

const validate = values => {
  const errors = {};
  if (!values.required) {
    errors.required = 'This field is required';
  }
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (values.number && _.isNaN(values.number)) {
    errors.number = 'Please enter a number';
  }
  if (values.url && !/^https?:\/\//i.test(values.url)) {
    errors.url = 'Please enter a valid URL';
  }
  if (values.equal1 && values.equal1 !== values.equal2) {
    errors.equal2 = 'Does not match';
  }
  return errors;
}

const onSubmit = (e) => {
  console.log(e);
}
export function getOwnerID (ownerId) {
  console.log('OwnerID ************', `${process.env.BACKEND_ROOT}/${ownerId}`)
  return function (dispatch) {
    return superagent.post(`${process.env.BACKEND_ROOT}/user/:id${ownerId}`)
      .set({
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkFsZXg5OSIsImlhdCI6MTU5MjM2MjU5M30.w8idbipJw5P2pKrzZiwE4DI1I08-C-ixqHXEv0MLMyc'
      })
      .then(data => {
        console.log('This is _owner:', data.body);
        dispatch(getAllItemsSuccess(data.body))
      }).catch(err => dispatch(itemQueryFail))
  }
}
var CreateItem = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('itemCreateProps', props);

    let body = {};
    body._owner = props.user._id;
    body.item = e.target.item.value;
    body.type =e.target.type.value;
    body.documentation = e.target.documentation.value;
    body.subCategory = e.target.subCategory.value;
    body.description = e.target.description.value;
    body.image = e.target.image.value;
    console.log(props.signup.token, body);

    props.createItem(props.signup.token, body);
    
  }

  return (
    <div className="row">
    <div className="col-md-12">
      <div className="card">
        <div className="header"><h4>New Item</h4></div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <div className="content">
            <div className="form-group">
              <label className="col-sm-3 control-label">Name</label>
              <div className="col-sm-9">
                <Field
                  type="text"
                  name="item"
                  required="true"
                  component={renderField} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">Type</label>
              <div className="col-sm-9">
                <Field
                  type="text"
                  name="type"
                  required="true"
                  component={renderField} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">Documentation</label>
              <div className="col-sm-9">
                <Field
                  type="text"
                  name="documentation"
                  
                  component={renderField} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">Sub Category</label>
              <div className="col-sm-9">
                <Field
                  type="text"
                  name="subCategory"
                  required="true"
                  component={renderField} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">Description</label>
              <div className="col-sm-9">
                <Field
                  type="text"
                  name="description"
                  required="true"
                  component={renderField} />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-3 control-label">Image</label>
              <div className="col-sm-9">
                <Field
                  type="text"
                  name="image"
                  component={renderField} />
              </div>
            </div>
          </div>
          <div className="footer text-center">
            <Link to="/my-items" ><button type="submit" className="btn btn-info btn-fill">Submit</button></Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
};

const mapStateToProps = state => ({
  signup: state.signup,
  user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
  createItem: (token, body) => dispatch(addNewItemAPI(token, body))
})

CreateItem = connect(mapStateToProps, mapDispatchToProps)(CreateItem);

export default withRouter(reduxForm({form: 'CreateItem', validate})(CreateItem));
