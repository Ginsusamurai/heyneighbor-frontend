import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import _ from 'lodash';

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

const handleSubmit = (e) => {
  console.log(e);
}

const onSubmit = (e) => {
  console.log(e);
}

const ValidationForm = ({
  handleSubmit,
  onSubmit
}) => (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="header"><h4>Review</h4></div>
          <form className="form-horizontal" onSubmit={handleSubmit}>
            <div className="content">
              <div className="form-group">
                <label className="col-sm-3 control-label">Writer</label>
                <div className="col-sm-9">
                  <Field
                    type="text"
                    name="writer"
                    required="true"
                    component={renderField} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label">Subject</label>
                <div className="col-sm-9">
                  <Field
                    type="text"
                    name="subject"
                    required="true"
                    component={renderField} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label">Score</label>
                <div className="col-sm-9">
                  <Field
                    type="number"
                    name="score"
                    min="1"
                    max="5"
                    required="true"
                    component={renderField} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label">Review Body</label>
                <div className="col-sm-9">
                  <Field
                    type="text"
                    name="reviewBody"
                    required="true"
                    component={renderField} />
                </div>
              </div>
              
            </div>
            <div className="footer text-center">
              <button type="submit" className="btn btn-info btn-fill">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

export default reduxForm({
  form: 'validationForm',
  validate
})(ValidationForm);