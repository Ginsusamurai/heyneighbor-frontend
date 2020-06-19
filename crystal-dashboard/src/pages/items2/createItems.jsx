import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import _ from 'lodash';
const validate = values => {
  const errors = {};
  if (!values.required) {
    errors.required = ‘This field is required’;
  }
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = ‘Please enter a valid email’;
  }
  if (values.number && _.isNaN(values.number)) {
    errors.number = ‘Please enter a number’;
  }
  if (values.url && !/^https?:\/\//i.test(values.url)) {
    errors.url = ‘Please enter a valid URL’;
  }
  if (values.equal1 && values.equal1 !== values.equal2) {
    errors.equal2 = ‘Does not match’;
  }
  return errors;
}
const handleSubmit = (e) => {
  console.log(e);
}
const onSubmit = (e) => {
  console.log(e);
}
export function getOwnerID (ownerId) {
  console.log(‘OwnerID ************’, `${BACKEND_ROOT}/${ownerId}`)
  return function (dispatch) {
    return superagent.post(`${BACKEND_ROOT}/user/:id${ownerId}`)
      .set({
        ‘Authorization’: ‘Bearer ’ + ‘eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkFsZXg5OSIsImlhdCI6MTU5MjM2MjU5M30.w8idbipJw5P2pKrzZiwE4DI1I08-C-ixqHXEv0MLMyc’
      })
      .then(data => {
        console.log(‘This is _owner:’, data.body);
        dispatch(getAllItemsSuccess(data.body))
      }).catch(err => dispatch(itemQueryFail))
  }
}
const ValidationForm = ({ handleSubmit, onSubmit }) => (
  <div className=“row”>
    <div className=“col-md-12">
      <div className=“card”>
        <div className=“header”><h4>New Item</h4></div>
        <form className=“form-horizontal” onSubmit={handleSubmit}>
          <div className=“content”>
            <div className=“form-group”>
              <label className=“col-sm-3 control-label”>Name</label>
              <div className=“col-sm-9”>
                <Field
                  type=“text”
                  name=“item”
                  required=“true”
                  component={renderField} />
              </div>
            </div>
            <div className=“form-group”>
              <label className=“col-sm-3 control-label”>Type</label>
              <div className=“col-sm-9”>
                <Field
                  type=“text”
                  name=“type”
                  required=“true”
                  component={renderField} />
              </div>
            </div>
            <div className=“form-group”>
              <label className=“col-sm-3 control-label”>Documentation</label>
              <div className=“col-sm-9”>
                <Field
                  type=“text”
                  name=“documentation”
                  required=“false”
                  component={renderField} />
              </div>
            </div>
            <div className=“form-group”>
              <label className=“col-sm-3 control-label”>Sub Category</label>
              <div className=“col-sm-9”>
                <Field
                  type=“text”
                  name=“subCategory”
                  required=“true”
                  component={renderField} />
              </div>
            </div>
            <div className=“form-group”>
              <label className=“col-sm-3 control-label”>Description</label>
              <div className=“col-sm-9”>
                <Field
                  type=“text”
                  name=“description”
                  required=“true”
                  component={renderField} />
              </div>
            </div>
            <div className=“form-group”>
              <label className=“col-sm-3 control-label”>Image</label>
              <div className=“col-sm-9”>
                <Field
                  type=“text”
                  name=“image”
                  required=“false”
                  component={renderField} />
              </div>
            </div>
          </div>
          <div className=“footer text-center”>
            <button type=“submit” className=“btn btn-info btn-fill”>Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
export default reduxForm({form: 'validationForm', validate})(ValidationForm);
